import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import {Grid, Pagination, Stack} from "@mui/material";
import Box from "@mui/material/Box";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function UserRepos({repos}) {
    const router = useRouter();
    const {login: user} = router.query;
    const [data, setData] = useState(null);
    const [page, setPage] = useState(1);
    const count = Math.ceil(repos/6);


    const handleChange = (event, value) => {
        setPage(value);
    };

    useEffect(() => {
        if (!user) return;
        axios(`https://api.github.com/users/${user}/repos?page=${page}&per_page=6`)
            .then((response) => {
                setData(response.data);
            })
    }, [user, page]);


    return (
        <>
            <div className="border-t border-gray-700"/>
            <h1 className=" h-9 text-2xl  justify-center text-white flex">Repositories</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                {data?.map((value,index) => (
                    <div className="flex-row flex">
                        <div
                            className="flex p-5 px-4 m-2 rounded-lg border border-neutral-500  items-center w-full justify-around md:text-left md:flex-1 md:items-start md:justify-between">
                            <Box sx={{flexGrow: 1}}>
                                <Stack>
                                    <Grid container spacing={2} className="text-white">
                                        <Grid item xs>
                                            <div key={index} className="text-white text-xl">{value.name}</div>
                                        </Grid>
                                        <Grid item xs display={"flex"} flexDirection={"column"} alignItems="flex-end">
                                            <div key={index}
                                                className="bg-gray-500  rounded-lg text-center w-16 mb-3">{value.visibility}</div>
                                        </Grid>
                                    </Grid>
                                    <Grid container spacing={2} mt={2}>
                                        <Grid item xs display={"flex"} flexDirection={"row"}>
                                            {
                                                value.language && (
                                                    <>
                                                        <div className="flex h-2 w-2 rounded-full bg-red-400 "/>
                                                        <div key={index} className="text-zinc-500 ml-2 -mt-2">{value.language}</div>
                                                    </>
                                                )
                                            }
                                        </Grid>
                                        <Grid item>
                                            <Grid container spacing={2} className="-mt-6" display={"flex"}
                                                  justifyContent="flex-end">
                                                <Grid className="text-sm text-gray-500" item xs={2}
                                                      md={3}><StarBorderIcon/></Grid>
                                                <Grid key={index} className="text-lg text-gray-500 ml-2"
                                                      item>{value.stargazers_count}</Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>

                                </Stack>
                            </Box>

                        </div>
                    </div>
                ))}
            </div>
            <div style={{alignItems: 'center', justifyContent: 'center', display: "flex"}}>
                <Pagination
                    sx={{
                        ul: {
                            "& .MuiPaginationItem-root": {
                                color: "#fff",
                                borderColor: '#e8eaf6'
                            }
                        }
                    }}
                    count={count}
                    variant="outlined"
                    color="primary"
                    onChange={handleChange}
                />
            </div>
        </>
    )
}




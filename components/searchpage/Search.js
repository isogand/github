import Searchbar from "./Searchbar";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import User from "./user/User";
import * as React from 'react';
import {LinearProgress, Snackbar, Stack} from "@mui/material";
import Button from "@mui/material/Button";

const Error = ({error,setError}) => {
    const handleClose = () => {
        setError("");
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
        </React.Fragment>
    );
    return (
        <div>
            <Snackbar
                open={!!error}
                autoHideDuration={3000}
                message={error}
                action={action}
                onClose={handleClose}
            />
        </div>
    )
}

function Loding() {
    return (
        <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
            <LinearProgress color="secondary"/>
            <LinearProgress color="success"/>
            <LinearProgress color="inherit"/>
        </Stack>
    )
}

export default function Search() {
    const [user, setUser] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const userRef = useRef(null);
    const [error, setError] = useState("");

    useEffect(() => {
        if (!user) return;
        setLoading(true);
        axios(`https://api.github.com/users/${user}`)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                const errorMessage = (error.response?.data?.message || "Network Error")+ " 😔"
                setError(errorMessage)
            })
            .finally(() => {
                setLoading(false);
            });
    }, [user]);

    return loading ? <Loding/> : (
        <div>
            <>
                <Searchbar
                    userRef={userRef}
                    user={user}
                    onChange={e => setUser(e.target.value)}
                    handleClick={()=>{
                        setUser(userRef.current.value);
                    }}
                />
                {data && (
                    <User data={data}/>
                )}
            </>
            <Error error={error} setError={setError}/>
        </div>
    )
}



import NavBar from "../../components/navbar/nav-bar";
import {useRouter} from "next/router";
import axios from "axios";
import {useEffect, useState} from "react";
import UserProfile from "../../components/searchpage/user/UserProfile";
import UserStats from "../../components/searchpage/user/UserStats";
import UserRepos from "../../components/searchpage/user/UserRepos";


export default function Profile() {
    const router = useRouter();
    const {login: user} = router.query;
    const [data, setData] = useState(null);

    useEffect(() => {
        if (!user) return;
        axios(`https://api.github.com/users/${user}`)
            .then((response) => {
                setData(response.data);
            })
    }, [user]);

    return (
        <>
            <NavBar />

             <div className="shadow-2xl mx-auto mt-6 flex max-w-sm min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-800 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
                 <UserProfile
                     name={data?.name}
                     location={data?.location}
                     username={data?.login}
                     avatar_url={data?.avatar_url}
                />


                <div className="flex w-full  flex-col space-y-6 px-6 py-9">
                    <UserStats
                        repos={data?.public_repos}
                        followers={data?.followers}
                        following={data?.following}
                        bio = {data?.bio}
                        blog = {data?.blog}
                    />
                    <UserRepos  repos={data?.public_repos}/>
                </div>
            </div>
        </>
    )
}




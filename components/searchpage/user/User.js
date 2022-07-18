import UserProfile from "./UserProfile";
import UserStats from "./UserStats";



const User = (props) => {
    const date = new Date(props.data.created_at);
    const newDate = date.toDateString(4, 10).slice(4, 15);
    console.log("**",props.data.avatar_url);

    return (
        <>
            {
                props.data.avatar_url ? (
                <div className="mx-auto mt-6 flex max-w-sm min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-800 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
                    <UserProfile
                        name={props.data.name}
                        date={newDate}
                        username={props.data.login}
                        imageURL={props.data.avatar_url}
                    />

                    <div className=" flex w-full md:max-w-lg flex-col space-y-6 px-6 py-3">
                        <UserStats
                            repos={props.data.public_repos}
                            followers={props.data.followers}
                            following={props.data.following}
                        />
                    </div>
                </div>
            ):(null)
            }
        </>
    )
}

export default User;

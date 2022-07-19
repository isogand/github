import UserDetail from "./UserDetail";

const User = (props) => {
    return (
        <div className="shadow-2xl mx-auto mt-6 flex max-w-sm min-h-[470px] flex-col items-end justify-between  space-y-4 rounded-lg bg-gray-800 py-6 transition duration-300 ease-in dark:bg-[#2b365e] md:min-h-fit md:max-w-2xl">
            {
                props.data?.avatar_url ? (
                 <UserDetail
                     name={props.data.name}
                     login={props.data.login}
                     imageURL={props.data.avatar_url}
                />
            ): null
            }
        </div>
    )
}

export default User;

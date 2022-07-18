import React from 'react'

const UserStats = ({repos,followers ,following,bio,blog}) => {
    return (
        <>
            <div  style={{flexDirection:'row',display:"flex"}}>
                <div
                    className="flex items-center w-full justify-around  px-2 text-center md:text-left md:flex-1 md:items-start md:justify-between">
                    <h2 className="w-64 font-mono text-white dark:text-gray-50">
                        {bio}{' '}
                    </h2>

                </div>
                <div
                    className="flex items-center w-full justify-around  px-2 text-center md:text-left md:flex-1 md:items-start md:justify-between">
                    <h2 className=" font-mono text-white dark:text-gray-50">
                        {blog}{' '}
                    </h2>

                </div>
            </div>


                <div className=" grid grid-cols-3 text-white gap-6  divide-x divide-gray-700 rounded-xl  py-4 dark:divide-gray-50 dark:bg-[#1e253f]">
                    <div className="align-items flex flex-col px-4 text-center">
                        <h4 className="font-mono text-xs  text-white dark:text-gray-400 ">
                            Repos
                        </h4>
                        <p className="font-mono text-lg  text-white dark:text-gray-50 ">
                            {repos}
                        </p>
                    </div>

                    <div className="align-items flex flex-col text-center">
                        <h4 className="font-mono text-xs  text-white dark:text-gray-400 ">
                            Followers
                        </h4>
                        <p className="font-mono text-lg  text-white dark:text-gray-50 ">
                            {followers}
                        </p>
                    </div>

                    <div className="align-items flex flex-col text-center">
                        <h4 className="font-mono text-xs  text-white dark:text-gray-400 ">
                            Following
                        </h4>
                        <p className="font-mono text-lg  text-white dark:text-gray-50 ">
                            {following}
                        </p>
                    </div>
                </div>

        </>

    )
}

export default UserStats
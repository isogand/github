import Image from "next/image";
import * as React from 'react';


const UserProfile = ({name, location, username, imageURL}) => {
    return (
        <>
            <div
                className=" flex flex-col md:flex-row w-full   items-center  md:justify-evenly md:space-x-6">

                <div className="border-2 border-Fuchsia-900 w-[120px] h-[120px] md:ml-8   dark:ring-[#053bff] rounded-full ">
                    <Image
                        className="rounded-full"
                        objectFit="cover"
                        src={imageURL}
                        width={117}
                        height={117}
                        layout="fixed"
                    />
                </div>


                <div
                    className="flex items-center w-full justify-around  px-2 text-center md:text-left md:flex-1 md:items-start md:justify-between">
                    <h2 className="w-32 md:w-44 font-mono text-lg font-bold text-white dark:text-gray-50 md:text-2xl">
                        {name}{' '}
                        <div className=" font-mono text-sm text-gray-400">
                           {username}
                        </div>
                    </h2>

                </div>
                <div
                    className="flex items-center w-full justify-around  px-2 text-center md:text-left md:flex-1 md:items-start md:justify-between">
                    <h2 className="w-32 md:w-44 font-mono text-lg font-bold text-white dark:text-gray-50 md:text-2xl">
                        📍{location}{' '}
                    </h2>

                </div>
            </div>
        </>
    )
}

export default UserProfile
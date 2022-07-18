import Image from "next/image";
import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Divider from "@mui/material/Divider";
import {Stack} from "@mui/material";


const UserProfile = ({name, date, username, imageURL}) => {
    return (
        <>
            <div
                className=" flex flex-col md:flex-row w-full   items-center space-y-6 space-x-4  md:justify-evenly md:space-x-6">
                {imageURL ? (
                    <div className=" w-[120px] h-[120px] md:ml-8   dark:ring-[#053bff] rounded-full ">
                        <Image
                            className="rounded-full"
                            objectFit="cover"
                            src={imageURL}
                            width={110}
                            height={110}
                            layout="fixed"
                        />
                    </div>
                ) : (
                        <p className="text-lg font-bold font-mono text-center pt-8 text-gray-800 dark:text-gray-200">No
                            Image Found</p>
                    )
                }
                <div
                    className="flex items-center w-full justify-around space-x-6 px-2  md:flex-1 md:items-start md:justify-between">
                    <h2 className="w-32 md:w-44 font-mono text-lg font-bold text-gray-400 dark:text-gray-50 md:text-2xl">
                        {name}{' '}
                        <span className="inline-block font-mono text-sm text-blue-400">
                           {username && `@${username ? username : 'Not Available'}`}
                        </span>
                    </h2>

                </div>
            </div>
        </>
    )
}

export default UserProfile
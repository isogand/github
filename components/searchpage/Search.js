import Searchbar from "./Searchbar";
import {useEffect, useRef, useState} from "react";
import axios from "axios";
import User from "./user/User";
import * as React from 'react';
import {LinearProgress, Snackbar, Stack} from "@mui/material";
import Button from "@mui/material/Button";

export default function Search() {
    const [user, setUser] = useState('');
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const userRef = useRef(null);
    let url = 'https://api.github.com/users'


    function handleClick() {
        setUser(userRef.current.value);
    }

    useEffect(() => {
        setLoading(true)
        if (user) {
            url = `https://api.github.com/users/${user}`
        }
        axios(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [user]);


    function Loding() {
        return (
            <Stack sx={{width: '100%', color: 'grey.500'}} spacing={2}>
                <LinearProgress color="secondary"/>
                <LinearProgress color="success"/>
                <LinearProgress color="inherit"/>
            </Stack>
        )
    }

    if (loading) return (<Loding/>);

    function Error() {
        const [open, setOpen] = React.useState(true);
        const handleClose = () => {
            setOpen(false);
            console.log("handleClose", handleClose);
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
                    open={open}
                    autoHideDuration={6000}
                    message="User not found 😔 "
                    action={action}
                />
            </div>
        )
    }

    const onChange = e => setUser(e.target.value);
    let view;
    const children = <>
        <Searchbar
            user={user}
            handleClick={handleClick}
            userRef={userRef}
            onChange={onChange}
        />
        <User data={data}/>
    </>
    if (error) {
        view = <>
            {children}
            <Error/>
        </>
    } else {
        view = <>
            {children}
        </>
    }


    return (
        <div>
            {view}
        </div>
    )
}



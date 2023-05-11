import {Stack} from "@mui/material";
import {useForm} from 'react-hook-form';
import React, {useEffect, useState} from "react";
import TwoFaModal from "../components/Authentication/TwoStep/TwoStepVerification.jsx";
import Header from "../components/Authentication/Header.jsx";
import Username from "../components/Authentication/Username.jsx";
import Password from "../components/Authentication/Password.jsx";
import Captcha from "../components/Authentication/Captcha.jsx";
import Continue from "../components/Authentication/Continue.jsx";
import Setting from "../components/Authentication/Setting.jsx";

const Authentication = () => {

    const {handleSubmit, watch, formState: {errors}, control} = useForm();

    const [open, setOpen] = useState(false);
    const handelModal = () => setOpen(prev => !prev)

    //? check every inputs has a value
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
    useEffect(() => {

        const isDisabled = Object.values(watch(["username", "password"]))
            .some((value) => value === "" || value === undefined);

        setIsButtonDisabled(isDisabled)

    }, [watch(["username", "password"])]);


    const onSubmit = data => {
        if (data.username === 'Admin' && data.password === 'Admin') {
            console.log('Login successful');
        } else {
            console.log('Invalid username or password');
        }
    };

    return (
        <>
            <Stack
                width={290}
                height={550}
                sx={{
                    position: "absolute",
                    top: "0",
                    bottom: "0",
                    left: "0",
                    right: "0",
                    margin: "auto",
                }}>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Stack spacing={3}>

                        <Header/>

                        <Username
                            control={control}
                            errors={errors}/>

                        <Password
                            control={control}
                            errors={errors}/>

                        <Captcha/>

                        <Continue
                            handelModal={handelModal}
                            isButtonDisabled={isButtonDisabled}/>
                    </Stack>

                </form>

            </Stack>

            <Setting/>

            <TwoFaModal
                handelModal={handelModal}
                open={open}/>
        </>
    );
};

export default Authentication;


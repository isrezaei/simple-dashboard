import React, {useState} from 'react';
import {Button, Modal, Stack, Typography, useTheme} from "@mui/material";
import PinInput from 'react-pin-input';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";
import {CountdownCircleTimer} from 'react-countdown-circle-timer'
import AutorenewIcon from '@mui/icons-material/Autorenew';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 300,
    borderRadius: 5,
    bgcolor: 'background.paper',
    boxShadow: 5,
    p: 4,
};

const TwoFaModal = ({handelModal, open}) => {

    const router = useNavigate()

    const {t} = useTranslation();
    const {palette: {primary}} = useTheme();

    const [length, setLength] = useState("0")

    const [reSendCode, setReSendCode] = useState(false)
    const [play, setPlay] = useState(true)

    const handelComplete = () => {
        setReSendCode(true)
        setPlay(false)
    }

    const handelStart = () => {
        setReSendCode(false)
        setPlay(true)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handelModal}
            >
                <Stack
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"center"}
                    sx={modalStyle}>
                    {
                        length.length < 4 ?
                            <LockOutlinedIcon color={"error"} sx={{fontSize: 50}}/>
                            :
                            <LockOpenOutlinedIcon color={"primary"} sx={{fontSize: 50}}/>
                    }

                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {t("Authentication")}
                    </Typography>

                    <Typography fontSize={13}>
                        {t("Please enter the four-digit code sent")}
                    </Typography>

                    <Stack
                        width={"full"}
                        alignItems={"center"}>
                        {
                            reSendCode ?
                                <AutorenewIcon
                                    onClick={handelStart}
                                    fontSize={"large"}/>
                                :
                                <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={1}>
                                    <CountdownCircleTimer
                                        isPlaying={play}
                                        size={35}
                                        strokeWidth={2.5}
                                        duration={8}
                                        colors={[primary.main]}
                                        colorsTime={[0]}
                                        onComplete={handelComplete}
                                    >
                                        {({remainingTime}) => remainingTime}
                                    </CountdownCircleTimer>
                                </Stack>
                        }

                        <PinInput
                            length={4}
                            secretDelay={100}
                            onChange={(value, index) => {
                                setLength(value)
                            }}
                            type="numeric"
                            inputMode="number"
                            style={{padding: '10px'}}
                            inputStyle={{borderColor: "gray", color: primary.main, borderRadius: 5, padding: 8}}
                            inputFocusStyle={{borderColor: primary.main}}
                            autoSelect={true}
                        />
                    </Stack>

                    <Button onClick={() => router("/dashboard")} sx={{width: "250px"}} size={"small"}
                            variant={"contained"} disabled={length.length < 4}>
                        {length.length < 4 ? t("Enter code") : t("Login to the admin panel")}
                    </Button>

                </Stack>
            </Modal>
        </div>
    );
};

export default TwoFaModal;
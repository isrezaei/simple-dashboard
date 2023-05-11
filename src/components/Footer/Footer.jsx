import {Stack, Typography} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
    return (
        <Stack width={"100%"}  p={3}  bgcolor={"background.paper"} spacing={2}>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                <Typography fontSize={12} fontWeight={"bold"} color="textSecondary" align="center">درباره ما</Typography>
                <Typography fontSize={12} fontWeight={"bold"} color="textSecondary" align="center">آدرس</Typography>
                <Typography fontSize={12} fontWeight={"bold"} color="textSecondary" align="center">پشتیبانی</Typography>
                <Typography fontSize={12} fontWeight={"bold"} color="textSecondary" align="center">تماس با ما</Typography>
            </Stack>

            <Stack direction={"row"} justifyContent={"center"} alignItems={"center"} spacing={3}>
                <TwitterIcon color={"primary"}/>
                <FacebookIcon color={"primary"}/>
                <InstagramIcon color={"primary"}/>
                <LinkedInIcon color={"primary"}/>
            </Stack>


            <Typography fontSize={12} color="textSecondary" align="center">
                © {new Date().getFullYear()} کلیه حقوق متعلق به این سایت است
            </Typography>
        </Stack>
    );
}
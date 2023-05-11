import VBarChart from "../components/Dashboard/VBarChart.jsx";
import AreaChart from "../components/Dashboard/AreaChart.jsx";
import StackedBarChart from "../components/Dashboard/StackedBarChart.jsx";
import DateTime from "../components/Dashboard/DateTime.jsx";
import Products from "../components/Dashboard/Products.jsx";
import DateCalendar from "../components/Dashboard/DateCalendar.jsx";
import MultitypeChart from "../components/Dashboard/MultitypeChart.jsx";
import {Box, Grid, Stack} from "@mui/material";
import Sales from "../components/Dashboard/Sales.jsx";
import {elastic as Menu} from 'react-burger-menu'
import {slide as Menuu} from 'react-burger-menu'
import Sidebar from "../components/Sidebar.jsx";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer";
import {useTheme} from "@mui/material";
import {useRecoilState, useRecoilValue} from "recoil";
import {HandelDashboard, HandelTranslation} from "../Recoil/atoms.js";


const Dashboard = () => {

    const [dashboard, setDashboard] = useRecoilState(HandelDashboard)
    const {palette: {background}} = useTheme()
    const translation = useRecoilValue(HandelTranslation)


    const styles = {
        bmBurgerButton: {
            display: "none"
        },

        bmCross: {
            background: '#bdc3c7'
        },
        bmMenuWrap: {
            position: 'fixed',
            height: '100%'
        },
        bmMenu: {
            background: background.paper,
            padding: "2rem 0"
        },
        bmMorphShape: {
            fill: background.paper,
        },
        bmOverlay: {
            display: "none"
        }
    }


    return (
        <>
            <Menu width={260}
                  right
                  isOpen={dashboard}
                  onClose={() => setDashboard(prev => !prev)}
                  styles={styles}
                  pageWrapId={"page-wrap"}>
                <Sidebar/>
            </Menu>

            <Stack id="page-wrap"
                   maxWidth={"1150px"}
                   mx={"auto"}
                   mb={5}
                   direction={"column"}
                   justifyContent={{xs: "flex-start"}}
                   alignItems={"center"}>

                <Header/>

                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <DateTime/>
                    <Sales/>
                    <VBarChart/>
                    <AreaChart/>
                    <StackedBarChart/>
                    <MultitypeChart/>
                    <Products/>
                    <DateCalendar/>

                </Grid>
            </Stack>

            <Footer/>
        </>
    );
};

export default Dashboard;
import { BannerNotification } from "../components/BannerNotification";
import './Home.css'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SegmentControl from '../components/SegmentControl';
import DateTextBox from '../components/DateTextBox';
import ExpandableInfo from '../components/ExpandableInfo';
import BrochureInfo from '../components/BrochureInfo';
import AvivaButton from "../components/AvivaButton";
import Footer from "../components/Footer";
import ChoosePlan from "./chooseplan/ChoosePlan";
import Payment from "./payment/Payment";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            paddingTop: '80px',
            paddingBottom: '20px',
            [theme.breakpoints.down('xs')]: {
                paddingTop: '40px',
                paddingBottom: '0px',
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
        gridBox1: {
            width: '75%',
            [theme.breakpoints.down('md')]: {
                width: '90%',
            },
            flexFlow: 'column wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            maxWidth: '100%',
            margin: '0 20px 40px',
        },
        gridBox2: {
            width: '75%',
            float: 'right',
            [theme.breakpoints.down('md')]: {
                width: '100%',
            },
        },
        labelGetStarted: {
            fontSize: '32px',
            lineHeight: '40px',
            color: '#5c596d',
            fontFamily: 'source_sans_pro_vf,-apple-system, system-ui,sans-serif !important',
            margin: '0px !important',
        },
        item: {
            maxWidth: '35% !important',
            [theme.breakpoints.down('md')]: {
                maxWidth: '100% !important',
            },
        },

        moveToRight: {

        }
    }),
);


function Home() {

    const [isStarted, setIsStarted] = React.useState(true);
    const [isChoosePlan, setIsChoosePlan] = React.useState(false);
    const [isPayment, setIsPayment] = React.useState(false);
    const [fromPayment, setFromPayment] = React.useState(false);

    const [validDate, setValidDate] = React.useState(null)
    const [gender, setGender] = React.useState(null)
    const importantInfoContent = [
        'MyLongTermCare / MyLongTermCare Plus (Supplements) can be purchased by CareShield Life (CSHL) or ElderShield (ESH) policyholders.',
        'If purchased by ESH policyholders before the transfer of ESH to Government administration, these Supplements are consider as ESH Supplements regulated under CPF (Withdrawals for ESH Scheme) Regulations. Otherwise, these Supplements are considered as CSHL Supplements regulated under the CSHL and Long-Term Care Act.'
    ];
    const notificationMessage = ['Applicable to Singapore Citizens and Singapore Permanent Residents only.'];
    const genderValues = ["Male", "Female"];

    const handleGenderChange = (event, value) => {
        setGender(value);
        console.log("Selected Gender " + value);
    };
    const handleDateChange = (value) => {
        setValidDate(value)
        console.log("Selected Date " + value);
    };
    const history = useHistory();

    const handleContinue = () => {
        // history.push("/chooseplan");
        //setIsStarted(false); setIsChoosePlan(true);
        setTimeout(() => {
            SmoothVerticalScrolling(document.getElementsByTagName('body')[0], 150, "top");
        }, 150);
        setTimeout(() => { setIsStarted(false); setIsChoosePlan(true)}, 300);
    }
    history.listen(({ pathname }) => {
        window.scrollTo(0, 0)
    });

    function SmoothVerticalScrolling(e, time, where) {
        var eTop = e.getBoundingClientRect().top - 1300;
        var eAmt = eTop / 100;
        var curTime = 0;
        while (curTime <= time) {
            window.setTimeout(SVS_B, curTime, eAmt, where);
            curTime += time / 100;
        }
    }
    function SVS_B(eAmt, where) {
        if(where == "center" || where == "")
            window.scrollBy(0, eAmt / 2);
        if (where == "top")
            window.scrollBy(0, eAmt);
    }
    
    const handleChoosePlanBack = () => {
        setFromPayment(false);
        setTimeout(() => {
            SmoothVerticalScrolling(document.getElementsByTagName('body')[0], 150, "top");
        }, 150);
        setTimeout(() => { setIsChoosePlan(false); setIsStarted(true)}, 300);
    }

    const handleChoosePlanContinue = () => {
        setTimeout(() => {
            SmoothVerticalScrolling(document.getElementsByTagName('body')[0], 150, "top");
        }, 150);
        // setFromPayment(false); 
        setTimeout(() => { setIsChoosePlan(false); setIsPayment(true)}, 300);
    }

    const handlePaymentBack = () => {
        setTimeout(() => {
            SmoothVerticalScrolling(document.getElementsByTagName('body')[0], 50, "top");
        }, 150);
        setFromPayment(true);
        setTimeout(() => { setIsChoosePlan(true); setIsPayment(false); }, 300);
    }


    const classes = useStyles();
    return (
        <>
            <div class="formality__main">
                <div className={`formality__section ${(isStarted ? 'moveFromLeft formality__section--active' : 'moveToLeft')}`}>
                    <div className={classes.root}>
                        <Grid container >
                            <Grid item xs={12} md={7}>
                                <div className={classes.gridBox1}>
                                    <p className={classes.labelGetStarted}>Let&apos;s get started...</p>
                                    <BannerNotification
                                        size="md"
                                        closeEnabled={true}
                                        backgroundColor="#ecf8ff"
                                        label={notificationMessage}
                                    />

                                    <DateTextBox
                                        label="Date of Birth"
                                        onDateValueChange={handleDateChange}></DateTextBox>
                                    <p className="datebox-label font-20">Gender</p>
                                    <SegmentControl size="small" selectionItems={genderValues} onControlValueChange={handleGenderChange}></SegmentControl>

                                    <ExpandableInfo content={importantInfoContent} title="Important Note" />
                                    <AvivaButton setDisabled={!validDate || !gender} label="Continue" onButtonClick={handleContinue} />
                                </div>
                            </Grid>
                            <Grid className={classes.item} item xs={12} md={5}>
                                <div className={classes.gridBox2}>
                                    <BrochureInfo></BrochureInfo>
                                </div>
                            </Grid>

                        </Grid>

                    </div>
                </div>
                <div className={`formality__section ${(isChoosePlan ? (fromPayment ? 'moveFromLeft formality__section--active' : 'moveFromRight formality__section--active') : (!fromPayment ? 'moveToLeft' : 'moveToRight'))}`}>
                    <ChoosePlan goBack={handleChoosePlanBack} goContinue={handleChoosePlanContinue}></ChoosePlan>
                </div>
                <div className={`formality__section ${(isPayment ? 'moveFromRight formality__section--active' : 'moveToRight')}`}>
                    <Payment goBack={handlePaymentBack}></Payment>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default Home;
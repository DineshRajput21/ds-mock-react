import { BannerNotification } from "../../components/BannerNotification";
import '../Home.css'
import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SegmentControl from '../../components/SegmentControl';
import DateTextBox from '../../components/DateTextBox';
import ExpandableInfo from '../../components/ExpandableInfo';
import BrochureInfo from '../../components/BrochureInfo';
import AvivaButton from "../../components/AvivaButton";
import Footer from "../../components/Footer";
import Stepper from "../../components/Stepper";
import ProductComparisonToggle from "./ProductComparisonToggle";
import { useHistory } from "react-router";
import ChoosePlanBrochure from "./ChoosePlanBrochure";
import ChoosePremiumTermToggle from "./ChoosePremiumTermToggle";
import PlanPremiumCalculator from "./PlanPremiumCalculator";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
            // paddingTop: '80px',
            paddingBottom: '20px',
            [theme.breakpoints.down('xs')]: {
                // paddingTop: '40px',
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
            margin: '0 auto',
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
            margin: '30px 0px 0 !important',
        },
        item: {
            maxWidth: '35% !important',
            [theme.breakpoints.down('md')]: {
                maxWidth: '100% !important',
            },
        },
        stepperRoot: {
            width: '90%',
            margin: '0 auto',
            paddingTop: '80px',
            paddingBottom: '20px',
            [theme.breakpoints.down('md')]: {
                paddingTop: '40px',
                paddingBottom: '0px',
            },
            margin: '0 20px'
        },
        dateBoxLabel: {
            marginBottom: '0px !important',
            color: '#5c596d',
            fontSize: '20px !important'
        },
    }),
);

function ChoosePlan(props) {
    const history = useHistory();
    history.listen(({ pathname }) => {
        window.scrollTo(0, 0)
    });
    const [validDate, setValidDate] = React.useState(null)
    const [plan, setPlan] = React.useState(null)
    const [duration, setDuration] = React.useState(null)
    const importantInfoContent = [
        'Premium is based on the entry Age Next Birthday (ANB) and gender for the selected premium term. Premiums are not guaranteed.',
        'Anyone who pays for, or is insured under MyLongTermCare / MyLongTermCare Plus (Supplement) is not eligible for Additional Premium Support (APS) from the Government*. If you are currently receiving APS to pay for your MediShield Life and/or CareShield Life premiums, and you choose to be insured under this Supplement policy, you will stop receiving APS. This applies even if you are not the person paying for this Supplement policy. In addition, if you choose to be insured under this Supplement policy, the person paying for the Supplement will stop receiving APS, if he or she is currently receiving APS.'
    ];
    const footerNote = "*APS is for families who need assistance with MediShield Life and/or CareShield Life premiums, even after receiving premium subsidies and making use of MediSave to pay for these premiums.";
    const productTypes = ["MyLongTermCare", "MyLongTermCare Plus"];
    const productDuration = ["Limited Years", "Until I am 98 years old"];
    const notificationContent = ['Your personalised offer generated above is based on fixed: same monthly benefit payout and premium structure. The annual premium payable for the above offer (after discount) is not more than S$600, which is the maximum amount payable using MediSave funds.', 'Premiums exceeding the S$600 MediSave deduction limit will have to be paid in cash.', 'If the above monthly benefit payout is not suitable to meet your long-term care needs or you would like a different monthly benefit payout or payouts that increase each year, please click here to leave your contact details and our financial adviser representative will contact you shortly.'];
    const handlePlanChange = (event, value) => {
        console.log("Selected Plan " + value);
        setPlan(value);
    };
    const handleDurationChange = (event, value) => {
        console.log("Selected Term Duration " + value);
        setDuration(value);
    };
    const handleDateChange = (value) => {
        setValidDate(value)
        console.log("Selected Date " + value);
    };
    const handleContinue = (event) => {
        // history.push("/payment");
        props.goContinue();
    }
    const handleBack = (event) => {
        props.goBack();
        // history.push({
        //     pathname: "/home",
        //     state: { reset: true }
        // });
    }



    const classes = useStyles();
    return (
        <>
            <Stepper className={classes.stepperRoot} totalSteps={5} currentStep={1} stepName="Choose your coverage" ></Stepper>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} md={7}>
                        <div className={classes.gridBox1}>
                            <p className={classes.labelGetStarted}>Choose Plan</p>
                            <p className={classes.dateBoxLabel}>A quick glance at the top features of our plans.</p>
                            <ProductComparisonToggle title="Show more"></ProductComparisonToggle>
                            <SegmentControl selectionItems={productTypes} selectedItem="MyLongTermCare" onControlValueChange={handlePlanChange}></SegmentControl>

                            <p className={classes.dateBoxLabel}>Choose premium term</p>
                            <ChoosePremiumTermToggle title="Show more"></ChoosePremiumTermToggle>
                            <SegmentControl selectionItems={productDuration} selectedItem={productDuration[1]} onControlValueChange={handleDurationChange}></SegmentControl>

                            <PlanPremiumCalculator></PlanPremiumCalculator>
                            <BannerNotification
                                size="md"
                                closeEnabled={true}
                                backgroundColor="#ecf8ff"
                                label={notificationContent}
                            />

                            <ExpandableInfo footer={footerNote} content={importantInfoContent} title="Important Note" />
                            <AvivaButton label="Continue" onButtonClick={handleContinue} />
                            <AvivaButton label="Back" color="secondary" onButtonClick={handleBack} />
                        </div>
                    </Grid>
                    <Grid className={classes.item} item xs={12} md={5}>
                        <div className={classes.gridBox2}>
                            <ChoosePlanBrochure></ChoosePlanBrochure>
                        </div>
                    </Grid>

                </Grid>

            </div>
            {/* <Footer></Footer> */}
        </>

    )
}

export default ChoosePlan;
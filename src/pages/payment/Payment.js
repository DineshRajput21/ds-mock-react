import { Box, Container, createStyles, Divider, Grid, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router";
import AvivaButton from "../../components/AvivaButton";
import AvivaRadioButton from "../../components/AvivaRadioButton";
import { BannerNotification } from "../../components/BannerNotification";
import Footer from "../../components/Footer";
import Stepper from "../../components/Stepper";
import AssignAdvisor from "./AssignAdvisor";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
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
        labelGetStarted: {
            fontSize: '42px',
            color: '#5c596d',
            fontFamily: 'Source Sans Pro,san-serif !important',
            margin: '0px !important',
        },
        stepperRoot: {
            width: '85%',
            margin: '0 22px',
            paddingTop: '80px',
            paddingBottom: '20px',
            [theme.breakpoints.down('md')]: {
                paddingTop: '40px',
                paddingBottom: '0px',
            },

        },
        paymentBg: {
            flexFlow: 'column wrap',
            boxSizing: 'border-box',
            display: 'flex',
            flex: '1 1 100%',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            maxWidth: '100%',
            backgroundColor: '#004fb6',
            color: '#fff',
            margin: '30px 0',
        },
        paymentBanner: {
            padding: '30px 0px',
            flexFlow: 'column wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            maxHeight: '100%',
        },
        paymentAmountContainer: {
            flexFlow: 'row wrap',
            display: 'flex',
            alignItems: 'center',
            placeContent: 'center flex-start',
        },
        paymentAmount: {
            fontSize: '42px!important',
            fontWeight: '600',
            marginRight: '10px',
            color: '#fff',
        },
        paymentAmountLabel: {
            fontSize: '28px!important',
            fontWeight: '300',
            marginRight: '10px',
            color: '#fff',
        },
        discountLabel: {
            padding: '2px ',
            fontSize: '11px',
            backgroundColor: '#4f9f31',
            border: 'none',
            color: '#fff',
            fontFamily: 'Source Sans Pro',
            fontWeight: 700,
            borderRadius: '2px'
        },
        paymentDetailsContainer: {
            marginTop:'20px',
            marginBottom: '30px'
        },
        paymentDetailLabel: {
            color: '#444 !important',
            fontWeight: 600,
            margin: 0,
        },
        paymentDetailValue: {
            fontSize: '24px',
            fontWeight: 100,
            color: '#5c596d !important',
            margin: 0,
        },
        divider: {
            marginBottom: '30px',
            height: '2px',

        }
    })
);
function Payment(props) {
    const history = useHistory();
    history.listen(({ pathname }) => {
        window.scrollTo(0, 0)
    })
    const classes = useStyles();
    const notificationMessage = ['Your total annual premium amount will be fully paid via CPF MediSave.'];

    const handleContinue = (event) => {
        // history.push("/payment");
    }
    const handleBack = (event) => {
        // history.push("/chooseplan");
        props.goBack();
    }
    const options = [
        "I want Aviva to assign a Representative. No action required.",
        "I have a preferred Representative in mind.",
        "I don’t need a Representative."
    ];
    return (
        <>
            <Stepper className={classes.stepperRoot} totalSteps={5} currentStep={5} stepName="Premium Payment"></Stepper>
            <div id={'section_payment'} className={classes.root}>
                <Grid container >
                    <Grid item xs={12} md={7}>
                        <div className={classes.gridBox1}>
                            <p className={classes.labelGetStarted}>Premium Payment</p>
                            <Container className={classes.paymentBg}>
                                <Box component="div" className={classes.paymentBanner}>
                                    <div className={classes.paymentAmountContainer}>
                                        <div className={classes.paymentAmount}>S$585.50</div>
                                        <div className={classes.paymentAmountLabel}>total annual premium</div>
                                    </div>
                                    <div className={classes.paymentAmountLabel}><s>S$731.88</s></div>
                                    <div><button className={classes.discountLabel}>20% PERPETUAL DISCOUNT APPLIED</button></div>
                                </Box>
                            </Container>
                            <BannerNotification
                                size="md"
                                closeEnabled={true}
                                backgroundColor="#ecf8ff"
                                label={notificationMessage}
                            />

                            <Grid container className={classes.paymentDetailsContainer}>
                                <Grid item xs={12} sm={6}>
                                    <p className={classes.paymentDetailLabel} >Payment method</p>
                                    <p className={classes.paymentDetailValue} >CPF MediSave</p>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <p className={classes.paymentDetailLabel} >CPF account Number</p>
                                    <p className={classes.paymentDetailValue} >S9812346F</p>
                                </Grid>
                            </Grid>
                            <Divider className={classes.divider} variant="middle" />

                            <AssignAdvisor></AssignAdvisor>
                            <AvivaRadioButton options={options}></AvivaRadioButton>
                            <AvivaButton label="Continue" onButtonClick={handleContinue} />
                            <AvivaButton label="Back" color="secondary" onButtonClick={handleBack} />
                        </div>





                    </Grid>
                </Grid>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

export default Payment;
import { Box, Container, createStyles, Divider, Grid, List, makeStyles } from "@material-ui/core";
import { useHistory, useLocation } from "react-router";
import Footer from "../components/Footer";
import AvivaButton from "../components/AvivaButton";
import { useEffect } from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import protecedIcon from '../assets/images/MOH/protected-ncd-badge.svg';
import fastAccess from '../assets/images/MOH/Health_fastaccess.jpg';
import healthIcon from '../assets/images/MOH/health-cio-chief-information-officer-badge.svg'
import moneyIcon from '../assets/images/MOH/receive-money-quickly-badge.svg'
import careGiverIcon from '../assets/images/MOH/me-and-someone-else-badge-v1-1.svg'
import medicationIcon from '../assets/images/MOH/specialist-care-and-treatment-badge.svg'
import expenseIcon from '../assets/images/MOH/pennies-for-good-badge.svg'

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
        gutters: {
            padding: 0,
            display: 'flex',
            flexFlow: ' row ',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            maxHeight: '100%',
            flex: '1 1 100%',
            marginBottom: '10px',
        },
        position: {
            flexFlow: ' row wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            flex: '1 1 5%',
            maxWidth: '5%',
            fontWeight: '700!important',
            color: '#444 !important',
            lineHeight: '1.5em',
        },
        content: {
            flexFlow: ' row wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch flex-start',
            alignItems: 'stretch',
            flex: '1 1 95%',
            maxWidth: '95%',
            color: '#444 !important',
            lineHeight: '1.5em',
        },
        subContent:{
            display:'flex',
            marginLeft: '20px',
            alignItems: 'center',
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
            margin: '0 auto 40px',
        },
        labelGetStarted: {
            fontSize: '32px',
            lineHeight: '40px',
            color: '#5c596d',
            fontFamily: 'source_sans_pro_vf,-apple-system, system-ui,sans-serif !important',
            margin: '0px !important',
        },
        subHeading: {
            fontSize: '16px',
            color: '#444444 !important',
            margin: '30px 0 0',
            lineHeight: '1.5em',
        },
        listHeading: {
            color: '#5c596d',
            fontSize: '24px',
            letterSpacing: '-0.1px',
            lineHeight: '34px',
            margin: '20px 0',
            fontWeight: 700,

        },
        infoContent: {
            margin: 0,
            padding: 0,
            fontFamily: 'source_sans_pro_vf,-apple-system, system-ui,sans-serif !important',
            fontSize: '16px',
            fontWeight: 'normal',
            fontStretch: 'normal',
            fontStyle: 'normal',
            lineHeight: 1.5,
            letterSpacing: '-0.1px',
            color: '#444444',
            '&:li': {
                margin: '0 0 10px 22px',
                fontFamily: 'source_sans_pro_vf,-apple-system, system-ui,sans-serif !important',
                fontSize: '1rem',
                fontWeight: 'normal',
                fontstretch: 'normal',
                fontStyle: 'normal',
                lineHeight: '1.5em',
                letterSpacing: '-0.1px',
                color: '#444444',
                '&:marker': {
                    fontSize: '20px',
                    color: '#5c596d',
                }
            }
        },
        footerImgLayout: {
            margin: '30px 0 0',
            flexDirection: 'row',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'flex-start center',
            alignItems: 'flex-start',
            [theme.breakpoints.down('md')]: {
                flexWrap: 'wrap !important',
              }
            
            
        },
        footerImgRootLayout:{
            flexFlow: 'row wrap',
            boxSizing:' border-box',
            display: 'flex',
            placeContent: 'stretch center',
            alignItems: 'stretch',
            maxHeight: '100%',
            [theme.breakpoints.down('xs')]: {
             maxWidth: '33.3%',
            }
        },
        imgContent:{
            flexFlow: 'row wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'stretch center',
            alignItems: 'stretch ',
            maxHeight: '100%',
            margin: '0 auto',
        
        },
        imgIcon: {
            width: '60px'
        }
    })
);
const listItems = [
    "CareShield Life payouts start at $600 per month in 2020 and increase over time. Payout duration is lifetime (for as long as you're unable to perform at least 3 out of 6 Activities of Daily Living (ADL)). The ADL are Dressing, Washing, Toileting, Walking or moving around, Transferring and Feeding.",
    "ElderShield provides $300 or $400 monthly benefits payout for 5 years or 6 years respectively upon inability to perform at least 3 out of 6 Activities of Daily Living (ADL).",
    "Enhance your CareShield Life or ElderShield policy coverage with MyLongTermCare or MyLongTermCare Plus for greater financial assurance.",
    "MyLongTermCare or MyLongTermCare Plus coverage payout is on top of CareShield Life / ElderShield policy.",
    "MyLongTermCare and MyLongTermCare Plus offers three options:",
    "I understand that I am proceeding to purchase MyLongTermCare or MyLongTermCare Plus without any advice from a financial adviser representative and that, it is my own responsibility to ensure that this product is suitable to meet my long term care needs",
    "I confirm that I do not have an existing MyCare, MyCare Plus, MyLongTermCare or MyLongTermCare Plus policy with Aviva."
]
const listImgItems = [
    {img:healthIcon,content:'Aids to help daily living'},
    {img:moneyIcon,content:'Everyday living expenses'},
    {img:careGiverIcon,content:'Care-giver expenses'},
    {img:medicationIcon,content:'Medication and therapy'},
    {img:expenseIcon,content:'Miscellaneous expenses'}
]

function GetStarted() {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
        console.log(location.state);
        if (location.state != null && location.state.reset) {
            // handleContinue()
        }

    }, [location]);


    const handleContinue = () => {
        history.replace("/home")
    }

    const addSubcontent = (content) => {
        return <div className={classes.content}>
            <div>{content}</div>
            <div>
                <div style={{ marginTop: '20px' }}>
                    <div className={classes.subContent}>
                        <img className={classes.imgIcon} src={protecedIcon} height={60} width={60} alt="logo" />
                        <div className={classes.content}>
                            <div style={{ marginLeft: '20px' }}><span style={{ fontWeight: '600' }} >Fixed payouts:</span> S$200 to S$5,000 per month (in increments of S$100) on top of CareShield Life or Eldershield payouts.</div>
                        </div>
                    </div>
                    <div className={classes.subContent}>
                        <img className={classes.imgIcon} src={fastAccess} height={60} width={60} alt="logo" />
                        <div className={classes.content}>
                            <div style={{ marginLeft: '20px' }} ><span style={{ fontWeight: '600' }} >Fixed payouts:</span> S$200 to S$5,000 per month (in increments of S$100) on top of CareShield Life or Eldershield payouts.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
    const addcontentFooter = () => {
       return  <div>
        <div className={classes.subHeading}>According to Aviva's Long-term Care Study done in 2018, you may need an average of S$2,324 per month for the following:</div>
            <div className={classes.footerImgLayout}>
                {listImgItems.map(function (name, index) {
                
                    return <div className={classes.footerImgRootLayout} >
                        <img className={classes.imgContent} src={name.img} height={60} width={60} alt="logo" />
                        <span  style={{ textAlign: 'center'}}>{name.content}</span>
                    </div>
                })}
            </div>
        <div className={classes.subHeading}>In considering any additional long-term care coverage you may need, please also take into account your existing ElderShield/CareShield Life coverage if any, and any means-tested subsidies of up to 80% for long-term care services that you may be eligible for, which would reduce your long-term care expenses.
        </div>
            
        </div>
    }
    return (
        <>
            <div className={classes.root}>
                <Grid container >
                    <Grid item xs={12} md={7}>
                        <div className={classes.gridBox1}>
                            <div className={classes.labelGetStarted}>Get the care you deserve</div>
                            <div className={classes.subHeading}>If you hold a CareShield Life or ElderShield policy, you can enhance your coverage with Aviva’s MyLongTermCare or MyLongTermCare Plus for greater financial assurance. </div>

                            <Divider className={classes.divider} variant="middle" />
                            <div className={classes.listHeading}>Please read this before you proceed…</div>
                            <List component="ul"  >

                                {listItems.map(function (name, index) {
                                    const position = index + 1 + "."
                                    const contentDiv = index == 4 ? addSubcontent(name) : <div className={classes.content}>{name}</div>;
                                    return <ListItem className={classes.gutters}>
                                        <div className={classes.position}>{position}</div>
                                        {contentDiv}

                                    </ListItem>
                                })}
                            </List>
                            <Divider className={classes.divider} variant="middle" />
                            {addcontentFooter()}
                            <AvivaButton label="I am ok to proceed" onButtonClick={handleContinue} />
                        </div>
                    </Grid>
                </Grid>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

export default GetStarted;
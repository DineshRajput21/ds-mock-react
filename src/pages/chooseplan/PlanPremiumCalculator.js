import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Container,Link } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import downloadIcon from '../../assets/images/download.svg'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        margin: '1em 0',

    },
    label:{
        margin: '1em 0 .5em',
        marginBottom: '0px !important',
        color:'#5c596d',
        fontSize : '20px !important'
    },
    paper: {
        margin: '0',
        padding: '4px 0.5em !important',
        textAlign: 'left',
        // color: '#fff',
    },
    th: {
        backgroundColor: '#004fb6',
        color: '#fff',
        fontWeight: 'bolder',
        padding: '.5em 0',
        textAlign: 'center',
    },
    thContents: {
        backgroundColor: '#eee',
        padding: '10px 20px',
    },
    contentRight:{
        textAlign:'right',
    },
    fontRegular: {
        color: '#fff !important',
        fontFamily: 'Source Sans Pro", san-serif'
    },
    border:{
        borderBottom: '2px solid rgb(204, 204, 204)',
    },
    fontBold: {
        fontWeight: '700 !important',
    },
    background: {
        backgroundColor: '#004fb6 !important',
        color: '#fff',
        padding: '5px 20px'
    },
    
    content: {
        padding: '0px !important'
    },
    downloadLink:{
        fontFamily: 'Source Sans Pro',
        fontSize: '16px !important',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.1px',
        color: '#004fb6',
        borderBottom: '1px solid #cccccc',
    },
    item:{
        padding: '8px 8px 0px !important',
    },
    downloadContainer:{
        paddingTop:'12px',
        paddingBottom:'12px',
    },
    discountLabel:{
        margin:'0 9px !important',
        padding:'2px ',
        fontSize: '11px',
        backgroundColor: '#4f9f31',
        border: 'none',
        color: '#fff',
        fontFamily: 'Source Sans Pro',
        fontWeight: 700,
        borderRadius: '2px'
    }
}));



function PlanPremiumCalculator() {
    const classes = useStyles();
    var tableHeaderClass = [ classes.thContents].join(' ');
    var tableHeaderClassRight = [ classes.contentRight,classes.paper].join(' ');
    var headerFontclass = [classes.paper, classes.fontRegular, classes.fontBold].join(' ');
    var contentFontClass = [classes.paper, classes.fontRegular].join(' ');
    var contentRight = [classes.paper, classes.fontRegular,classes.contentRight].join(' ');
    var backgroundWithBorder = [classes.background,classes.border].join(' ');
    var backgroundOdd = [classes.background, classes.backgroundOdd].join(' ');
    return (
        <div className={classes.root}>
            

            <p className={classes.label}>Your personalised coverage offer for fixed monthly payout</p>
            <p >For a different monthly benefit or increasing payout structure, please click here.</p>
            <Grid container>

                <Grid container className={tableHeaderClass}>
                    <Grid item xs={6} sm={6}>
                        <p className={classes.paper}>Plan structure</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={tableHeaderClassRight}><b>Fixed: Same benefit payout and premium every year</b></p>
                    </Grid>
                </Grid>


                <Grid container className={backgroundWithBorder}>

                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}>Monthly benefit payout</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentRight}>S$1500.00</p>
                    </Grid>
                </Grid>


                <Grid container className={classes.background}>
                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}><b>Total annual premium (inc. GST)</b></p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentRight}>S$573.95</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <button className={classes.discountLabel}>20% PERPETUAL DISCOUNT APPLIED</button>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentRight}>S$717.44</p>
                    </Grid>
                </Grid>


                <Grid container className={classes.background}>
                    <Grid item xs={12} sm={12}>
                        <p className={contentFontClass}>No cash required. Premiums fully paid via MediSave.</p>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}


export default PlanPremiumCalculator;
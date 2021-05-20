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
    },
    paper: {
        margin: '0',
        padding: '4px 0.5em !important',
        textAlign: 'left',
        color: '#fff',
    },
    th: {
        backgroundColor: '#004fb6',
        color: '#fff',
        fontWeight: 'bolder',
        padding: '.5em 1em',
        textAlign: 'center',
    },
    thContents: {
        color: '#fff !important',
        fontWeight: 'bolder',
    },
    fontRegular: {
        color: '#444 !important',
        fontFamily: 'Source Sans Pro", san-serif'
    },
    border:{
        borderBottom: '1px solid rgb(204, 204, 204)'
    },
    fontBold: {
        fontWeight: '700 !important',
    },
    background: {
        padding: '1em',
    },
    backgroundOdd: {
        backgroundColor: '#eee',
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
    }
}));



function ProductDetailComparisonDetails() {
    const classes = useStyles();
    var tableHeaderClass = [classes.th, classes.thContents].join(' ');
    var headerFontclass = [classes.paper, classes.fontRegular, classes.fontBold].join(' ');
    var contentFontClass = [classes.paper, classes.fontRegular].join(' ');
    var backgroundWithBorder = [classes.background,classes.border].join(' ');
    var backgroundOdd = [classes.background, classes.backgroundOdd].join(' ');
    return (
        <div>
            <Grid className={classes.downloadContainer} container wrap="nowrap" >
                <Grid item className={classes.item}>
                    <img alt="Download" src={downloadIcon} height={20} width={20} />
                </Grid>
                <Grid item xs>
                    <Link className={classes.downloadLink} target="_blank" href="https://uat-myaviva.avivaap.local/QuoteBuy/api/pdf-files/Plan_Comparison.pdf" >
                    Download detailed comparison
                 </Link>
                </Grid>
            </Grid >
            <Grid container>

                <Grid container className={tableHeaderClass}>
                    <Grid item xs={6} sm={6}>
                        <p className={classes.paper}>MyLongTermCare</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={classes.paper}>MyLongTermCare Plus</p>
                    </Grid>
                </Grid>


                <Grid container className={classes.background}>
                    <Grid item xs={12} sm={12}>
                        <p className={headerFontclass}>Severe disability definition</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}>Inability to perform at least 3 out of 6 ADL</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}>Inability to perform at least 2 out of 6 ADL</p>
                    </Grid>
                </Grid>


                <Grid container className={backgroundOdd}>
                    <Grid item xs={12} sm={12}>
                        <p className={headerFontclass}>Monthly benefit duration</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}>Lifetime</p>
                    </Grid>
                    <Grid item xs={6} sm={6}>
                        <p className={contentFontClass}>Lifetime</p>
                    </Grid>
                </Grid>


                <Grid container className={backgroundWithBorder}>
                    <Grid item xs={12} sm={12}>
                        <p className={headerFontclass}>Monthly benefit amount</p>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                        <p className={contentFontClass}>S$200 to S$5,000 per month (in increments of S$100) on top of CareShield Life's payout</p>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    );
}


export default ProductDetailComparisonDetails
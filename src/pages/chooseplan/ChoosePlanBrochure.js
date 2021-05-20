import { Paper, Grid, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import tickIcon from '../../assets/images/list_tick.svg';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '85%',
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 1,
        overflow: 'hidden',
        margin: '22px 30px 33px',
        borderTop: '5px solid  #1a61bd !important',
        minHeight: '100px',
        borderRadius: '0px !important',
        padding: '0px',
        boxShadow: '0 2px 2px 0 rgba(204, 204, 204, 0.5)',
        backgroundColor: '#f9f9f9',
        [theme.breakpoints.down('md')]: {
            margin: '0 auto',
            marginTop: '22px',
            marginBottom: '33px'
        }
        
    },
    title: {
        margin: '25px 30px 20px 30px',
        fontSize: '28px !important',
        fontWeight: '600 !important',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29,
        letterSpacing: '-0.1px',
        color: '#6f6d80 !important',
        fontFamily: 'Source Sans Pro',
    },
    description: {
        margin: '20px 30px 20px 30px',
        fontSize: '16px !important',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.1px',
        color: '#444444 !important',
        fontFamily: 'Source Sans Pro',
    },
    contents: {
        margin: '20px 30px 30px 20px',
        fontSize: '28px !important',
        fontWeight: '600 !important',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.29,
        letterSpacing: '-0.1px',
        color: '#6f6d80 !important',
        fontFamily: 'Source Sans Pro',
    },
    listItemHeader:{
        fontWeight: 'bold !important',
        margin:'0px !important'
    },
    listItems: {
        fontSize: '16px !important',
        fontWeight: 'normal',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.1px',
        color: '#444444 !important',
        fontFamily: 'Source Sans Pro',
        margin:'0px 0px 10px 0px',
    },
    item:{
        padding: '8px 8px 0px !important',
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
    }
}));

function ChoosePlanBrochure() {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.root}>

                <div>
                    <p className={classes.title}>Your Personalised Offer</p>
                </div>
                <div className={classes.contents}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item  className={classes.item}>
                    <img alt="*" src={tickIcon} height={16} width={16} />
                    </Grid>
                    <Grid item xs>
                        <p className={classes.listItems}>Monthly benefit payout for a lifetime.</p>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item  className={classes.item}>
                    <img alt="*" src={tickIcon} height={16} width={16} />
                    </Grid>
                    <Grid item xs>
                        <p className={classes.listItems}>Premiums paid via MediSave. No cash required.</p>
                    </Grid>
                </Grid>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item  className={classes.item}>
                    <img alt="*" src={tickIcon} height={16} width={16} />
                    </Grid>
                    <Grid item xs>
                        <p className={classes.listItems}>20% perpetual premium discount applied.</p>
                    </Grid>
                </Grid>
                
                </div>
            </Paper>
        </div>

    )
}

export default ChoosePlanBrochure;
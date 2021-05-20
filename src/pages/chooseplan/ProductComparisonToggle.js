import { Paper, Grid, Link, Collapse } from "@material-ui/core";
import downloadIcon from '../../assets/images/download.svg'
import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from 'prop-types';
import '../../components/ExpandableInfo.css'
import ProductDetailComparisonDetails from "./ProductComparisonToggleDetails";

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
    downloadLink:{
        fontFamily: 'Source Sans Pro',
        fontSize: '16px !important',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: 1.5,
        letterSpacing: '-0.1px',
        color: '#004fb6',
        // borderBottom: '1px solid #cccccc',
    },
    item:{
        padding: '8px 8px 0px !important',
    },
}));

const useRootStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontFamily: 'Source Sans Pro,san-serif !important;',
        fontSize: '16px',
        fontWeight: 'bold',
        fontStretch: 'normal',
        fontStyle: 'normal',
        lineHeight: '1.5',
        letterSpacing: '-0.1px',
        color: '#004fb6',
        margin: '3px 0 3px 10px',
        borderBottom: '1px solid #ccc',
    },
}));
const useAccordingStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none !important',
        borderRadius: '0px !important',
        borderTop: '0px solid  #cccccc !important',
        // borderBottom: '1px solid  #cccccc !important',
        '&::before': {
            height: '0px !important'
          }
    },
    expanded: {
        // borderBottom: '5px solid  #cccccc !important',
    },

}));

const useAccordionSummaryStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        height: '48px !important',
        minHeight: '48px !important',
        padding: '0px !important'
    },
    expandIcon: {
        width: '30px',
        height: '30px',
        order: -1,
        padding: 0,
    },
    notExpanded: {
        // border: '1px solid #cccccc !important',
        // background: '#ffffff !important',
        color: '#004fb6 !important',
    },
    expanded: {
        color: '#004fb6 !important;',
        // border: '1px solid #004fb6 !important',
    },
}));
function ProductComparisonToggle({ title, content, ...props }) {
    const rootClasses = useRootStyles();
    const accordionSummaryClasses = useAccordionSummaryStyles();
    const accordionClasses = useAccordingStyles();

    const [expanded, setExpanded] = React.useState('false');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    var expandClass = [accordionSummaryClasses.expandIcon, accordionSummaryClasses.expanded].join(' ');
    var notExpanded = [accordionSummaryClasses.expandIcon, accordionSummaryClasses.expanded].join(' ');
    let isExpanded = (expanded === 'panel1') ? expandClass : notExpanded
    var toggleTitle = expanded === 'panel1' ? "Show less" : "Show more"
    const classes = useStyles();
    return (
        <div className={rootClasses.root}>
            <Collapse in={expanded === 'panel1'}>
                <ProductDetailComparisonDetails></ProductDetailComparisonDetails>
            </Collapse>
            <Accordion classes={{
                root: accordionClasses.root,
                expanded: accordionClasses.expanded,
            }} expanded={expanded === 'panel1'}  onChange={handleChange('panel1')}>
                <AccordionSummary
                    classes={{
                        root: accordionSummaryClasses.root,
                        expandIcon: isExpanded,
                    }}
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header">
                    <Typography className={rootClasses.heading}>{toggleTitle}</Typography>
                </AccordionSummary>
               
            </Accordion>
        </div>

       

    )
}


export default ProductComparisonToggle;

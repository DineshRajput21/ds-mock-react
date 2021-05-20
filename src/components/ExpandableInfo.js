import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import './ExpandableInfo.css'

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
        color: '#6f6d80',
        margin: '3px 0 3px 20px',
    },
    footerNote:{
        fontSize: '14px',
        marginTop: '.3em',
    },
    accordionDetailsRoot:{
        flexDirection:'column !important'
    }
}));
const useAccordingStyles = makeStyles((theme) => ({
    root: {
        boxShadow: 'none !important',
        borderRadius: '0px !important',
        borderTop: '1px solid  #cccccc !important',
        borderBottom: '1px solid  #cccccc !important',
    },
    expanded: {
        borderBottom: '5px solid  #cccccc !important',
    },

}));

const useAccordionSummaryStyles = makeStyles((theme) => ({
    root: {
        width: '95%',
        height: '48px !important',
        minHeight: '48px !important',
        marginTop: '10px',
        padding: '0px 0px 0px 16px !important'
    },
    expandIcon: {
        width: '30px',
        height: '30px',
        order: -1,
        padding: 0,
    },
    notExpanded: {
        border: '1px solid #cccccc !important',
        background: '#ffffff !important',
        color: '#6f6d80 !important',
    },
    expanded: {
        background: '#004fb6 !important',
        color: '#fff!important;',
        border: '1px solid #004fb6 !important',
    },
}));



export default function ExpandableInfo({ title, content,footer, ...props }) {
    const rootClasses = useRootStyles();
    const accordionSummaryClasses = useAccordionSummaryStyles();
    const accordionClasses = useAccordingStyles();

    const [expanded, setExpanded] = React.useState('panel1');

    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    var expandClass = [accordionSummaryClasses.expandIcon, accordionSummaryClasses.expanded].join(' ');
    var notExpanded = [accordionSummaryClasses.expandIcon, accordionSummaryClasses.notExpanded].join(' ');
    let isExpanded = (expanded === 'panel1') ? expandClass : notExpanded
    var footerNote= footer === null || footer === '' ? <></> : <div className={rootClasses.footerNote}>{footer}</div>;
    // setExpanded(false)
    return (
        <div className={rootClasses.root}>
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
                    <Typography className={rootClasses.heading}>{title}</Typography>
                </AccordionSummary>
                <AccordionDetails className={rootClasses.accordionDetailsRoot}>
                    <ul className="info-content" >
                        {content.map(function (name, index) {
                            return <li key={index}>{name}</li>;
                        })}
                    </ul>
                    {footerNote}
                    
                    
                </AccordionDetails>
            </Accordion>
        </div>
    );
}

ExpandableInfo.propTypes = {

    title: PropTypes.string,
    content: PropTypes.array,
    footer:PropTypes.string,
}
ExpandableInfo.defaultProps = {
    title: "Important Note",
    content: [
        "Text 1",
        "Text 2"
    ],
    footer:null,
}
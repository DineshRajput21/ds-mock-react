import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '30px 0 20px',
            backgroundColor: '#000000',
            flexGrow: 1,
            width:'100%',
            flexDirection: 'column',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center',
        },
        contents :{
            flexFlow: 'row wrap',
            boxSizing: 'border-box',
            display: 'flex',
            placeContent: 'center',
            alignItems: 'center',
            flex: '1 1 100%',
            maxWidth: '100%',
            maxHeight: '100%',
        },
        item: {
            color: '#ccc',
            fontSize: '16px',
            fontFamily: 'Source Sans Pro,san-serif !important;',
            marginRight: '30px',
            [theme.breakpoints.down('xs')]: {
                marginRight: '0px',
                flex: '1 1 46%',
                boxSizing: 'border-box',
                maxWidth: '46%',
                padding: '10px 0',
            },
        },
        itemCopyRights:{
            [theme.breakpoints.down('xs')]: {
                marginRight: '0px',
                flex: '1 1 92% !important',
                boxSizing: 'border-box',
                maxWidth: '92% !important',
                padding: '10px 0',
            },
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),
);

export default function Footer() {
    const classes = useStyles();

    return (
    <div className={classes.root}>
        <div className={classes.contents}>
          <div className={classes.item} >Terms of Use</div>
          <div className={classes.item}>Privacy Policy</div>
          <div className={classes.item}>Cookie Policy</div>
          <div className={classes.item}>Personal Data Protection</div>
          <div className={[classes.item,classes.itemCopyRights].join(' ')}>Security Practices</div>
          <div className={[classes.item,classes.itemCopyRights].join(' ')}>© 2021 Aviva Ltd. | Company Reg No: 196900499K | GST Reg No: MR-8500166-8</div>
        </div>
    </div >
  );
}

import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
        },
        label:{
            fontSize:'28px!important',
            lineHeight: '34px',
            fontWeight: 600,
            color: '#5c596d!important',
            marginBottom: '20px',
            marginTop: '20px'
        },

    })
);
function AssignAdvisor() {
    const rootClasses = useStyles()
    return(
        <div>
            <div className={rootClasses.label}>Assign a Financial Adviser Representative</div>
            <div >Your financial adviser representative will be able to assist you and service your policy needs.</div>
        </div>
    );
}

export default AssignAdvisor;
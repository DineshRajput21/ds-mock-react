import { makeStyles } from "@material-ui/core";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({

  dots: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '-3px',
    marginRight: '-3px'
  },
  dot: {
    margin: '5px',
    width: '20%',
    height: '5px',
    // borderRadius: '50%',
    backgroundColor: '#eeeeee',
  },
  dotActive: {
    margin: '5px',
    width: '20%',
    // width: '8px',
    height: '5px',
    // borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.26)',
    backgroundColor: '#4f9f31',
  },
  progress: {
    width: '50%',
  },
  stepName :{
    flexDirection: 'row',
    boxSizing: 'border-box',
    display: 'flex',
    fontFamily: 'Source Sans Pro,san-serif !important;',
    textTransform: 'capitalize',
    fontSize:'16px',
    
  },
  stage:{
    fontWeight:'bold !important',
    marginLeft:'6px',
  }
}));
function Stepper({ className,totalSteps, currentStep, stepName, ...props }) {
  const classes = useStyles();
  
  return (
    <div className={className}>
      <div className={classes.stepName}>
        <p>{stepName}</p>
        <p className={classes.stage}>Step {currentStep} of {totalSteps}</p>
      </div>

      <div className={classes.dots}>
        {[...Array(totalSteps)].map((x, i) =>{
            const style = i <= currentStep-1 ? [classes.dot,classes.dotActive].join(' ') : [classes.dot]
            return <div key={i} className={style}></div>
          }
        )}
        

      </div>
    </div>
  );
}

Stepper.propTypes = {

  totalSteps: PropTypes.number,
  currentStep: PropTypes.number,
  stepName: PropTypes.string,
  className:PropTypes.any,
}

export default Stepper;


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import PropTypes from 'prop-types';

const useGroupStyles = makeStyles((theme) => ({
  root: {
    marginBottom: '30px',
    width: '99% !important',
    height: '50px !important',
    borderRadius: '5px',
    boxShadow: '0 2px 2px 0 rgba(204, 204, 204, 0.5)',
    border: 'solid 1px #aaaaaa',
    backgroundColor: '#f9f9f9',
    flexDirection:'row',
  },
  rootLarge:{
    marginBottom: '0px',
    [theme.breakpoints.down('md')]: {
      flexDirection:'column !important',
      height: '100px !important',
    }
  }
}));
const useButtonStyles = makeStyles((theme) => ({
  root: {
    marginLeft: '0px !important',
    width: '50% !important',
    textAlign: 'center',
    color: '#5c596d',
    padding:'0px !important',
    textTransform: 'capitalize',
    fontSize: '20px',
    fontFamily: 'Source Sans Pro,san-serif !important',
  },
  rootLarge:{
    [theme.breakpoints.down('md')]: {
      height: '50px !important',
      width:'100% !important',
    }
  },
  selected: {
    marginLeft: '0px !important',
    backgroundColor: '#4f9f31 !important',
    color: '#ffffff !important',
    textTransform: 'capitalize',
    fontSize: '20px',
    fontWeight: 'bold',
    fontStretch: 'normal',
    fontStyle: 'normal',
  },
  label: {
    // height:'50px'
  }
}));

function SegmentControl({ selectionItems, size, selectedItem, onControlValueChange, ...props }) {
  
  
  const toggleGroupClasses = useGroupStyles();
  const toggleButtonClasses = useButtonStyles();

  const rootSegmentControlClasses = size === "large" ? [toggleGroupClasses.root,toggleGroupClasses.rootLarge].join(' ') : toggleGroupClasses.root
  const rootSegmentControlButtonClasses = size === "large" ? [toggleButtonClasses.root,toggleButtonClasses.rootLarge].join(' ') : toggleButtonClasses.root

  const [itemSelected, setItemSelected] = React.useState(selectedItem);
  
  const handleControlSelection = (event, newValue) => {
    if(newValue !== null) {
      setItemSelected(newValue);
      if (onControlValueChange) onControlValueChange(event, newValue);
    }
  };

  return (
    <ToggleButtonGroup
      classes={{
        root: rootSegmentControlClasses,
        selected: toggleGroupClasses.selected,
      }}
      value={itemSelected}
      exclusive
      onChange={handleControlSelection} >
      {selectionItems.map(function (name, index) {
        return <ToggleButton
          classes={{
            root: rootSegmentControlButtonClasses,
            selected: toggleButtonClasses.selected,
            label: toggleButtonClasses.label,

          }}
          key={name}
          aria-label={name}
          value={name} aria-label={name}>
          <div>{name}</div>
        </ToggleButton>
      })}
    </ToggleButtonGroup>
  );

}

SegmentControl.propTypes = {
  onControlValueChange: PropTypes.func,
  selectionItems: PropTypes.array,
  size:PropTypes.oneOf(['large','small']),
  selectedItem:PropTypes.string,
};

SegmentControl.defaultProps = {
  selectionItems: ["Male", "Female"],
  onControlValueChange: undefined,
  size:"large"
};


export default SegmentControl;
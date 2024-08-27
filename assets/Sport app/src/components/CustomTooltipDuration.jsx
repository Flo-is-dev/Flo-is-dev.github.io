import PropTypes from 'prop-types';


const CustomTooltipDuration = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip" >
                <p>{`${payload[0].value} min`} </p>
            </div>
        );
    }
    
    return null;
};

CustomTooltipDuration.propTypes = {
    active: PropTypes.bool,   
    payload: PropTypes.array,   
  };
  
export default CustomTooltipDuration
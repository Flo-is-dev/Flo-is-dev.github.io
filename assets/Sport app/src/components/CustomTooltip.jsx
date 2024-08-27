import PropTypes from 'prop-types';

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip" >
          <p className="intro">{` ${payload[0].value} Kg`}</p>
          <p>{`${payload[1].value} Kcal`}</p>
        </div>
      );
    }
  
    return null;
  };

CustomTooltip.propTypes = {
    active: PropTypes.bool,   
    payload: PropTypes.array,   
  };
export default CustomTooltip
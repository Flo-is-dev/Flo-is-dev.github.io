import PropTypes from 'prop-types';
import {Rectangle} from "recharts";


const CustomCursor = (props) => {
    const { points, width, height } = props;
    const { x } = points[0];
    // console.log(props);
    return (
      <Rectangle
        fill="rgba(0, 0, 0, 0.09)"
        stroke="rgba(0, 0, 0, 0.09)"
        x={x}
        y={0}
        width={width}
        height={height}
      />
    );
  };

  CustomCursor.propTypes = {
    points: PropTypes.array,   
    width: PropTypes.number,   
    height: PropTypes.number,   
    stroke: PropTypes.string,   
  };

export default CustomCursor
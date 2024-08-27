import ActivityOverview from "./ActivityOverview"
import DailyActivity from "./DailyActivity"
import AverageDuration from "./AverageDuration"
import UserPerformance from "./UserPerformance"
import UserScore from "./UserScore"
import PropTypes from 'prop-types';

const Content = ({userScore}) => {

  return (
    <div className="contentBoard">
        <DailyActivity />
        <AverageDuration />
        <UserPerformance />
        <UserScore userScore={userScore} />
        <ActivityOverview/>
    </div>
  )
}

Content.propTypes = {
    userScore: PropTypes.number.isRequired
  }

export default Content


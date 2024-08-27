import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import User from "./pages/User";
import Error from "./pages/Error";
import './index.css'

import ActivityOverview from "./components/ActivityOverview";
import DailyActivity from "./components/DailyActivity";
import AverageDuration from "./components/AverageDuration";
import UserPerformance from "./components/UserPerformance";
import UserScore from "./components/UserScore";
import { mockUser } from './mockData';

const App = () => {
    // Variable fixe qui reprend la data du mock pour pouvoir affiché les routes (url) de chaque composant
    const userScore = mockUser.score

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/User/:userId" element={<User />} />
        <Route path="*" element={<Error />} />
        <Route path="/User/:userId/average-sessions" element={<AverageDuration />} />
        <Route path="/User/:userId/activity" element={<DailyActivity />} />
        <Route path="/User/:userId/userPerformance" element={<UserPerformance />} />
        <Route path="/User/:userId/userScore" element={<UserScore userScore={userScore} />} />
        <Route path="/User/:userId/activityOverview" element={<ActivityOverview />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
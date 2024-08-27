import { useParams } from 'react-router-dom';
import { formatUserAverageSessions } from '../formatData';
import { mockDailyActivity } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';
import CustomTooltip from './CustomTooltip';

const DailyActivity = () => {
    const {callApi } = useContext(ThemeContext)
    console.log(
        `%c is Switch ON? ${callApi ? "YES" : "NO"}`,
        `color: ${callApi ? "green" : "crimson" };font-size: 14px;font-weight:bold;background-color:${callApi ? "lightgreen" : "lightpink"};padding:6px 30px;border-radius: 4px;margin-top:5px`,callApi
      );
    const { userId } = useParams(); 
    const [userDailyActivity, setUserDailyActivity] = useState([]);
    
    const [minPoids, setMinPoids] = useState(0);
    const [maxPoids, setMaxPoids] = useState(0);

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatUserAverageSessions(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];  // Retourner un tableau vide en cas d'erreur
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserDailyActivity(formattedSessions);
                setMinPoids(Math.min(...formattedSessions.map(item => item.poids)));
                setMaxPoids(Math.max(...formattedSessions.map(item => item.poids)));
            });
        } else {
            setUserDailyActivity(mockDailyActivity);
            setMinPoids(Math.min(...mockDailyActivity.map(item => item.poids)));
            setMaxPoids(Math.max(...mockDailyActivity.map(item => item.poids)));
        }
    }, [userId, callApi]);

  

  return (

    <div className="chart"> 
            <h3>Activité quotidienne</h3>
            <div className="chart-legend">
                <div className="legend-poids">
                    <div></div>
                    <span>Poids (kg)</span>
                </div>
                <div className="legend-calories">
                    <div></div>
                    <span>Calories brûlées (kCal)</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={userDailyActivity} barGap={10} margin={{ top: 60, right: 30, left: -20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="2 2" vertical={false}   />
                    <XAxis dataKey="day" tickLine={false}  />
                    <YAxis yAxisId="right" orientation="left" stroke="#9cb4fb" tick={false} axisLine={false}   />
                    <YAxis yAxisId="left" orientation="right" axisLine={false}  tickLine={false} stroke="#9cb4fb"  tick={true} tickSize={30} domain={[minPoids - 1, maxPoids + 1]}  tickCount={4}  />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar yAxisId="left" dataKey="poids"  fill="#282D30" barSize={8} radius={[10, 10, 0, 0]} />
                    <Bar yAxisId="right" dataKey="calories" fill="#9cb4fb" barSize={8} radius={[10, 10, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
            {userDailyActivity.length === 0 && callApi &&(
                <p className='errorData'>Une erreur est survenue. Veuillez réessayer plus tard.</p>
            ) }
    </div>
  )
}


export default DailyActivity
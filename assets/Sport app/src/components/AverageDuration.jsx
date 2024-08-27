import { useParams } from 'react-router-dom';
import { formatAverageDuration } from '../formatData';
import { mockAverageDuration } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer, YAxis } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';
import CustomTooltipDuration from './CustomTooltipDuration';
import CustomCursor from './CustomCursor';

const AverageDuration = () => {
    const {callApi } = useContext(ThemeContext)

    const { userId } = useParams(); 
    const [userAverageDuration, setUserAverageDuration] = useState([])


    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatAverageDuration(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];  
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserAverageDuration(formattedSessions);
            });
        } else {
            setUserAverageDuration(mockAverageDuration);
        }
    }, [userId, callApi]);


  return (
    <div className="line">
        <h3>Durée moyenne des sessions</h3>
        <ResponsiveContainer width="100%" height={250} style={{margin:"auto"}}>
            <LineChart data={userAverageDuration} style={{ transform: " translateX(-2px)"}} margin={{ top: 90, right: 0, left: 5, bottom: 0 }}>
            <XAxis dataKey="day" stroke="#FFFFFF" axisLine={false} tickLine={false}  style={{ transform: "scaleX(0.95) translateX(5px)"}} tick={{ fill: '#FFFFFF', opacity: '0.5' }}  />
            <YAxis hide />
            <Tooltip content={<CustomTooltipDuration />} cursor={<CustomCursor height={250} />}/>
            <Line type="monotone" dataKey="sessionDuration" stroke="white" strokeWidth={2} dot={false} activeDot={{ r: 8 }}  isAnimationActive={true} animationDuration={500} animationEasing={'linear'} />
            </LineChart>
        </ResponsiveContainer>
        {userAverageDuration.length === 0 && callApi &&(
                <p className='errorData'>Une erreur est survenue. Veuillez réessayer plus tard.</p>
            ) }
    </div>
  )
}
export default AverageDuration
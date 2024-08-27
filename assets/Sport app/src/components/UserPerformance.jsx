import { useParams } from 'react-router-dom';
import { formatUserPerformance } from '../formatData';
import { mockUserPerformance } from '../mockData';
import { useState,useEffect,useContext } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { ThemeContext } from '../context/ThemeProvider';


const UserPerformance = () => {
    const {callApi } = useContext(ThemeContext)

    const { userId } = useParams(); 
    const [userPerformance, setUserPerformance] = useState([])

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await formatUserPerformance(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserPerformance(formattedSessions);
            });
        } else {
            setUserPerformance(mockUserPerformance);
        }
    }, [userId, callApi]);

  return (

    <div className="toile">
        <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userPerformance}>
            <PolarGrid radialLines={false} />
            <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 12 }} />
            <PolarRadiusAxis tick={false} axisLine={false} tickLine={false} />
            <Radar
                name="Performance"
                dataKey="A"
                stroke="#9cb4fb"
                fill="#9cb4fb"
                fillOpacity={0.6}
            />
            </RadarChart>
        </ResponsiveContainer>
        {userPerformance.length === 0 && callApi &&(
                <p className='errorData' style={{top:"77%",left:"37.2%",width:"20%"}}>Une erreur est survenue. Veuillez réessayer plus tard.</p>
            ) }
    </div>


  )
}
export default UserPerformance
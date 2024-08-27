import { useState,useEffect,useContext } from 'react';
import Content from '../components/Content'
import Navigation from '../components/Navigation'
import { useParams } from 'react-router-dom';
import { getUserInfo } from '../data';
import { mockUser } from '../mockData';
import { ThemeContext } from '../context/ThemeProvider';

function User() {
    const {callApi } = useContext(ThemeContext)

    const { userId } = useParams(); 
    const [userName, setUserName] = useState("");
    const [userScore, setUserScore] = useState(0);

    useEffect(() => {
        
        const loadSessions = async () => {
            try {
                const formattedSessions = await getUserInfo(userId);
                return formattedSessions;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                setUserName("")
                setUserScore(0); 
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setUserName(formattedSessions.data.userInfos.firstName);
                setUserScore(formattedSessions.data.score || formattedSessions.data.todayScore || 0);
            });
        } else {
            setUserName(mockUser.userInfos.firstName);
            setUserScore(mockUser.score);
        }
    }, [userId, callApi]);

 
  return (
    <div className='appContainer'>
        <Navigation/>
        {/* <Aside/> */}
        <div className='contentContainer'>
            <div style={{margin: "auto"}}>
                <h1>Bonjour <span className='red'>{userName}</span></h1>
                <p>{callApi && userName === "" ? "⛔ Nous ne parvenons pas à acceder à vos données. Veuillez réessayer plus tard." : "Félicitation ! Vous avez explosé vos objectifs hier 👏" }</p>
                <Content userScore={userScore} /> 
            </div>
            
        </div>
    </div>
  )
}

export default User

import activity1 from "../assets/img/calories-icon.png"
import activity2 from "../assets/img/protein-icon.png"
import activity3 from "../assets/img/carbs-icon.png"
import activity4 from "../assets/img/fat-icon.png"
import { useState, useEffect,useContext } from 'react';
import {getUserInfo} from '../data';
import { mockUser } from '../mockData';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeProvider';

const ActivityOverview = () => {
    const {callApi } = useContext(ThemeContext)
    const { userId } = useParams(); 
    const [keyData, setKeyData] = useState({
        calorieCount: 0,
        proteinCount: 0,
        carbohydrateCount: 0,
        lipidCount: 0
    });

    useEffect(() => {
        const loadSessions = async () => {
            try {
                const formattedSessions = await getUserInfo(userId);
                return formattedSessions.data;
            } catch (error) {
                console.error("Erreur de chargement des data API:", error);
                return [];  // Retourner un tableau vide en cas d'erreur
            }
        };
    
        if (callApi) {
            loadSessions().then(formattedSessions => {
                setKeyData({calorieCount: formattedSessions.keyData.calorieCount,
                            proteinCount: formattedSessions.keyData.proteinCount,
                            carbohydrateCount: formattedSessions.keyData.carbohydrateCount,
                            lipidCount: formattedSessions.keyData.lipidCount
                                });
            });
        } else {
            setKeyData(mockUser.keyData);
        }
    }, [userId, callApi]);

  return (
    <div className="activityContainer">

        <div className="activityCard">
            <img src={activity1} alt="icon calories" />
            <span className="activityNumber">{keyData?.calorieCount ? keyData?.calorieCount + "kCal" : "N/A"}</span>
            <span className="activityTitle">Calories</span>  
        </div>

        <div className="activityCard">
            <img src={activity2} alt="icon protéines" />
            <span className="activityNumber">{keyData?.proteinCount ? keyData.proteinCount + "g" : "N/A"}</span>
            <span className="activityTitle">Proteines</span>  
        </div>

        <div className="activityCard">
            <img src={activity3} alt="icon glucides" />
            <span className="activityNumber">{keyData?.carbohydrateCount ? keyData.carbohydrateCount + "g" : "N/A"}</span>
            <span className="activityTitle">Glucides</span>  
        </div>

        <div className="activityCard">
            <img src={activity4} alt="icon lipides" />
            <span className="activityNumber">{keyData?.lipidCount ? keyData.lipidCount + "g" : "N/A"}</span>
            <span className="activityTitle">Lipides</span>  
        </div>

    </div>
  )
}
export default ActivityOverview
import axios from "axios";

export async function getUserInfo(userId) {
  try {
    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    const userData = response.data;

    return userData;
  } catch (error) {
    console.error("Error fetching user information:", error);
    return null;
  }
}

export async function getUserActivity(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/activity`
    );
    const activityData = response.data;
    return activityData.data;
  } catch (error) {
    console.error("Error fetching user activity:", error);
    return null;
  }
}

export async function getUserAverageSessions(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`
    );
    const averageSessionsData = response.data;
    return averageSessionsData.data.sessions;
  } catch (error) {
    console.error("Error fetching user average sessions:", error);
    return null;
  }
}

export async function getUserPerformance(userId) {
  try {
    const response = await axios.get(
      `http://localhost:3000/user/${userId}/performance`
    );
    const performanceData = response.data.data;
    return performanceData;
  } catch (error) {
    console.error("Error fetching user performance:", error);
    return null;
  }
}

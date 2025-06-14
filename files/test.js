const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore } = require("firebase-admin/firestore");
const services = require("./services.json");

// Initialize Firebase
initializeApp({
  credential: cert(services),
});

const db = getFirestore();

async function groupWeatherDataByCode() {
  try {
    const snapshot = await db.collection("weatherReport").get();
    if (snapshot.empty) {
      console.log("No weather reports found.");
      return;
    }

    const groupedData = {};

    snapshot.forEach((doc) => {
      const data = doc.data();
      const { userId, response } = data;
      const weatherCode = response.weathercode;

      if (!groupedData[weatherCode]) {
        groupedData[weatherCode] = { count: 0, users: {} };
      }

      if (!groupedData[weatherCode].users[userId]) {
        groupedData[weatherCode].users[userId] = [];
      }

      groupedData[weatherCode].count++;
      groupedData[weatherCode].users[userId].push(data);
    });

    // Print grouped data
    for (const [weatherCode, info] of Object.entries(groupedData)) {
      console.log(`Weather Code: ${weatherCode}, Count: ${info.count}`);
      for (const [userId, reports] of Object.entries(info.users)) {
        console.log(`  User ID: ${userId}, Reports: ${reports.length}`);
        reports.forEach((report, index) => {
          console.log(
            `    ${index + 1}. Temp: ${report.response.temperature}, Wind: ${
              report.response.windspeed
            }`
          );
        });
      }
    }
  } catch (error) {
    console.error("Error grouping weather data:", error);
  }
}

// Run the function
groupWeatherDataByCode();

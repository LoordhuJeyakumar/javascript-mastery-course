# 🌤️ Project Brief: Weather & Fashion Advisor

## 🎯 Objective
Build a smart application that fetches live weather data and tells the user what they should wear today.

## 🛠️ Technical Requirements
- **API Integration**: Use the [OpenWeatherMap API](https://openweathermap.org/api).
- **Functionality**:
    - Search bar for City names.
    - Display City Name, Temperature, and Weather Description (e.g., "Cloudy").
    - **Logic Engine**: A function that takes the temperature and description, and returns a tailored fashion tip.
- **Visuals**:
    - Use dynamic background colors or images (e.g., Sunny = Yellow, Rainy = Gray).

## 🧠 How to Start
1. Get an API key from OpenWeatherMap (it's free!).
2. Write an `async` function using `fetch` to get the weather data.
3. Log the response to the console first to understand the data structure.
4. Create a function like `getOutfitAdvice(temp)` that uses `if/else` statements.

## 🚀 Level Up Challenges
- Add a "Use My Location" button that uses the browser's **Geolocation API**.
- Show a 3-day forecast instead of just today.
- Save the "Last Searched City" to `localStorage`.

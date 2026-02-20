# 🚀 Project Brief: The Crypto Watcher

## 🎯 Objective
A real-time price monitoring dashboard for digital assets.

## 🛠️ Technical Requirements
- **Data Source**: Use the [CoinGecko API](https://www.coingecko.com/en/api) (Free, no key needed!).
- **Polling**:
    - Automatically refresh the prices every 60 seconds without reloading the page.
- **Logic**:
    - Compare the NEW price with the OLD price. 
    - Display a Green indicator if it went up, Red if it went down.
- **Persistence**:
    - Create a "Watchlist" feature where users can save their favorite coins.

## 🧠 How to Start
1. Test the API in your browser first (e.g., `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd`).
2. Use `fetch` inside an `async` function. 
3. Store the *previous* results in a variable so you can compare the price movement.

## 🚀 Level Up Challenges
- Add a "Currency Toggler" to see prices in USD, EUR, or BTC.
- Show the "24h Change %" for each coin.
- Add a search feature to find and add any coin from the API.

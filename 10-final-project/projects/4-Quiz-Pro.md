# 🧠 Project Brief: "Mastermind" Quiz Pro

## 🎯 Objective
An interactive, timed quiz game with high-score tracking.

## 🛠️ Technical Requirements
- **Game Engine**:
    - A `questions` array filled with objects: `{ q: "...", options: [...], answer: 0 }`.
    - Function to render the current question and its buttons.
- **Timer**: 
    - Use `setInterval` to create a 15-second timer per question.
- **State**:
    - Track current score and current question index.
- **End Game**: Show a results screen with a "Grade" (e.g., 90% = Genius).

## 🧠 How to Start
1. Design your question data structure first.
2. Write a function `showQuestion(index)` that clears the previous buttons and adds new ones.
3. Add a "Next" button that only appears after an answer is selected.

## 🚀 Level Up Challenges
- Add a "High Score" leaderboard in `localStorage`.
- Create a "Shuffled" mode so the questions appear in a different order every time.
- Add a sound effect for Correct/Wrong answers (using the Audio API).

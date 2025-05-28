### Project Overview: Timer Challenge Game

This project was built to explore and understand the concepts of **`useRef`**, **`useImperativeHandle`**, and **`createPortal`** in React. This is a fun timer challenge game where users can:

<img src="./src/assets/ProjectHome.png" alt="Initial Look" width="400" />

* Enter their **name**

  <img src="./src/assets/SetName.png" alt="Set Name" width="400" />

* Choose a timer (1s, 5s, 10s, or 15s)

  <img src="./src/assets/Timers.png" alt="Timers" width="400" />

* Start the **challenge** and try to stop it **as close as possible** to the timer end

  <img src="./src/assets/StartChallenge.png" alt="Start Challenge" width="400" />

---

#### Game Rules:

* Stop the challenge **before** the timer ends to **win**
* Your score is based on **how close** you stop to the exact time

  <img src="./src/assets/WinModal.png" alt="Win Modal" width="400" />

* If you go over time, you **lose**

  <img src="./src/assets/LostModal.png" alt="Lost Modal" width="400" />

* After the round ends (win/lose), a **scoreboard modal** is displayed

---

### React Concepts Used

* **`useRef`** – to create/track the timer  
* **`useImperativeHandle`** – to expose methods of the modal component  
* **`createPortal`** – to render the scoreboard modal at the top of the component hierarchy

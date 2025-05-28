### Project Overview: Timer Challenge Game

This project was built to explore and understand the concepts of **`useRef`**, **`useImperativeHandle`**, and **`createPortal`** in React. This is a fun timer challenge game where users can:
<img src="./src/assets/ProjectHome.png" alt="Initial Look" width="400" />
* Enter their **name**
  <img src="./src/assets/SetName.png" alt="Set Name" width="400" />
  
* Choose a timer (1s, 5s, 10s, or 15s)
  ![Timers](./src/assets/Timers.png)
* Start the **challenge** and try to stop it **as close as possible** to the timer end
  ![Start Challenge](./src/assets/StartChallenge.png)

#### Game Rules:

* Stop the challenge **before** the timer ends to **win**
* Your score is based on **how close** you stop to the exact time
  ![Win Modal](./src/assets/WinModal.png)
* If you go over time, you **lose**
  ![Lost Modal](./src/assets/LostModal.png)
* After the round ends (win/lose), a **scoreboard modal** is displayed

---

### React Concepts Used

* **`useRef`** – to create/ track the timer
* **`useImperativeHandle`** – to expose methods of modal component
* **`createPortal`** – to render the scoreboard modal at the top of the component hierarchy


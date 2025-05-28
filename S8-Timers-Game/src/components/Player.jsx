import { useState, useRef } from "react";

export default function Player() {
  const playerN = useRef();
  const [playerName, setPlayerName] = useState("");

  const handleClick = () => {
    setPlayerName(playerN.current.value)
    playerN.current.value = '';
  };

  return (
    <section id="player">
      <h2>Welcome {(playerName!=='') ? playerName: "New User"}</h2>
      <p>
        <input
          ref={playerN}
          type="text"
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}

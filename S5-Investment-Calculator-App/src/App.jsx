import UserInput from "./components/UserInput";
import Results from "./components/Results.jsx"
import { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  const userInputIsValid = (userInput.duration >= 1);

  function handleUserInputChange(inputIdentifier, newValue){
    setUserInput(prevInput => {
        return {
            ...prevInput,
            [inputIdentifier]:+newValue
        };
    });
  }
  return (
    <>
    <UserInput onChange={handleUserInputChange} userInput={userInput}/>
    {!userInputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
    {userInputIsValid && <Results userInput={userInput} />}
    </>
  );
}

export default App;

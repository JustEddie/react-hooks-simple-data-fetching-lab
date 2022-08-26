// create your App component here
import React, { useState, useEffect } from "react";

function App() {
  const [showDogs, setShowDogs] = useState("");
  const [loadingMessage, setLoadingMessage] = useState("");
  const [showMeDogs, setShowMeDogs] = useState("Show Me Dogs!");

  useEffect(() => {
    handleLoadingMessage();
    handleShowDogs();
    console.log(showDogs);
  }, [showMeDogs]);

  const handleLoadingMessage = () => {
    setLoadingMessage("Loading...");
  };

  const handleShowDogs = async () => {
    const api = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await api.json();

    setShowDogs((data.message));
  };

  const handleShowMeDogs = () => {
    return setShowMeDogs("Ta-da!");
  };

  return (
    <div>
      App
      <p>{loadingMessage}</p>
      <img src={showDogs} alt="A Random Dog" />
      <button onClick={handleShowMeDogs}>{showMeDogs}</button>
    </div>
  );
}

export default App;

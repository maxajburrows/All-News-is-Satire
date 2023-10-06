import { useEffect, useState } from "react";
import axios from 'axios';


function App() {
  const [firstText, setFirstText] = useState<string>("");

  const hitTestEndpoint = async() => {
    const text: string = (await axios.get("https://localhost:7036/Test/FirstText")).data;
    setFirstText(text);
  }

  useEffect(() => {
    hitTestEndpoint();
  }, [])
  

  return <h1>{firstText}</h1>
      
}

export default App

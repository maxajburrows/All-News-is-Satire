import { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";


function App() {
  const [buildUpText, setBuildUpText] = useState<string>("");
  const [deliveryText, setDeliveryText] = useState<string>("");

  const hitTestEndpoint = async() => {
    const text: string[] = (await axios.get("https://localhost:7036/Test/FirstText")).data;
    setBuildUpText(text[0]);
    setDeliveryText(text[1]);
  }

  useEffect(() => {
    hitTestEndpoint();
  }, [])
  

  return <>
          <h4>{buildUpText}</h4>
          <h1>{deliveryText}</h1>
        </>
      
}

export default App

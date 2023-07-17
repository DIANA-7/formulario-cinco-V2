import ForgotPassword from "./components/ForgotPassword";
import Start from "./components/Start";
import Register from "./components/Register"
import PersonalData1 from "./components/PersonalData1"
import PersonalData2 from "./components/PersonalData2"
import PersonalData3 from "./components/PersonalData3"
import { useState } from "react";
import RegisterContext from "./context/RegisterContext"

function App() {
  const [step, setStep] = useState("Start");
  
      return (
        <RegisterContext.Provider value={{step,setStep}}>
          <div className="container">
            {step === "Start" && <Start/>}
            {step === "ForgotPassword" && <ForgotPassword/>}
            {step === "Register" && <Register/>}
            {step === "PersonalData1" && <PersonalData1/>}
            {step === "PersonalData2" && <PersonalData2/>}
            {step === "PersonalData3" && <PersonalData3/>}
          </div>;
        </RegisterContext.Provider> 
      );
}


export default App;

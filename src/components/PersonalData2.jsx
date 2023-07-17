import { useContext } from "react";
import RegisterContext from "../context/RegisterContext"; 

const PersonalData2 = () => {
  const { setStep } = useContext(RegisterContext); 
    return (
        <main>
            <h3>Personal Data Part 2</h3>
            <div className="personalData1">
            <img width="100" height="80" src="https://img.icons8.com/color-glass/48/business-contact.png" alt="business-contact"/>
            </div>
    
            <div className="card">
              <form autoComplete="off">
                <fieldset>
                    <label htmlFor="phone">Phone Number </label>
                      <input type="tel" id="phone" autoFocus />
                      <p className="error">Phone required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="url">Facebook URL </label>
                      <input type="url" id="url" />
                      <p className="error">Url required</p>
                </fieldset>
               
                
            
                  <p>Continue pleace</p>
                  <div className="continueBack">
                    <button type="continue" onClick={() => {
                      setStep("PersonalData3");
                      }}>Continue</button>
                          <button type="Back" onClick={() => {
                      setStep("PersonalData1");
                      }}>Back</button>
                    </div>
                  
                 
              </form>
          </div>
    
    
        </main>
      )
  
}

export default PersonalData2
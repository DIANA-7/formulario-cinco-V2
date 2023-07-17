import { useContext } from "react";
import RegisterContext from "../context/RegisterContext";  

const Register = () => {
  const { setStep } = useContext(RegisterContext); 
  return (
    <main>
        <h3>Register Now!</h3>
        <div className="register">
        <img width="100" height="48" src="https://img.icons8.com/color-glass/48/sign-document.png" alt="sign-document"/>
        </div>

        <div className="card">
          <form autoComplete="off">
            <fieldset>
                <label htmlFor="nickname">Nickname </label>
                  <input type="text" id="nickname" autoFocus />
                  <p className="error">Nickname required</p>
            </fieldset>
            <fieldset>
                <label htmlFor="email">Email </label>
                <input type="email" id="email" />
            <p className="error">Valid email required</p>
            </fieldset>
            <fieldset>
                  <label htmlFor="password">Password </label>
                  <input type="password" id="password" />
                  <p className="error">Password required</p>
            </fieldset>  
            <fieldset>
                  <label htmlFor="confirm">Confirm password</label>
                  <input type="password" id="confirm" />
                  <p className="error">Required</p>
            </fieldset> 
        
              <p>Continue pleace</p>
              <button type="continue" onClick={() => {
                setStep("PersonalData1");
                }}>Continue</button>
              <button type="continue" onClick={() => {
                setStep("Start");
                }}>Back</button>
             
          </form>
      </div>


    </main>
  )

}

export default Register
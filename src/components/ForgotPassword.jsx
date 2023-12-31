import { useContext } from "react";
import RegisterContext from "../context/RegisterContext"; 

const ForgotPassword = () => {
  const { setStep } = useContext(RegisterContext); 
  return (
    <main>
        <h3>Fogot Password?</h3>

        <div className="forgotPassword">
        <img width="100" height="48" src="https://img.icons8.com/color-glass/48/forgot-password.png" alt="forgot-password"/>
      </div>
     
    
      <div className="card">
          <form autoComplete="off">
              <fieldset>
                  <label htmlFor="email">Email </label>
                  <input type="email" id="email" autoFocus />
                <p className="error">Valid email required</p>
              </fieldset>
              <p>We will send you an email that allow you to reset your passoword</p>
              <button type="submit">Reset Password</button>
             
          </form>
      </div>
      <p onClick={() => {
                setStep("Start");
                }}>Sign In</p> 


    </main>
  )
}

export default ForgotPassword
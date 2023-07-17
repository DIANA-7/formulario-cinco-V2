const PersonalData3 = () => {
    return (
        <main>
            <h3>Personal Data Part 3</h3>
            <div className="personalData1">
            <img width="100" height="80" src="https://img.icons8.com/color-glass/48/business-contact.png" alt="business-contact"/>
            </div>
    
            <div className="card">
                <form autoComplete="off">
                <fieldset>
                    <label htmlFor="sport">Sport </label>
                      <input type="text" id="sport" autoFocus />
                      <p className="error">Required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="hobbie">Hobbie </label>
                      <input type="text" id="hobbie" autoFocus />
                      <p className="error">Required</p>
                </fieldset>
                
                  
    
                  <div className="continueBack">
                    <button type="Back">Back</button>
                    <button type= "submit">Register</button>
                    </div>
                
                   
                   
               
                
            
               
                  
                 
              </form>
          </div>
    
    
        </main>
      )
  
}

export default PersonalData3
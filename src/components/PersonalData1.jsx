const PersonalData1 = () => {
    return (
        <main>
            <h3>Personal Data Part 1</h3>
            <div className="personalData1">
            <img width="100" height="80" src="https://img.icons8.com/color-glass/48/business-contact.png" alt="business-contact"/>
            </div>
    
            <div className="card">
              <form autoComplete="off">
                <fieldset>
                    <label htmlFor="name">Name </label>
                      <input type="text" id="name" autoFocus />
                      <p className="error">Name required</p>
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName">Last Name </label>
                      <input type="text" id="lastName" autoFocus />
                      <p className="error">Last Name required</p>
                </fieldset>
               
                
            
                <p>Continue pleace</p>
                  <div className="continueBack">
                    <button type="continue">Continue</button>
                    <button type="Back">Back</button>
                    </div>
                 
              </form>
          </div>
    
    
        </main>
      )
  
}

export default PersonalData1
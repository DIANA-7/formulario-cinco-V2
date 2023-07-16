const Start = () => {
  return (
    <main>
      <h3>GALAXY GAME</h3>
      <div className="faces">
      <img width="48" height="48" src="https://img.icons8.com/color-glass/48/user-female.png" alt="user-female"/>
      <img width="48" height="48" src="https://img.icons8.com/color-glass/48/blackblood.png" alt="blackblood"/>
      <img width="48" height="48" src="https://img.icons8.com/color-glass/48/groot.png" alt="groot"/>
      <img width="48" height="48" src="https://img.icons8.com/color-glass/48/stormtrooper.png" alt="stormtrooper"/>
      </div>
     
    
      <div className="card">
          <form autoComplete="off">
              <fieldset>
                  <label htmlFor="nickname">Nickname </label>
                  <input type="text" id="nickname" autoFocus />
                  <p className="error">Nickname required</p>
              </fieldset>
              <fieldset>
                  <label htmlFor="password">Password </label>
                  <input type="password" id="password" />
                  <p className="error">Password required</p>
              </fieldset>
              <button type="submit">Enter</button>
              <div className="forgot">Forgot passoword?</div>
          </form>
      </div>
      <p>Create new account</p> 

    </main>);

};

export default Start
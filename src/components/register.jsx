export const Register = (props) => {
    return (
      <div id='register-content'>
        <div className="register-nav">
          <a className='navbar-brand' href='/'>
              <img className='logo' src='img/logo.svg' alt="QUEEN HEALTHCARE AGENCY"/>
            </a>
        </div>
        <div id="register">
          <div className="register-form">
            <h3>REGISTER</h3>
            <form action="">
              <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" class="form-control" id="name" />
              </div>
              <div class="form-group">
                <label for="name">Email address:</label>
                <input type="email" class="form-control" id="email" />
              </div>
              <div class="form-group">
                <label for="role">Registering for:</label>
                <select class="form-control" id="role">
                  <option>Nurse</option>
                  <option>Doctor</option>
                  <option>Lab Technician</option>
                  <option>Helathcare assistant</option>
                  <option>Homecare</option>
                </select>
              </div>
              <div class="form-group">
                <label for="visa">Do you have valid visa to work in Ireland?</label>
                <select class="form-control" id="visa">
                  <option selected value={"Yes"}>Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="form-group">
                <label for="address">Address:</label>
                <textarea  type="textarea" class="form-control" id="address" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
              <button class="btn btn-default back-btn"><a href='/'>Back</a></button>
            </form>
          </div>
        </div>
      </div>
    );
};
  
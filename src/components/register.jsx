import { Link } from "react-router-dom";
import { useState } from 'react';
import emailjs from 'emailjs-com';

const initialState = {
  name: '',
  email: '',
  gender: '',
  role: '',
  visa:'',
  eircode:'',
  description: ''
}

export const Register = (props) => {
  const [{ name, email, gender, role, visa, eircode, description }, setState] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setState((prevState) => ({ ...prevState, [name]: value }))
  }
  const clearState = () => setState({ ...initialState })

  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        'service_2m6um1l', 'template_3fzk2vg', e.target, 'hV84mVozxY_2Zv00W'
      )
      .then(
        (result) => {
          clearState();
          alert('Thanks for registering with us :), someone from the team will contact you shortly');
        },
        (error) => {
          clearState();
        }
      )
  }

  return (
    <div id='register-content'>
      <div className="sub-nav">
        <Link to='/'>
          <img className='logo' src='img/logo.svg' alt="QUEEN HEALTHCARE AGENCY"/>
        </Link>
      </div>
      <div id="register">
        <div className="register-form">
          <h3>REGISTER</h3>
          <form name="registerForm" validate onSubmit={handleSubmit}>
            <div className="form-group">
              <label for="name">Name:</label>
              <input 
                type="text"
                className="form-control" 
                id="name"
                name="name"
                placeholder='Name'
                onChange={handleChange}
                required
                value={name} 
              />
            </div>
            <div className="form-group">
              <label for="name">Email:</label>
              <input
                type='email'
                id='email'
                name='email'
                className='form-control'
                placeholder='Email'
                value={email}
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label for="gender">Gender:</label>
              <select
                className="form-control"
                id="gender"
                name="gender"
                value={gender}
                required
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div className="form-group">
              <label for="role">Registering for:</label>
              <select
                className="form-control"
                id="role"
                name="role"
                value={role}
                required
                onChange={handleChange}
              >
                <option>Nurse</option>
                <option>Kitchen staff</option>
                <option>Helathcare assistant</option>
                <option>Homecare</option>
                <option>Cleaning staff</option>
                <option>Receptionist</option>
              </select>
            </div>
            <div className="form-group">
              <label for="visa">Do you have valid visa to work in Ireland?</label>
              <select
                className="form-control"
                id="visa"
                name="visa"
                value={visa}
                required
                onChange={handleChange}
              >
                <option selected value={"Yes"}>Yes</option>
                <option value="No">No</option>
              </select>
            </div>
            <div className="form-group">
              <label for="name">Eircode:</label>
              <input 
                type="text"
                className="form-control" 
                id="eircode"
                name="eircode"
                placeholder='Eircode'
                onChange={handleChange}
                required
                value={eircode} 
              />
            </div>
            <div className="form-group">
              <label for="address">Description:</label>
              <textarea
                type="textarea"
                className="form-control"
                id="c"
                name="description"
                placeholder="Description"
                required
                value={description}
                onChange={handleChange}
              />
            </div>
            <p><b>Note:</b>If you wish to share the resume/cv with us please send it to this email <i><b>hr@queenhealthcareagency.com</b></i></p>
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/"><button className="btn btn-default back-btn">Back</button></Link>
          </form>
        </div>
      </div>
    </div>
  );
};
  
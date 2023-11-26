import React, { useState } from 'react';
import './Reg.css';
const RegistrationPage = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    mydate: '',
    gender: '',
    course: '',
    phone: '',
    mail: '',
    password: '',
    check: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className='back'>
        <div className="container p-4 mt-3 mb-4 text-black">
          <form onSubmit={handleSubmit}>
            <h3 className="card-title">Registration Form</h3>
            <hr style={{ height: '4px' }} />

            {/* Form fields */}
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              // Add other necessary attributes
            />

            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              name="lname"
              value={formData.lname}
              onChange={handleChange}
              // Add other necessary attributes
            />

            <label htmlFor="mydate">Date of Birth</label>
            <input
              type="date"
              id="mydate"
              name="mydate"
              value={formData.mydate}
              onChange={handleChange}
              // Add other necessary attributes
            />

            {/* Repeat similar structure for other form fields */}

            <div className="form-check mb-3">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  name="check"
                  checked={formData.check}
                  onChange={handleChange}
                />
                I accept all the&nbsp;&nbsp;<a href="#">terms and Conditions</a>.
              </label>
              <br />
              <br />
            </div>

            <div className="col-md-12 column" style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
              <button type="submit" className="btn btn-success">Submit</button>
            </div>
          </form>
        </div>
      </div>
  );
};

export default RegistrationPage;

import React, { useState } from 'react';
import './Forms.css';

const Forms = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    guardianName: '',
    contactNumber: '',
    class: '',
    subjects: [],
    transportation: false,
    sports: false,
    music: false,
    modeOfTransport: '',
    schoolType: '',
    selectedSSCSchool: '',
    selectedCBSESchool: '',
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle selection of SSC school
  const handleSSCSchoolChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedSSCSchool: e.target.value,
    }));
  };

  // Handle selection of CBSE school
  const handleCBSESchoolChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      selectedCBSESchool: e.target.value,
    }));
  };

  // Handle school type selection
  const handleSchoolTypeChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      schoolType: e.target.value,
      selectedSSCSchool: '', // Reset SSC school selection
      selectedCBSESchool: '', // Reset CBSE school selection
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to handle form submission, e.g., API call or state update
    console.log('Form submitted:', formData);

    // Show a pop-up message
    window.alert('Thank you for submitting the form!');
  };

  return (
    <div id="forms">
      <h1>Student Registration Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <label>
          First Name:
          <input type="text" name="firstName" value={formData.firstName} onChange={handleInputChange} required />
        </label>
        <label>
          Last Name:
          <input type="text" name="lastName" value={formData.lastName} onChange={handleInputChange} required />
        </label>
        <label>
          Date of Birth:
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleInputChange} required />
        </label>
        <label>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleInputChange} required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label>

        {/* Address */}
        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleInputChange} required />
        </label>

        {/* Parent/Guardian Details */}
        <label>
          Guardian Name:
          <input type="text" name="guardianName" value={formData.guardianName} onChange={handleInputChange} required />
        </label>
        <label>
          Contact Number:
          <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleInputChange} required />
        </label>

        {/* Class and Subjects */}
        <label>
          Class:
          <input type="text" name="class" value={formData.class} onChange={handleInputChange} required />
        </label>
       
        {/* School Type Selection */}
        <label>
          School Type:
          <select
            name="schoolType"
            value={formData.schoolType}
            onChange={handleSchoolTypeChange}
            required
          >
            <option value="">Select School Type</option>
            <option value="ssc">SSC</option>
            <option value="cbse">CBSE</option>
          </select>
        </label>

        {/* SSC Schools */}
        {formData.schoolType === 'ssc' && (
          <label>
            Select SSC School:
            <select
              name="selectedSSCSchool"
              value={formData.selectedSSCSchool}
              onChange={handleSSCSchoolChange}
              required
            >
              <option value="">Select SSC School</option>
              <option value="Chaitanya Vidyalaya">Chaitanya Vidyalaya</option>
              <option value="Froebel’s High School">Froebel’s High School</option>
            <option value="Ahmedabad International School">Ahmedabad International School</option>
            <option value="Vincent’s School">Vincent’s School</option>
            <option value="Joseph’s Indian High School">Joseph’s Indian High School</option>
            <option value="Carmel Garden Matriculation Higher Secondary School">Carmel Garden Matriculation Higher Secondary School</option>
            <option value="Xavier’s High School">Xavier’s High School</option>
            <option value="Don Bosco Matriculation Higher Secondary School">Don Bosco Matriculation Higher Secondary School</option>
            <option value="Xavier’s Collegiate School">Xavier’s Collegiate School</option>
            <option value="SBOA Matriculation Higher Secondary School">SBOA Matriculation Higher Secondary School</option>
              {/* Add other SSC schools */}
            </select>
          </label>
        )}

        {/* CBSE Schools */}
        {formData.schoolType === 'cbse' && (
          <label>
            Select CBSE School:
            <select
              name="selectedCBSESchool"
              value={formData.selectedCBSESchool}
              onChange={handleCBSESchoolChange}
              required
            >
              <option value="">Select CBSE School</option>
              <option value="Kendriya Vidyalaya">Kendriya Vidyalaya</option>
            <option value="Jawahar Navodaya Vidyalaya">Jawahar Navodaya Vidyalaya</option>
            <option value="Delhi Public School">Delhi Public School</option>
            <option value="hal Public School">hal Public School</option>
            <option value="Lotus Valley International School">Lotus Valley International School</option>
            <option value="Kokilaben Dhirubhai Ambani Vidyamandir">Kokilaben Dhirubhai Ambani Vidyamandir</option>
            <option value="Spring Buds International School">Spring Buds International School</option>
            <option value="Odisha Adarsha Vidyalaya">Odisha Adarsha Vidyalaya</option>
            <option value="Kendriya Vidyalaya AFS BAKSHI KA TALAB">Kendriya Vidyalaya AFS BAKSHI KA TALAB</option>
            <option value="Sainik School">Sainik School</option>
              {/* Add other CBSE schools */}
            </select>
          </label>
        )}

        {/* Checkboxes */}
        <label>
          Transportation:
          <input
            type="checkbox"
            name="transportation"
            checked={formData.transportation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Sports:
          <input type="checkbox" name="sports" checked={formData.sports} onChange={handleInputChange} />
        </label>
        <label>
          Music:
          <input type="checkbox" name="music" checked={formData.music} onChange={handleInputChange} />
        </label>

        {/* Radio Buttons */}
        <div>
          Mode of Transport:
          <label>
            <input
              type="radio"
              name="modeOfTransport"
              value="bus"
              checked={formData.modeOfTransport === 'bus'}
              onChange={handleInputChange}
            />
            Bus
          </label>
          <label>
            <input
              type="radio"
              name="modeOfTransport"
              value="car"
              checked={formData.modeOfTransport === 'car'}
              onChange={handleInputChange}
            />
            Car
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forms;

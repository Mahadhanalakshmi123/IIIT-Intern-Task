// components/Tables/Tables.js
import React from 'react';
import { Link } from 'react-scroll'; // Add this line
import './Tables.css';
// import Footer from './components/Footer/Footer'; // Import the CSS file for styling

const Tables = ({ onMenuItemClick }) => {
  const schoolData = [
    {
      id: 1,
      sscSchool: 'Chaitanya Vidyalaya',
      sscLocation: 'Hyderabad – Andhra Pradesh',
      cbseSchool: 'Kendriya Vidyalaya',
      cbseLocation: 'Machilipatnam - Andhra Pradesh',
    },
    {
      id: 1,
      sscSchool: ' Froebel’s High School',
      sscLocation: ' Hyderabad – Andhra Pradesh',
      cbseSchool: 'Jawahar Navodaya Vidyalaya',
      cbseLocation: ' Rajampet -  Andhra Pradesh',
    },
    {
      id: 1,
      sscSchool: 'Ahmedabad International School',
      sscLocation: ' Gujarat ',
      cbseSchool: 'Delhi Public School',
      cbseLocation: 'R.K.puram - New Delhi',
    },
    {
      id: 1,
      sscSchool: ' Vincent’s School',
      sscLocation: 'Pune – Maharashtra',
      cbseSchool: 'hal Public School ',
      cbseLocation: 'Banglore',
    },
    {
      id: 1,
      sscSchool: 'Joseph’s Indian High School',
      sscLocation: 'Bangalore – Karnataka',
      cbseSchool: 'Lotus Valley International School',
      cbseLocation: 'Noida',
    },
    {
      id: 1,
      sscSchool: 'Carmel Garden Matriculation Higher Secondary School',
      sscLocation: 'Coimbatore – Tamil Nadu ',
      cbseSchool: 'Kokilaben Dhirubhai Ambani Vidyamandir',
      cbseLocation: 'Jamnagar - Maharashtra',
    },
    {
      id: 1,
      sscSchool: 'Xavier’s High School',
      sscLocation: 'Mumbai – Maharashtra',
      cbseSchool: 'Spring Buds International School',
      cbseLocation: 'Thane - Maharashtra',
    },
    {
      id: 1,
      sscSchool: 'Don Bosco Matriculation Higher Secondary School',
      sscLocation: 'Chennai – Tamil Nadu',
      cbseSchool: 'Odisha Adarsha Vidyalaya',
      cbseLocation: ' Kodala - Odisha',
    },
    {
      id: 1,
      sscSchool: 'Xavier’s Collegiate School',
      sscLocation: 'Kolkata – West Bengal',
      cbseSchool: 'Kendriya Vidyalaya AFS BAKSHI KA TALAB',
      cbseLocation: ' Lucknow - Uttar Pradesh',
    },
    {
      id: 1,
      sscSchool: 'SBOA Matriculation Higher Secondary School',
      sscLocation: 'Chennai – Tamil Nadu',
      cbseSchool: 'Sainik School',
      cbseLocation: 'Kalikiri - Andhra Pradesh',
    },
    // Add similar objects for the remaining schools
  ];

  return (
    <>
    <div id="tables" className="tables-container">
      <h1>TOP 10 SSC AND CBSE SCHOOLS IN INDIA</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Top 10 SSC Schools</th>
              <th>Location</th>
              <th>Top 10 CBSE Schools</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {schoolData.map((school, index) => (
              <tr key={index + 1}>
                <td>{index + 1}</td>
                <td>{school.sscSchool}</td>
                <td>{school.sscLocation}</td>
                <td>{school.cbseSchool}</td>
                <td>{school.cbseLocation}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <Link
            to="forms"
            smooth={true}
            duration={500}
            onClick={() => onMenuItemClick('forms')}
          >
            <button className="go-forward-button">Go Forward</button>
          </Link>
      </div>
    </div>
    {/* <Footer/> */}
    </>
  );
}

export default Tables;

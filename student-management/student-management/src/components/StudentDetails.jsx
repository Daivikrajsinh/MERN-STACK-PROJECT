import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentDetails = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
      setError("Student ID is missing!");
      setLoading(false);
      return;
    }

    axios
      .get(`http://localhost:369/students/${id}`)
      .then((res) => {
        setStudent(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Error fetching student data.');
        setLoading(false);
        console.error(err);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
        <div className="text-xl flex items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <span>Loading student details...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
        <div className="text-xl text-red-500 flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50">
        <div className="text-xl">
          No student found with ID: {id}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 p-6 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-xl rounded-lg p-8 transition-all duration-300 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 relative after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-24">
          Student Details
        </h2>

        <div className="space-y-4 text-gray-700">
          <DetailItem label="Name" value={student.name} />
          <DetailItem label="Username" value={student.userName} />
          <DetailItem label="Email" value={student.email} />
          <DetailItem label="Phone" value={student.phone} />
          <DetailItem label="Website" value={student.website} isLink />
        </div>

        <div className="mt-8 flex space-x-4">
          <Link
            to="/studentList"
            className="relative px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-gray-600 hover:to-gray-700 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to List
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-gray-600 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
          
          {/* <Link
            to={`/studentUpdate/${id}`}
            className="relative px-6 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              Edit Student
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, isLink = false }) => (
  <div className="flex justify-between items-center border-b pb-2 group">
    <span className="font-semibold text-gray-700">{label}:</span>
    {isLink ? (
      <a 
        href={`http://${value}`} 
        target="_blank" 
        rel="noopener noreferrer"
        className="text-blue-500 hover:text-blue-700 transition-colors duration-200 hover:underline"
      >
        {value}
      </a>
    ) : (
      <span className="text-gray-600 transition-colors duration-200 group-hover:text-blue-600">
        {value}
      </span>
    )}
  </div>
);

export default StudentDetails;
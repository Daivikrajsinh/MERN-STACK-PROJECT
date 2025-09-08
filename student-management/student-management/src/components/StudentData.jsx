import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentData = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:369/students")
      .then((res) => {
        setStudents(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching student data:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Student Directory</h1>

        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {loading ? (
            <div className="text-center p-8 text-gray-500">Loading...</div>
          ) : students.length === 0 ? (
            <div className="text-center p-8 text-gray-500">No student data available.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full table-auto text-sm text-left">
                <thead className="bg-blue-600 text-white sticky top-0 z-10">
                  <tr>
                    <th className="px-6 py-4 font-semibold">ID</th>
                    <th className="px-6 py-4 font-semibold">Username</th>
                    <th className="px-6 py-4 font-semibold">Name</th>
                    <th className="px-6 py-4 font-semibold">Email</th>
                    <th className="px-6 py-4 font-semibold">Phone</th>
                    <th className="px-6 py-4 font-semibold">Website</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {students.map((student, index) => (
                    <tr
                      key={student.id}
                      className={`${
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      } hover:bg-gray-100 transition`}
                    >
                      <td className="px-6 py-4">{student.id}</td>
                      <td className="px-6 py-4">{student.userName}</td>
                      <td className="px-6 py-4">{student.name}</td>
                      <td className="px-6 py-4">{student.email}</td>
                      <td className="px-6 py-4">{student.phone}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://${student.website}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          {student.website}
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentData;

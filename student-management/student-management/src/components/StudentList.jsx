import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "./useContext";

const StudentList = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const { setAuth } = useContext(AuthContext);


  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:369/students?_page=${count}&_per_page=5`)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        setAuth(true); // You could also store user info if needed
        navigate("/studentList");
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [count]);

  function handleDelete(id) {
    const deleteData = window.confirm("Would you like to delete?");
    if (deleteData) {
      axios
        .delete(`http://localhost:369/students/${id}`)
        .then(() => {
          navigate("/");
          location.reload();
        })
        .catch((err) => console.log(err));
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4 sm:mb-0 relative after:absolute after:-bottom-2 after:left-0 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-24">
            Student Dashboard
          </h1>
          <Link
            to="/studentForm"
            className="relative px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-600 hover:to-indigo-700 group overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                  clipRule="evenodd"
                />
              </svg>
              Add New Student
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </Link>
        </div>

        {/* Table Container */}
        <div className="bg-white rounded-xl shadow-2xl overflow-hidden transition-all duration-300 hover:shadow-3xl">
          {loading ? (
            <div className="flex justify-center items-center p-12">
              <svg className="animate-spin h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
          ) : (
            <>
              {/* Table */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      {["ID", "Name", "Username", "Email", "Phone", "Website", "Actions"].map(
                        (header) => (
                          <th
                            key={header}
                            className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider group relative"
                          >
                            <span className="inline-block relative">
                              {header}
                              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                            </span>
                          </th>
                        )
                      )}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.data &&
                      data.data.map((user) => (
                        <tr
                          key={user.id}
                          className="hover:bg-gray-50 transition-colors duration-200 transform hover:scale-[1.002]"
                        >
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {user.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.userName}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.email}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {user.phone}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-500 hover:text-blue-700 transition-colors duration-200">
                            <a
                              href={`http://${user.website}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:underline"
                            >
                              {user.website}
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                            <Link
                              to={`/studentDetails/${user.id}`}
                              className="relative inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-blue-500 shadow-sm hover:bg-blue-600 transition-all duration-200 hover:shadow-md group"
                            >
                              <span className="relative z-10">View</span>
                              <span className="absolute inset-0 bg-blue-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>

                            <Link
                              to={`/studentUpdate/${user.id}`}
                              className="relative inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-green-500 shadow-sm hover:bg-green-600 transition-all duration-200 hover:shadow-md group"
                            >
                              <span className="relative z-10">Edit</span>
                              <span className="absolute inset-0 bg-green-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Link>
                            <button
                              onClick={() => handleDelete(user.id)}
                              className="relative inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md text-white bg-red-500 shadow-sm hover:bg-red-600 transition-all duration-200 hover:shadow-md group"
                            >
                              <span className="relative z-10">Delete</span>
                              <span className="absolute inset-0 bg-red-600 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  Page <span className="font-medium">{count}</span> of <span className="font-medium">{Math.ceil(data.items / 5)}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    disabled={count === 1}
                    onClick={() => setCount(count - 1)}
                    className={`px-4 py-2 rounded-md flex items-center ${count === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md"
                      }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Previous
                  </button>
                  <button
                    disabled={count === Math.ceil(data.items / 5)}
                    onClick={() => setCount(count + 1)}
                    className={`px-4 py-2 rounded-md flex items-center ${count === Math.ceil(data.items / 5)
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-700 hover:bg-gray-100 transition-colors duration-200 shadow-sm hover:shadow-md"
                      }`}
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 ml-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
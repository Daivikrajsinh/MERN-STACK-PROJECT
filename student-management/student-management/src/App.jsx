import React from 'react';
import { Route, Routes } from 'react-router-dom';
import StudentDetails from './components/StudentDetails';
import StudentForm from './components/StudentForm';
import StudentList from './components/Studentlist';
import Navbar from './components/Navbar';
import Update from './components/Update';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import { PrivateRoute } from './components/PrivateRoute';
import StudentData from './components/StudentData';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<StudentData/>}/>
        {/* <Route path="/studentDashboard" element={<StudentList />} /> */}
        <Route path="/studentDetails/:id?" element={<StudentDetails />} />
        <Route path="/studentForm" element={<StudentForm />} />
        <Route path="/studentList" element={<PrivateRoute><StudentList /></PrivateRoute>} />
        <Route path="/studentUpdate/:id" element={<Update/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>
      </Routes>
    </>
  );
}

export default App;

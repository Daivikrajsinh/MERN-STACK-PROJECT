import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from './useContext'

export const PrivateRoute = ({ children }) => {
      const loginAuth = useContext(AuthContext)
      console.log(loginAuth)
    if (!loginAuth.auth) {
        alert("you have to first login")
        return  <Navigate to={"/signin"} />
    }
    
    return children

}



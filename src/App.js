import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'





function App() {
  return (
      <Routes>
      <Route path="/login" element={<Login/>} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path="/users"
        element={
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        }
      />

      <Route
        path="/users/:id"
        element={
          <PrivateRoute>
            <UserDetail />
          </PrivateRoute>
        }
      />

      <Route
        path="/products"
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
  


export default App
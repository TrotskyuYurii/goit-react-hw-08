import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { refreshUser } from "./redux/auth/operations";
import Layout from "./components/Layout/Layout";
import RestrictedRoute from "./components/RestrictedRoute/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import HomePage from "./pages/HomePage/HomePage";
import RegistrationPage from "./pages/RegistrationPage/RegistrationPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token'); 

    if (token) {
        dispatch(refreshUser());
    }
}, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/registration"
          element={
            <RestrictedRoute>
              <RegistrationPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute>
              <LoginPage />
            </RestrictedRoute>
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute>
              <ContactsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
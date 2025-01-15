import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import HomePage from "./pages/HomePage";
import "./styles/App.css";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
  };

  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<LoginForm onAction={handleAuthentication} />}
          />
          <Route
            path="/homepage"
            element={
              <ProtectedRoute
                isAllowed={isAuthenticated}
                redirectPath="/homepage"
              >
                <HomePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

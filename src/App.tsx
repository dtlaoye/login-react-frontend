import { ApolloProvider } from "@apollo/client";
import client from "./ApolloClient";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./pages/LoginForm";
import Homepage from "./pages/Homepage";
import "./styles/App.css";

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;

import { ChakraProvider } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import { AlertProvider } from "./context/alertContext";

import Layout from './components/Layout'; 
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import ProjectsSection from "./components/ProjectsSection";  
import ContactMeSection from "./components/ContactMeSection"; 
import Alert from "./components/Alert";


function App() {
  return (

    <ChakraProvider>
      <AlertProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects/:projectId" element={<ProjectDetails />} />
          </Routes>
        </Layout>
        <Alert />
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;

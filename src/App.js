import React, { useState, useEffect } from "react";
import AppBar from "./components/AppBar";
import { Container } from "@mui/material";
import api from "./utils/api";
import TableSection from "./components/TableSection";

function App() {
  const [leadsList, setLeadsList] = useState([]);
  const [pipeline, setPipeline] = useState([]);
  const [usersList, setUsersList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    api
      .getAllLeads()
      .then(([leads, pipelines, users]) => {
        const [currentPipeline] = pipelines._embedded.pipelines;
        setLeadsList(leads._embedded.leads);
        setPipeline(currentPipeline);
        setUsersList(users._embedded.users);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <p>Loading</p>
  ) : (
    <>
      <AppBar />
      <Container>
        <TableSection
          leadsList={leadsList}
          pipeline={pipeline}
          usersList={usersList}
        />
      </Container>
    </>
  );
}

export default App;

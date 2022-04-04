import React, { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../components/atomic/Button";
import { FormContainer, Container, Card, CardButton } from "./styled";

const Home = () => {
  const [optionComponent, setOptionComponent] = useState("default");
  const handleSubmit = () => {
    history.push("/main-screen");
  };
  const Components = {
    default: <Button title="ENTER" background color cursor/>,
    buttonActive: <Button title="ENTER" type="submit" onClick={handleSubmit}/>,
  };
  const history =useHistory()
  
  
  return (
    <Container>
      <Card>
        <h2>Welcome to CodeLeap network</h2>
        <FormContainer>
          <label> Please enter your username</label>
          <input
            label="Please enter your username"
            type="text"
            placeholder="John doe"
            onChange={() => setOptionComponent("buttonActive")}
            
          />
          <CardButton>{Components[optionComponent]}</CardButton>
        </FormContainer>
      </Card>
    </Container>
  );
};

export default Home;

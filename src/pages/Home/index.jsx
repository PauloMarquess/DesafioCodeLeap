import React, { useState } from "react";
import Button from "../../components/atomic/Button";
import { FormContainer, Container, Card, CardButton } from "./styled";

const Home = () => {
  const [optionComponent, setOptionComponent] = useState("default");
  const Components = {
    default: <Button title="ENTER" background color cursor/>,
    buttonActive: <Button title="ENTER" />,
  };
 
  
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

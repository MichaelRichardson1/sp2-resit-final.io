import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function LogoutButton() {
  const history = useHistory();

  const handleLogout = () => {
    
    history.push("/");

  };

  return (
    <Button onClick={handleLogout}>
      Logout
    </Button>
  );
}

export default LogoutButton;
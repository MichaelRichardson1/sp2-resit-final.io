import React from "react";
import { Button } from "react-bootstrap";

function LogoutButton({ redirectToIndex }) {
  const handleLogout = () => {
    
    redirectToIndex();
    
  };

  return (
    <Button onClick={handleLogout} className="proceed">
      Logout
    </Button>
  );
}

export default LogoutButton;
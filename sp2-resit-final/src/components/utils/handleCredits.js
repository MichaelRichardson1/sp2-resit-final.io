import React, { useEffect } from "react";
import axios from "axios";
import { CREDITS_URL } from "../constants/api";

function HandleCredits() {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    const fetchCredits = async () => {
      
      const response = await axios.get(CREDITS_URL);
      const userCredits = response.data.credits;
      
      const lastLogin = localStorage.getItem("lastLogin");
      const today = new Date();
      if (lastLogin !== today.toDateString()) {
        
        const newCredits = userCredits + 1000;
        
        await axios.put(CREDITS_URL, { credits: newCredits });
        
        localStorage.setItem("lastLogin", today.toDateString());
        
        setCredits(newCredits);

      } else {
        
        setCredits(userCredits);

      }
    };

    fetchCredits();
  }, []);

  return (
    <div className="container">      
      <p>You have {credits} credits.</p>      
    </div>
  );
}

export default HandleCredits;
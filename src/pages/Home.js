import React from "react";
import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Typography variant="h3" align="center">
        Get Hired or Hire people for free!
      </Typography>
      <div>
        <ul>
          <li>
            <Button variant="outlined">
              <Link to="/employer/dashboard">
                Hire talent
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="outlined">
              <Link to="/employee/feed">
                Get Job Now
              </Link>
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { Link } from 'react-router-dom';

// Header component
const Header = () => {
  return (
    <header>
      <h1><center>Welcome to Hiring Hive </center></h1>
      <p>Find your dream job or hire talented candidates</p>
    </header>
  );
};

// Main component
const Main = () => {
  return (
    <main>
      <div>
        <div>
          <h2>Get Started</h2>
          <div>
            {/* Use Link components instead of anchor tags */}
            <Link to="/register">Register</Link>
            <br />
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </main>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer>
      <p>&copy; 2024 HiringHive</p>
    </footer>
  );
};

// App component
const MainPage = () => {
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default MainPage;

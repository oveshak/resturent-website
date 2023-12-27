import React from "react";
import Layout from "./../layout/Layout";
import { Link } from "react-router-dom";
import Banner from "./../image/banner.jpeg";
import "./../style/HomeStyle.css";
const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
          <h1>Food Website</h1>
          <p>Best Food In Bangladesh</p>
          <Link to="/menu">
            <button>ORDER NOW</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

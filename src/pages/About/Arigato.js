import React, { useContext } from 'react';
import './arigato.css'; // Make sure to include your CSS file
import coLingo1Image from "../assets/Co-Lingo1.jpeg.jpg";
import colingo2Image from "../assets/Colingo2.jpeg.jpg";
import NavbarI from '../../Navbar/NavbarI';
import Header from '../../Header/Header';
import { useAuth } from '../AuthContext';

function Arigato() {
  const { userEmail } = useAuth();

  const isLoggedIn = !!userEmail;

  return (
    <div>
        {isLoggedIn ? <Header /> : <NavbarI />}
      <div className="heading">
        <h1>ABOUT US</h1>
        <p>We creators of this website put our heart and soul to make it and tried to add more features for user
          convenience.
          <br />
          We tried our best to make our user interface attractive and easy to use.
        </p>
      </div>
      <div className="container">
        <section className="about">
          <div className="about-image">
            {/* Use the imported image here */}
            <img src={colingo2Image} alt="Colingo" />
          </div>
          <div className="about-content">
            <h2>Get New Jobs!!</h2>
            <div className="about-right">
              <div className="about-right-content">
                <div className="about-right-content-p1">Rashan shop</div>
                <div className="about-right-content-p1">Saloon shop</div>
                <div className="about-right-content-p1">Sweet shop</div>
              </div>
              <div className="about-right-content">
                <div className="about-right-content-p1">Fast food</div>
                <div className="about-right-content-p1">Restaurants</div>
                <div className="about-right-content-p1">Jewelry Shop</div>
              </div>
              <div className="about-right-content">
                <div className="about-right-content-p1">Clothes store</div>
                <div className="about-right-content-p1">Restaurants</div>
                <div className="about-right-content-p1">Medical Store</div>
              </div>
            </div>
            <a href="#" className="read-more">Explore</a>
          </div>
        </section>
      </div>

      <div className="container" style={{ paddingTop: "100px" }}>
        <section className="about">
          <div className="about-content">
            <h2>Let the right people know you’re open to work</h2>
            <div className="about-right">
              With the Open To Work feature, you can privately tell recruiters or publicly share with the LinkedIn
              community that you are looking for new job opportunities.
            </div>
            <a href="#" className="read-more">Explore</a>
          </div>
          <div className="about-image">
            {/* Use the other imported image here */}
            <img src={coLingo1Image} alt="Co-Lingo" />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Arigato;

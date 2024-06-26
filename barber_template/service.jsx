// Service.jsx
import React, { useEffect } from 'react';

const Service = () => {
  useEffect(() => {
    window.addEventListener("scroll", function () {
      var navbar = document.querySelector(".navbar");
      if (navbar) {
        navbar.classList.toggle("scrolled", window.scrollY > 0);
      }
    });
  }, []);

  const toggleContent = (id) => {
    // Your toggleContent function implementation
  };

  return (
    <div>
        <style>
          {`
            @import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap');

            * {
              margin: 0px;
              padding: 0px;
            }

            a {
              text-decoration: none;
            }

            .navbar {
              position: fixed;
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding-left: 25px;
              padding-right: 25px;
              background-color: #636262;
              z-index: 1;
            }

            .h1::before {
              margin-right: 40px;
              font-size: 25px;
              font-family: 'Alfa Slab One';
              font-weight: 20;
              content: attr(data-text);
              background-clip: text;
              color: transparent;
              background-image: linear-gradient(115deg, #963131, #8b2424, #a3a3a3, #a3a3a3, #18519b, #18519b);
            }

            .logo-img {
              max-block-size: 110px;
              padding-left: 10px;
              cursor: pointer;
            }

            body {
              font-family: 'Arial', sans-serif, "Alfa Slab One";
              background-color: #7a7171;
              color: #333;
              text-align: center;
              align-items: center;
              justify-content: space-around;
              margin-left: 0;
              margin-right: 0;
              z-index: 2;
            }

            #hair {
              background-image: url(scissor.png);
              background-position: center;
              background-size: 85%;
              background-repeat: no-repeat;
              transform: rotate(-40deg) scale(1);
              overflow: hidden;
            }

            #hair:hover {
              transform: rotate(-40deg) scale(1.1);
            }

            #hair h1 {
              transform: rotate(40deg);
            }

            .img-wrapper {
              border: 2px solid #831d1d;
              transform: rotate(40deg);
            }

            #beard {
              background-image: url(razor.png);
              background-position: center;
              background-size: 75%;
              background-repeat: no-repeat;
            }

            .hasábok {
              margin-top: 100px;
              display: flex;
              flex-wrap: wrap;
              width: 100%;
              height: auto;
              flex-grow: 1;
              color: rgb(68, 68, 68);
              justify-content: space-evenly;
              display: inline-flex;
              text-align: center;
              background-color: #7a7171;
            }

            .hasáb {
              width: 28%;
              height: 400px;
              padding-left: 50px;
              padding-right: 50px;
              margin-top: 90px;
              margin-left: 50px;
              margin-right: 40px;
              background-size: cover;
              background-position: center;
              text-align: center;
              color: white;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              transition: transform 0.16s ease-in-out;
              transition-duration: 0.4;
              cursor: pointer;
            }

            .hasáb:hover {
              transform: scale(1.1);
              transition: transform 0.35s ease-in-out opacity 0s ease-in-out;
            }

            .hasáb h1 {
              display: flex;
              text-align: center;
              justify-content: center;
              align-items: center;
              color: #dddddd;
              font-family: 'Alfa Slab One';
              letter-spacing: 6px;
              font-weight: 30;
              font-size: 25px;
              width: 100%;
              height: 100%;
            }

            .hasáb h3 {
              position: absolute;
            }
          `}
        </style>
    
      <body>
      <nav className="navbar">
        <a className="logo" href="index.html">
          <img className="logo-img" src="logo.png" alt="Logo" />
        </a>
        <span className="h1" data-text="BarberShop"></span>
      </nav>
      <div className="hasábok">
        <div className="hasáb" id="hair" onClick={() => toggleContent('hajvágás')}>
          <h1>Hajvágás</h1>
          <div className="blockhair">
            <a href="barber.html"></a>
          </div>
        </div>
        <div className="hasáb" id="beard" onClick={() => toggleContent('borotválás')}>
          <h1>Borotválás</h1>
          <div className="blockbeard">
            <a href="barber.html"></a>
          </div>
        </div>
      </div>
      
        </body>
    </div>
  );
};

export default Service;

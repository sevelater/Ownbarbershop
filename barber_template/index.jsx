import React from 'react';

const Service = () => {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BarberShop</title>
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
      </head>
      <navbar className="navbar">
        <a className="logo" href="index.html">
          <img className="logo-img" src="logo.png" alt="Logo" />
        </a>
        <span className="h1" data-text="BarberShop"></span>
      </navbar>
      <body>
      <nav className="navbar">
    <a className="logo" href="index.html">
      <img className="logo-img" src="logo.png" alt="Logo" />
    </a>
    <span className="h1" data-text="BarberShop"></span>
  </nav>
  <header>
    <h1>"Olyan mint egy délutáni sörözés"</h1>
    <p>- valami görög filozófus</p>
    <div className="headline"></div>
  </header>
  <section className="hasábok">
    <div className="hasáb" id="service">
      <a href="service.html">
        <h2>Szolgáltatások</h2>
      </a>
    </div>
    <div className="hasáb" id="barber">
      <a href="barber.html">
        <h2>Barberek</h2>
      </a>
    </div>
    <div className="hasáb" id="time">
      <a href="time.html">
        <h2>Időpontok</h2>
      </a>
    </div>
  </section>
  <section className="introduction">
    <div className="texts">
      <h4>Kis Történelem</h4>
      <p>
        j3ig3gr3guorgjougbn2ujn2eng2oginrgoirnefemfefgrogkjnergkorngrkoggergwrgknrgorngrognrg
        oringrokgnrgoierngroiignrg
        j3ig3gr3guorgjougbn2ujn2eng2oginrgoirnefemfefmgrogkjnergkorngrkoggergwrgknrgorngrognrg
        oringrokgnrgoierngroiignrg
        3ig3gr3guorgjougbn2ujn2eng
        grogkjnergkorngrkoggergwrgk
        oringrokgnrgoierngroiignrg
        j3ig3gr3guorgjougbn2ujn2en
        grogkjnergkorngrkoggergwrgk
        oringrokgnrgoierngroiignrg.
      </p>
    </div>
    <div className="images">
      <img id="top-image" src="introduction-shop.jpg" alt="Top Image" />
      <img id="bottom-image" src="sign.jpg" alt="Bottom Image" />
    </div>
  </section>
      </body>
    </html>
  );
};

export default Service;

import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="12345"
            title="Lenovo Legion Y5000"
            price={499}
            image="https://images-na.ssl-images-amazon.com/images/I/61p3lA4N3uL._SL1000_.jpg"
            rating={3}
          />
          <Product
            id="123456"
            title="Watch"
            price={21.97}
            image="https://images-na.ssl-images-amazon.com/images/I/919aFjwj5lL._UL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="123456"
            title="New Apple iPhone 12 (64GB) - Black"
            price={599}
            image="https://images-na.ssl-images-amazon.com/images/I/71uuDYxn3XL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id="123456"
            title="Apple iPhone 7 (32GB) - Black"
            price={399}
            image="https://images-na.ssl-images-amazon.com/images/I/41D9NDiSzjL._SL1024_.jpg"
            rating={4}
          />
          <Product
            id="123456"
            title="Samsung Galaxy S21 Ultra 5G (Phantom Black, 12GB, 256GB Storage) with No Cost EMI/Additional Exchange Offers"
            price={859}
            image="https://images-na.ssl-images-amazon.com/images/I/91BAitkzszL._SL1500_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="1234569"
            title="Sony Bravia 108 cm (43 inches) 4K Ultra HD Certified Android LED TV 43X7500H (Black) (2020 Model)"
            price={399}
            image="https://images-na.ssl-images-amazon.com/images/I/91pBoYjYgSL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

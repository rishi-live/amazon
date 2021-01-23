import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__left">
        {/* https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/JanArt/Teaser/Headers/lastday/xcm_banners_03_lastday_v1_1500x300_in-en.jpg.jpg */}
        {/* https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg */}
        <img
          className="checkout__ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout__title">Your shopping Cart</h2>
        </div>
      </div>

      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;

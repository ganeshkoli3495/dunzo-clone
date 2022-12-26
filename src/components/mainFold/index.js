import React from "react";
import { ORDER_CARD_DATA } from "../../Common/Data";
import { ITEM_TYPES } from "../../Common/Data";
import "./mainFold.css";
const MainFold = () => {
  return (
    <div className="mainfold">
      <div className="top-strip">
        <div className="max-width flex strip-inner">
          <div className="inner-left flex">
            <div className="paan-image-bg flex absolute-center">
              <img
                src="https://resources.dunzo.com/web-assets/prod/_next/static/images/paan-3514c1ca4be5af789addd127f4c24308.png"
                alt="paanImage"
                height={32}
                width={32}
                className="paan-image"
              />
            </div>
            <div className="order-text">
              Order Paan items, munchies and much more on our new Dunzo Mo app
            </div>
          </div>
          <div className="curser flex absolute-center strip-download">
            Download Dunzo Mo app now
            <div className="flex absolute-center curser">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-right"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                color="#35B379"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="9 6 15 12 9 18"></polyline>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="mainfold-main">
        <div className="mainfold-location flex max-width">
          <div className="mainfold-heading">
            Essentials delivered to your doorstep
          </div>
        </div>
        <div className="order-cards max-width flex">
          {ORDER_CARD_DATA.map((card) => {
            return (
              <div className="order-card-container">
                <img
                  src={card.banner}
                  alt={card.banner}
                  className="curser order-card-container"
                />
              </div>
            );
          })}
        </div>
        <div className="flex max-width items-cards">
          {ITEM_TYPES.map((item) => {
            return (
              <div className="curser item-card">
                <img
                  src={item.banner}
                  alt={item.banner}
                  className="item-card-banner"
                />
                <div>{item.title}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MainFold;

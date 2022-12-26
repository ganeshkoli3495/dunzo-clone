import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header-container">
      <div className="max-width header flex">
        <div className="header-left flex">
          <img
            src="https://resources.dunzo.com/web-assets/prod/_next/static/images/logo-7b2b540792556466133aea6e7c6ae513.png"
            alt="Dunzo"
            className="header-logo"
            height={28}
            width={122}
          />
          <div className="flex header-location absolute-center curser">
            <div className="flex absolute-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-map-pin"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                color="#00b37a"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <circle cx="12" cy="11" r="3"></circle>
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
              </svg>
            </div>
            <div className="location-text">Set Location</div>
            <div className="flex absolute-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-chevron-down"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                color="#00b37a"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
        </div>
        <div className="header-right flex">
          <div className="curser flex absolute-center hover-change">
            Dunzo for Partners
          </div>
          <div className="curser hover-change flex absolute-center">
            Business with Dunzo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-chevron-down"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              color="#000"
              className="absolute-center curser"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
          <div className="flex column absolute-center curser">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-search"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="10" cy="10" r="7"></circle>
              <line x1="21" y1="21" x2="15" y2="15"></line>
            </svg>
            <div className="header-icon-text"> Search</div>
          </div>
          <div className="flex column absolute-center curser">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-shopping-cart"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <circle cx="6" cy="19" r="2"></circle>
              <circle cx="17" cy="19" r="2"></circle>
              <path d="M17 17h-11v-14h-2"></path>
              <path d="M6 5l14 1l-1 7h-13"></path>
            </svg>
            <div className="header-icon-text"> Cart</div>
          </div>
          <div className="header-button flex absolute-center curser">
            Sign In
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

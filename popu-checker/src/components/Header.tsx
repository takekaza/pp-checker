import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="checker-ttl">
        <svg
          className="checker-ico"
          width="38"
          height="38"
          viewBox="0 0 38 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M26.7407 26.7407L26.7407 0L38 11.2593V38H38H11.2592L-1.14441e-05 26.7407L26.7407 26.7407H26.7407Z"
            fill="black"
          />
        </svg>
        <h1>人口チェッカー</h1>
      </div>
    </header>
  );
};

export default Header;

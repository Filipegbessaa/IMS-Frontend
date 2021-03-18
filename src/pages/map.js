import Head from "next/head";
import { injectIntl } from "react-intl";
import React, { useState } from "react";
import Navbar from "../patterns/Navbar";
import MobileToggledNavbar from "../components/MobileToggledNavbar";

import Map from "../patterns/Map";

function MapPage() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleShowMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <div>
      <Head>
        <link
          href="https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar showMobileMenu={handleShowMobileMenu} />
      <MobileToggledNavbar show={showMobileMenu} />
      <Map show={!showMobileMenu} />
    </div>
  );
}
export default injectIntl(MapPage);

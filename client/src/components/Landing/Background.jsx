import styles from "./Landing.module.css";
import React, { useEffect, useState } from "react";

import SVGM1 from "../../assets/landingImages/mobile/RectangleGrey.svg";
import SVGM2 from "../../assets/landingImages/mobile/RectangleBlue.svg";
import SVGTV1 from "../../assets/landingImages/tablet/vertical/TabletVertical1.svg";
import SVGTV2 from "../../assets/landingImages/tablet/vertical/TabletVertical2.svg";
import SVGTH1 from "../../assets/landingImages/tablet/horizontal/TabletHorizontal1.svg";
import SVGTH2 from "../../assets/landingImages/tablet/horizontal/TabletHorizontal2.svg";
import SVGD1 from "../../assets/landingImages/desktop/Desktop1.svg";
import SVGD2 from "../../assets/landingImages/desktop/Desktop2.svg";

const Background = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  let image1 = SVGM1;
  let image2 = SVGM2;
  if (windowWidth >= 768 && windowWidth < 1020) {
    image1 = SVGTV1;
    image2 = SVGTV2;
  } else if (windowWidth >= 1020 && windowWidth < 1199) {
    image1 = SVGTH1;
    image2 = SVGTH2;
  } else if (windowWidth >= 1200) {
    image1 = SVGD1;
    image2 = SVGD2;
  }

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div>
      <img src={`${image1}`} alt="line" className={styles.landingBgImage1} />
      <img src={`${image2}`} alt="line" className={styles.landingBgImage2} />
    </div>
  );
};

export default Background;

import React, { useEffect, useState } from "react";

import "./Cardcomp.css";
import { Parallax } from "react-scroll-parallax";

const Cardcomp = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    var card: HTMLElement | null = document.querySelector(".card");
    var cardTitle: HTMLElement | null = document.querySelector(".card-title");
    var cardSubtitle: HTMLElement | null =
      document.querySelector(".card-subtitle");
    var cardShine: HTMLElement | null = document.querySelector(".card-shine");
    var cardShadow: HTMLElement | null = document.querySelector(".card-shadow");
    var currentMousePos = { x: 0, y: 0 };
    var mouseFromCenter = { x: 0, y: 0 };

    var isMobile = window.matchMedia(
      "only screen and (min-width: 1000px)"
    ).matches;
    setIsMobile(isMobile);

    isMobile &&
      document.addEventListener("mousemove", function (event) {
        var wHeight = window.innerHeight;
        var wWidth = window.innerWidth;

        currentMousePos.x = event.screenX;
        currentMousePos.y = event.screenY;
        mouseFromCenter.x = currentMousePos.x - wWidth / 2;
        mouseFromCenter.y = currentMousePos.y - wHeight / 2;

        var around1 =
          -1 * (((currentMousePos.y * 100) / wHeight) * 0.2 - 10) + "deg";
        var around2 =
          1 * (((currentMousePos.x * 100) / wWidth) * 0.2 - 10) + "deg";
        var trans1 = ((currentMousePos.x * 100) / wHeight) * 0.3 + "px";
        var trans2 = ((currentMousePos.y * 100) / wHeight) * 0.3 + "px";
        var dy = event.screenY - wHeight / 2;
        var dx = event.screenX - wWidth / 2;
        var theta = Math.atan2(dy, dx);
        var angle = (theta * 180) / Math.PI - 90;
        var mousePositionX = (currentMousePos.x / wWidth) * 100;
        var mousePositionY = 50 + (currentMousePos.y / wHeight) * 10;

        cardShine!.style.background =
          "linear-gradient(" +
          angle +
          "deg, rgba(255,255,255," +
          (currentMousePos.y / wHeight) * 0.7 +
          ") 0%,rgba(255,255,255, 0) 80%)";

        card!.style.transform =
          "translate3d(" +
          trans1 +
          ", " +
          trans2 +
          ", 0) scale(1) rotateX(" +
          around1 +
          ") rotateY(" +
          around2 +
          ")";
        card!.style.backgroundPosition =
          mousePositionX + "%" + " " + (currentMousePos.y / wHeight) * 50 + "%";

        cardShadow!.style.transform =
          "scale(.9) translateX(" +
          (mouseFromCenter.x * -0.02 + 12) +
          "px) translateY(" +
          (mouseFromCenter.y * -0.02 + 12) +
          "px) scale(1.0) rotateY(" +
          (mouseFromCenter.x / 25) * 0.5 +
          "deg) rotateX(" +
          mouseFromCenter.y / -25 +
          "deg)";

        cardTitle!.style.transform =
          "translateX(" +
          (mouseFromCenter.x / 25) * 0.7 +
          "px) translateY(" +
          (mouseFromCenter.y / 25) * 1.65 +
          "px)";

        cardSubtitle!.style.transform =
          "translateX(" +
          (mouseFromCenter.x / 25) * 0.5 +
          "px) translateY(" +
          (mouseFromCenter.y / 25) * 1.15 +
          "px) translateZ(60px)";
      });
  }, []);
  return isMobile ? (
    <div className="wrap font-Poppins">
      <div className="card-shadow z-30"></div>
      <div className="card z-30" data-cursor-stick="#stick-title">
        <div className="card-front">
          <div className="card-title" id="stick-title">
            Me & Void
          </div>
          <div className="card-subtitle">In the Realm of Pixels and Logic</div>
          <div className="card-shine"></div>
        </div>
      </div>
    </div>
  ) : (
    <Parallax scale={[.8,1.3]}>
    <div className="wrap font-Poppins">
      <div className="card-shadow z-30"></div>
      <div className="card z-30" data-cursor-stick="#stick-title">
        <div className="card-front">
          <div className="card-title" id="stick-title">
            Me & Void
          </div>
          <div className="card-subtitle">In the Realm of Pixels and Logic</div>
          <div className="card-shine"></div>
        </div>
      </div>
    </div>
    </Parallax>
  );
};

export default Cardcomp;

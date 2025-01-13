import React, { useEffect, useRef } from "react";
import "./rose.css";
import Zdog from "zdog";
import anime from "animejs";
const Rose = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Extract Zdog modules
    const { Illustration, Ellipse, Rect, Shape, Group, Anchor } = Zdog;

    // Set up the illustration
    const illustration = new Illustration({
      element: canvasRef.current,
      dragRotate: true,
    });

    // Shadow under the star
    const shadow = new Ellipse({
      addTo: illustration,
      diameter: 100,
      stroke: false,
      fill: true,
      color: "hsla(45, 100%, 58%, 0.4)",
      translate: { x: 50, y: 100 },
      rotate: { x: Math.PI / 1.7 },
    });

    // Anchor for the star
    const starAnchor = new Anchor({
      addTo: illustration,
      translate: { y: 100 },
      rotate: { z: Math.PI / 10 },
    });

    // Group for the star
    const starGroup = new Group({
      addTo: starAnchor,
      translate: { x: -70, y: -170 },
    });

    // Star path
    new Shape({
      addTo: starGroup,
      path: [
        { x: 0, y: 45 },
        { x: 45, y: 45 },
        { x: 70, y: 0 },
        { x: 95, y: 45 },
        { x: 140, y: 45 },
        { x: 105, y: 80 },
        { x: 120, y: 130 },
        { x: 70, y: 105 },
        { x: 20, y: 130 },
        { x: 35, y: 80 },
        { x: 0, y: 45 },
      ],
      stroke: 40,
      color: "hsl(45, 100%, 58%)",
    });

    // Rectangle to fill the center of the star
    new Rect({
      addTo: starGroup,
      width: 40,
      height: 50,
      stroke: 40,
      translate: { x: 70, y: 70 },
      color: "hsl(45, 100%, 58%)",
    });

    // Eyes group
    const eyesGroup = new Group({
      addTo: starGroup,
      translate: { x: 70, y: 72.5, z: 20 },
    });

    // Eye circles
    const eye = new Ellipse({
      addTo: eyesGroup,
      diameter: 5,
      stroke: 15,
      translate: { x: -32.5 },
      color: "hsl(0, 0%, 0%)",
    });
    eye.copy({
      translate: { x: 32.5 },
    });

    // Left and right eye anchors
    const leftEyeAnchor = new Anchor({
      addTo: eyesGroup,
      translate: { x: -32.5, z: 0.5 },
    });
    const leftEye = new Ellipse({
      addTo: leftEyeAnchor,
      diameter: 1,
      stroke: 5,
      color: "hsl(0, 100%, 100%)",
      translate: { x: -3.5 },
    });

    const rightEyeAnchor = leftEyeAnchor.copyGraph({
      translate: { x: 32.5, z: 0.5 },
    });

    // Mouth anchor
    const mouthAnchor = new Anchor({
      addTo: starGroup,
      translate: { x: 70, y: 95, z: 20 },
      scale: 0.8,
    });

    // Mouth shape
    new Shape({
      addTo: mouthAnchor,
      path: [
        { x: -8, y: 0 },
        { x: 8, y: 0 },
        {
          arc: [
            { x: 4, y: 6 },
            { x: 0, y: 6 },
          ],
        },
        {
          arc: [
            { x: -4, y: 6 },
            { x: -8, y: 0 },
          ],
        },
      ],
      stroke: 10,
      color: "hsl(358, 100%, 65%)",
    });

    illustration.updateRenderGraph();

    // Star animation using Anime.js
    const starObject = {
      star: Math.PI / 10,
      shadow: 50,
      mouth: 0.8,
      eyes: 0,
    };

    const timeline = anime.timeline({
      duration: 1100,
      easing: "easeInOutQuart",
      direction: "alternate",
      loop: true,
      update: () => {
        starAnchor.rotate.z = starObject.star;
        shadow.translate.x = starObject.shadow;
        mouthAnchor.scale = starObject.mouth;
        leftEyeAnchor.rotate.z = starObject.eyes;
        rightEyeAnchor.rotate.z = starObject.eyes;

        illustration.updateRenderGraph();
      },
    });

    timeline.add({
      targets: starObject,
      star: -Math.PI / 10,
      easing: "easeInOutQuint",
    });

    timeline.add(
      {
        targets: starObject,
        shadow: -50,
      },
      "-=1100"
    );

    timeline.add(
      {
        targets: starObject,
        mouth: 1.2,
        duration: 300,
      },
      "-=800"
    );

    timeline.add(
      {
        targets: starObject,
        eyes: Math.PI / 2,
        duration: 900,
      },
      "-=1000"
    );

    return () => {
      timeline.pause();
    };
  }, []);
  return (
    <>
      <div className="container">
        <div className="glass"></div>
        <div className="thorns">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="glow"></div>
        <div className="rose-leaves">
          <div></div>
          <div></div>
        </div>
        <div className="rose-petals">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="sparkles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <canvas ref={canvasRef} width="500" height="500"></canvas>
    </>
  );
};

export default Rose;

import React from "react";
import "./works.scss";

const data = [
  {
    image: "assets/typeSorting.PNG",
    id: 1,
    link: "https://github.com/abedaarabi/forgeTypeAPI",
    icon: "assets/mobile.png",
    text: "BIM Platform that will allow you to visualize your BIM data from 3d or 2d and also append more than a model at the same time. the platform will help you to read the data by nice charts color it could also allow aggregating the BIM metadata from the model with our accepted parameters.",
  },
  {
    image: "assets/guideIt.png",
    id: 2,
    link: "https://github.com/HackYourFuture-CPH/Guide-IT",
    icon: "assets/mobile.png",
    text: "Guide IT - a tool to help newcomers decide their IT path. A collaboration between ReDI School and HackYourFuture - Copenhagen",
  },

  {
    image: "assets/IoT.PNG",
    id: 4,
    link: "https://github.com/HackYourFuture-CPH/Guide-IT",
    icon: "assets/mobile.png",
    text: " IoT platform with BIM 3D model will allow the user to interact with all the build sensors, it will give them a control to decide on the air level temperature and more ",
  },
];
function Works() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handelClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>Title</h2>
                  <p>{d.text}</p>
                  <span>
                    <a href={d.link}>Project Link</a>
                  </span>
                </div>
              </div>
              <div className="right">
                <img src={d.image} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handelClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handelClick("")}
      />
    </div>
  );
}

export default Works;

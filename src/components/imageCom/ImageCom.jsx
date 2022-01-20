import React from "react";
import "./imageCom.scss";

export const ImageCom = (props) => {
  return (
    <div>
      <img id="techImg" src={props.image} alt="displayImage" />
    </div>
  );
};

export default ImageCom;

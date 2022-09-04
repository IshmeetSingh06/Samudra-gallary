import React, { useEffect, useState } from "react";
import "./image.css";
import { AiFillHeart } from "react-icons/ai";
import reactImageSize from "react-image-size";

const Image = (props) => {
  const [fav, setFav] = useState(false);
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  const [fileName, setFileName] = useState("");

  const changeColor = () => {
    setFav(!fav);
  };

  useEffect(() => {
    const getDimentions = async () => {
      try {
        const { width, height } = await reactImageSize(props.img.src);
        const fullname = props.img.src;
        const filenameArr = fullname.split("/");
        const fullFileName = filenameArr[3].split(".");
        setFileName(fullFileName[0] + "." + fullFileName[2]);
        setWidth(width);
        setHeight(height);
      } catch (err) {
        console.log(err);
      }
    };
    getDimentions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="image-container">
      {fav ? (
        <AiFillHeart className="image-icon-fav" onClick={changeColor} />
      ) : (
        <AiFillHeart className="image-icon-nofav" onClick={changeColor} />
      )}
      <img
        src={props.img.src}
        alt="alt"
        height={height / 25}
        width={width / 25}
        className="pic"
      />
      <label className="text">{fileName}</label>
    </div>
  );
};

export default Image;

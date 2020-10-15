import React from "react";
import img from "../../assets/img/programmer.webp";

const ProfileImg = () => (
  <img
    className=" h-full w-full object-cover rounded-md"
    src={img}
    alt="portfolio img"
  />
);

export default ProfileImg;
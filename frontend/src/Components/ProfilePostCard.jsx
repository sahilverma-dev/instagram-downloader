import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const ProfilePostCard = ({ imgUrl, title, link }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg ">
      <a href={link}>
        <LazyLoadImage
          effect="blur"
          src={imgUrl}
          alt={title}
          className="w-full h-full"
        />
      </a>
      <button className="absolute opacity-0 hover:bg-red-600 hover:text-white group-hover:opacity-100 shadow-lg transition-all duration-20 ease-linear top-1 pa right-1 h-11 w-11 rounded-full text-red-600 bg-white cursor-pointer">
        <i className="fa fa-trash"></i>
      </button>
    </div>
  );
};

export default ProfilePostCard;

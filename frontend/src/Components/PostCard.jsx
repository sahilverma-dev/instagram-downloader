import React from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

const PostCard = ({ data, downloadData, isVideo, videoLink }) => {
  const {
    imgSrc,
    userSrc,
    userName,
    displayName,
    isVerified,
    isVideo1,
    videoLink1,
  } = data;
  const { link1, link2, link3 } = downloadData;
  return (
    <div className=" p-2 bg-white dark:bg-slate-900 rounded">
      <div
        className={`w-full rounded overflow-hidden relative  ${
          isVideo ? "aspect-[9/14]" : "aspect-square"
        }`}
      >
        {isVideo && (
          <a href={videoLink} target="_blank" rel="noreferrer">
            <i className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-7xl opacity-70 fa fa-play"></i>
          </a>
        )}
        {isVideo1 && (
          <a href={videoLink1} target="_blank" rel="noreferrer">
            <i className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-7xl opacity-70 fa fa-play"></i>
          </a>
        )}
        <LazyLoadImage
          effect="blur"
          src={imgSrc}
          alt={displayName}
          placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4">
        <a
          href={`https://instagram.com/${userName}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="flex gap-1">
            <LazyLoadImage
              src={userSrc}
              alt="asdfa"
              className="rounded-full h-12 w-auto aspect-square"
            />
            <div className="ml-1 dark:text-white">
              <div className="text-xl font-bold">{displayName}</div>
              <div className="flex">
                <p className="text-xs">@{userName}</p>
                {isVerified && (
                  <i className="fa fa-check p-1 bg-blue-500 aspect-square text-[8px] text-white rounded-full mx-1"></i>
                )}
              </div>
            </div>
          </div>
        </a>
        {videoLink || isVideo1 || videoLink1 ? (
          <div className="mt-4">
            <div className="flex items-center mt-4 justify-between gap-2">
              <a
                href={link1}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>640px
              </a>
              <a
                href={link2}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>750px
              </a>
              <a
                href={link3}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>1080px
              </a>
            </div>
            <a
              href={videoLink1 || videoLink}
              target="_blank"
              rel="noreferrer"
              className="block bg-blue-500 mt-2 w-full py-2 px-4 font-bold text-white rounded text-center"
            >
              <i className="fa fa-video mr-2"></i>Donload Video
            </a>
          </div>
        ) : (
          <>
            <div className="flex items-center mt-4 justify-between gap-2">
              <a
                href={link1}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>640px
              </a>
              <a
                href={link2}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>750px
              </a>
              <a
                href={link3}
                target="_blank"
                rel="noreferrer"
                className="bg-blue-500 w-full py-2 px-4 font-bold text-white rounded text-center"
              >
                <i className="fa fa-image mr-2"></i>1080px
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostCard;

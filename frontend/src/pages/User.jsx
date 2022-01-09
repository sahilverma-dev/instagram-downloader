import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { nFormatter } from "../utilities";
import Loading from "../Components/Loading";

const User = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { username } = useParams();
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios(`http://localhost:1234/user/${username}`);
      if (data) {
        setUserData(data);
        setIsLoading(false);
      }
    };
    getUserData();
  }, [username]);
  return (
    <div className="bg-white dark:bg-slate-800">
      {!isLoading ? (
        <main className="max-w-5xl mx-auto bg-gray-100 dark:bg-slate-900/70 dark:text-white p-2">
          <div className="mb-8">
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                <a
                  href={userData?.profilePic?.hd}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full border-4 p-1 border-pink-700"
                    src={userData?.profilePic?.hd}
                    alt={userData?.fullName}
                  />
                </a>
              </div>

              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {userData?.username}
                  </h2>
                  {userData?.isVerified && (
                    <i className="fa fa-check p-1 bg-blue-500 aspect-square text-[8px] text-white rounded-full mx-1"></i>
                  )}
                  <a
                    href={`https://www.instagram.com/${userData?.username}/`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-blue-500 px-2 py-1 ml-2 text-white font-semibold text-sm rounded block text-center sm:inline-block "
                  >
                    Follow
                  </a>
                </div>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold mr-1">
                      {userData?.posts?.total.toLocaleString()}
                    </span>
                    posts
                  </li>

                  <li>
                    <span className="font-semibold mr-1">
                      {nFormatter(userData?.following)}
                    </span>
                    followers
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      {nFormatter(userData?.follows)}
                    </span>
                    following
                  </li>
                </ul>

                <div className="hidden md:block">
                  <h1 className="font-semibold">{userData?.fullName}</h1>
                  <span className="font-thin">{userData?.category}</span>
                  <p>{userData?.bio}</p>
                  <a
                    href={userData?.externalURL}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-blue-800 dark:text-blue-500"
                  >
                    {userData?.externalURL}
                  </a>
                </div>
              </div>

              <div className="md:hidden text-sm my-2">
                <h1 className="font-semibold">{userData?.fullName}</h1>
                <p>{userData?.bio}</p>
                <a
                  href={userData?.externalURL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-blue-800 dark:text-blue-500"
                >
                  {userData?.externalURL}
                </a>
              </div>
            </header>
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 dark:text-gray-300 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {userData?.posts?.toLocaleString()}
                </span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {nFormatter(userData?.following)}
                </span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {nFormatter(userData?.follows)}
                </span>
                following
              </li>
            </ul>
            <div className="px-px md:px-3">
              <div className="grid grid-cols-3 gap-4">
                {userData?.posts?.content?.map((item, index) => (
                  <div
                    className="relative group aspect-square outline-hidden "
                    key={index}
                  >
                    <Link to={`/p/${item?.id}`}>
                      {item?.isVideo && (
                        <div className="absolute top-2 right-2 z-[1]">
                          <i className="fa fa-play"></i>
                        </div>
                      )}
                      {item?.isCollection && (
                        <div className="absolute top-2 right-2 z-[1]">
                          <svg
                            aria-label="Carousel"
                            className="_8-yf5 "
                            color="#ffffff"
                            fill="#ffffff"
                            height="22"
                            role="img"
                            viewBox="0 0 48 48"
                            width="22"
                          >
                            <path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                          </svg>
                        </div>
                      )}
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer h-full w-full bg-black/60">
                        <div className="flex h-full justify-center items-center">
                          <div className="flex flex-col md:flex-row md:gap-6">
                            <div>
                              <i className="fa fa-heart"></i>
                              <span className="ml-2">{item?.likes}</span>
                            </div>
                            <div>
                              <i className="fa fa-comment"></i>
                              <span className="ml-2">{item?.comments}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <LazyLoadImage
                        effect="blur"
                        src={item?.displayUrl}
                        placeholderSrc="https://www.slntechnologies.com/wp-content/uploads/2017/08/ef3-placeholder-image.jpg"
                        alt={item?.id}
                        className="h-full w-full rounded object-cover"
                      />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default User;

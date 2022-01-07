import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { LazyLoadImage } from "react-lazy-load-image-component";
import { nFormatter } from "../utilities";
import Loading from "../Components/Loading";

const User = () => {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const getUserData = async () => {
      const { data } = await axios(`http://localhost:1234/?user=${id}`);
      if (data) {
        setUserData(data);
        setIsLoading(false);
        console.log(data);
      }
    };
    getUserData();
  }, []);
  return (
    <div className="bg-white dark:bg-slate-800">
      {!isLoading ? (
        <main className="max-w-5xl mx-auto bg-gray-100 dark:bg-slate-900/70 dark:text-white p-2">
          <div className="mb-8">
            <header className="flex flex-wrap items-center p-4 md:py-8">
              <div className="md:w-3/12 md:ml-16">
                <a href={userData?.json?.profile_pic_url_hd} target="_blank">
                  <img
                    className="w-24 h-24 md:w-44 md:h-44 object-cover rounded-full border-4 p-1 border-pink-700"
                    src={userData?.userImgSrc}
                    alt={userData?.json.full_name}
                  />
                </a>
              </div>

              <div className="w-8/12 md:w-7/12 ml-4">
                <div className="md:flex md:flex-wrap md:items-center mb-4">
                  <h2 className="text-3xl inline-block font-light md:mr-2 mb-2 sm:mb-0">
                    {userData?.json.username}
                  </h2>
                  {userData?.json.is_verified && (
                    <i className="fa fa-check p-1 bg-blue-500 aspect-square text-[8px] text-white rounded-full mx-1"></i>
                  )}
                  <a
                    href={`https://www.instagram.com/${userData?.json.username}/`}
                    target="_blank"
                    className="bg-blue-500 px-2 py-1 ml-2 text-white font-semibold text-sm rounded block text-center sm:inline-block "
                  >
                    Follow
                  </a>
                </div>

                <ul className="hidden md:flex space-x-8 mb-4">
                  <li>
                    <span className="font-semibold mr-1">
                      {userData?.json.edge_owner_to_timeline_media?.count.toLocaleString()}
                    </span>
                    posts
                  </li>

                  <li>
                    <span className="font-semibold mr-1">
                      {nFormatter(userData?.json.edge_followed_by?.count)}
                    </span>
                    followers
                  </li>
                  <li>
                    <span className="font-semibold mr-1">
                      {nFormatter(userData?.json.edge_follow?.count)}
                    </span>
                    following
                  </li>
                </ul>

                <div className="hidden md:block">
                  <h1 className="font-semibold">{userData?.json.full_name}</h1>
                  <span className="font-thin">
                    {userData?.json.category_name}
                  </span>
                  <p>{userData?.json.biography}</p>
                  <a
                    href={userData?.json.external_url}
                    target="_blank"
                    className="font-semibold text-blue-800 dark:text-blue-500"
                  >
                    {userData?.json.external_url}
                  </a>
                </div>
              </div>

              <div className="md:hidden text-sm my-2">
                <h1 className="font-semibold">{userData?.json.full_name}</h1>
                <p>{userData?.json.biography}</p>
                <a
                  href={userData?.json.external_url}
                  target="_blank"
                  className="font-semibold text-blue-800 dark:text-blue-500"
                >
                  {userData?.json.external_url}
                </a>
              </div>
            </header>
            <ul
              className="flex md:hidden justify-around space-x-8 border-t 
                text-center p-2 text-gray-600 dark:text-gray-300 leading-snug text-sm"
            >
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {userData?.json.edge_owner_to_timeline_media?.count.toLocaleString()}
                </span>
                posts
              </li>

              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {nFormatter(userData?.json.edge_followed_by?.count)}
                </span>
                followers
              </li>
              <li>
                <span className="font-semibold text-gray-800 dark:text-gray-200 block">
                  {nFormatter(userData?.json.edge_follow?.count)}
                </span>
                following
              </li>
            </ul>
            <div className="px-px md:px-3">
              <div className="grid grid-cols-3 gap-4">
                {userData?.allImages.map((item, index) => (
                  <div className="aspect-square outline-hidden " key={index}>
                    <Link to={`/p/${item?.id}`}>
                      <LazyLoadImage
                        src={item?.src}
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

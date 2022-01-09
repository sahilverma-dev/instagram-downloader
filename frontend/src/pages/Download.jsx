import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

import PostCard from "../Components/PostCard";
import Loading from "../Components/Loading";

const Download = () => {
  const [photoData, setPhotoData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // const user = useContext(AuthProvider);
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios(`http://localhost:1234/post/${id}`);
      if (data) {
        setPhotoData(data);
        setLoading(false);
      }
      if (!data) setError(true);
    };
    getData();
  }, [id]);
  return (
    <div className="min-h-screen p-2 dark:bg-slate-600 max-w-7xl rounded mx-auto">
      {loading && !error ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {photoData?.allImages && !error ? (
            photoData?.allImages?.map((item, index) => (
              <PostCard
                key={index}
                data={{
                  imgSrc: item?.displayUrl,
                  userSrc: photoData?.user?.profilePic,
                  userName: photoData?.user?.username,
                  displayName: photoData?.user?.fullName,
                  isVerified: photoData?.user.isDerified,
                  isVideo1: item?.isVideo,
                  videoLink1: item?.video_url,
                }}
                isVideo={photoData?.isVideo}
                downloadData={{
                  link1: item?.resolutions[0]?.src,
                  link2: item?.resolutions[1]?.src,
                  link3: item?.resolutions[2]?.src,
                }}
                videoLink={photoData?.videoUrl}
              />
            ))
          ) : (
            <PostCard
              data={{
                imgSrc: photoData?.mainContent.displayUrl,
                userSrc: photoData?.user?.profilePic,
                userName: photoData?.user?.username,
                isVerified: photoData?.user?.isVerified,
                displayName: photoData?.user?.fullName,
              }}
              isVideo={photoData?.isVideo}
              downloadData={{
                link1: photoData?.mainContent?.resolutions[0]?.src,
                link2: photoData?.mainContent?.resolutions[1]?.src,
                link3: photoData?.mainContent?.resolutions[2]?.src,
              }}
              videoLink={photoData?.videoUrl}
            />
          )}
        </div>
      )}
      {error && <div>error</div>}
    </div>
  );
};

export default Download;

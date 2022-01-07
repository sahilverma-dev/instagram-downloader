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
      const { data } = await axios(`http://localhost:1234?id=${id}`);
      if (data) {
        setPhotoData(data);
        setLoading(false);
      }
      if (!data) setError(true);
      console.log(data);
    };
    getData();
  }, []);
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
                  imgSrc: item?.src,
                  userSrc: photoData?.userSrc,
                  userName: photoData?.owner?.username,
                  displayName: photoData?.owner.full_name,
                  isVerified: photoData?.owner.is_verified,
                  isVideo1: item?.isVideo,
                  videoLink1: item?.video_url,
                }}
                isVideo={photoData?.isVideo}
                downloadData={{
                  link1: item?.downloadImages[0]?.src,
                  link2: item?.downloadImages[1]?.src,
                  link3: item?.downloadImages[2]?.src,
                }}
                videoLink={photoData?.videoUrl}
              />
            ))
          ) : (
            <PostCard
              data={{
                imgSrc: photoData?.imgSrc,
                userSrc: photoData?.userSrc,
                userName: photoData?.owner?.username,
                isVerified: photoData?.owner.is_verified,
                displayName: photoData?.owner.full_name,
              }}
              isVideo={photoData?.isVideo}
              downloadData={{
                link1: photoData?.singleImage[0]?.src,
                link2: photoData?.singleImage[1]?.src,
                link3: photoData?.singleImage[2]?.src,
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

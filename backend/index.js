const request = require("request");
const express = require("express");
const imageToBase64 = require("image-to-base64");

const cors = require("cors");
const port = 1234;
const app = express();

app.listen(port);

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
console.clear();

const getBase64 = async (link) => {
  const response = await imageToBase64(link);
  return `data:image/jpeg;base64,${response}`;
};

console.log(`I m running in http://localhost:${port}`);

app.get("/", (req, res) => {
  const { id, user } = req?.query;
  if (id) {
    url = `https://www.instagram.com/p/${id}/?__a=1`;
    request(url, (err, response, html) => {
      if (!err) {
        const json = JSON.parse(html)?.graphql?.shortcode_media;
        const promiseArray = json?.edge_sidecar_to_children?.edges?.map(
          async (item) => {
            return {
              src: await getBase64(item?.node?.display_url),
              id: item?.node?.shortcode,
              isVideo: item?.node.is_video,
              downloadImages: item?.node?.display_resources,
              video_url: item?.node?.video_url,
            };
          }
        );
        let allImages;
        if (promiseArray) allImages = Promise.all(promiseArray);
        (async () => {
          res.send({
            imgSrc: await getBase64(json?.display_url),
            userSrc: await getBase64(json?.owner?.profile_pic_url),
            displayImg: json.display_resources,
            isVideo: json.is_video,
            owner: json.owner,
            singleImage: json?.display_resources,
            allImages: await allImages,
            caption: json.edge_media_to_caption?.edges[0].node.text,
            videoUrl: json?.video_url,
            thumbnailSrc: json?.thumbnail_src,
          });
        })();
      }
    });
  }
  if (user) {
    url = `https://www.instagram.com/${user}/?__a=1`;
    request(url, (err, response, html) => {
      if (!err) {
        const json = JSON.parse(html)?.graphql?.user;
        const promiseArray = json?.edge_owner_to_timeline_media.edges?.map(
          async (item) => {
            return {
              src: await getBase64(item?.node?.display_url),
              id: item?.node?.shortcode,
              isVideo: item?.node.is_video,
              video_url: item?.node?.video_url,
            };
          }
        );
        const allImages = Promise.all(promiseArray);
        (async () => {
          res.send({
            userImgSrc: await getBase64(json?.profile_pic_url),
            json,
            allImages: await allImages,
          });
        })();
      }
    });
  }
  if (!id && !user) {
    res?.send("Sorry buddy! ID is required.");
  }
});

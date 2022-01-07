export const instaPostId = (url) => {
  const regExp = /(?:https?:\/\/www\.)?instagram\.com\S*?\/p\/(\w{11})\/?/;

  if (url.match(regExp)) return url.match(regExp)[1];
  if (!url.match(regExp)) return "!ERROR";
};
export const instaReelId = (url) => {
  const regExp = /(?:https?:\/\/www\.)?instagram\.com\S*?\/reel\/(\w{11})\/?/;

  if (url.match(regExp)) return url.match(regExp)[1];
  if (!url.match(regExp)) return "!ERROR";
};

export const nFormatter = (num, digits) => {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "m" },
    { value: 1e9, symbol: "g" },
    { value: 1e12, symbol: "t" },
    { value: 1e15, symbol: "p" },
    { value: 1e18, symbol: "e" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + item.symbol
    : "0";
};

export const instaPostAPI = (url) =>
  `https://api.instagram.com/oembed/?url=${url}`;

export const validURL = (str) => {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
};

export const imgbbApi = (url) =>
  `https://api.imgbb.com/1/upload?expiration=600&key=4f4de902f03dc7b666769186181ff990"--form"image=${url}`;

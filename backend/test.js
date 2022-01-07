const request = require("request");
const imageBase64 = require("image-to-base64");

console.clear();
console.log("I m running.");
const getBase64 = async (link) => {
  const response = await imageBase64(link);
  return response;
};

(async () => {
  console.log(
    await getBase64(
      "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/e35/188161929_491869235393247_4058158183338408682_n.jpg?_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=103&_nc_ohc=dZbn5jy3zLgAX8qznNx&edm=AABBvjUBAAAA&ccb=7-4&oh=00_AT9MudZfo6015LzMvhHXM10T2tgLjWYkFtH0cLwOhZOSYw&oe=61D930EC&_nc_sid=83d603"
    )
  );
})();

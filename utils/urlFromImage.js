module.exports = {};

const cloudName = process.env.VITE_CLOUD_NAME || "ddl3gn9nh";

const getS3Url = ({
  signature = "insecure",
  options = "",
  key,
  bucket,
  extension = "jpg",
}) => {
  const s3address = `s3://${bucket}/${key}`;
  const url = `${
    process.env.VITE_IMGPROXY_URL
  }/${signature}/${options}/${Buffer.from(s3address).toString(
    "base64"
  )}.${extension}`;
  return url;
};

module.exports.urlFromImage = (image) => {
  let url = "";
  if (image === undefined) {
    return url;
  }
  if (image.type === "s3Image") {
    const options = [
      "quality:80",
      "width:1200",
      "height:628",
      "resizing_type:fill",
      "enlarge:1",
      "gravity:sm",
      "extend:1",
    ];

    url = getS3Url({
      options: options.join("/"),
      key: image.s3Key,
      bucket: image.s3Bucket,
      extension: "png",
    });
  } else {
    url = `https://res.cloudinary.com/${cloudName}/image/upload/f_auto/q_auto:good/c_fill,h_628,w_1200/${image.cloudinaryPublicId}`;
  }
  return url;
};

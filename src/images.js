const images = {};

const importAll = (requireContext) => {
  requireContext.keys().forEach((key) => {
    const imageName = key.replace("./", "").replace(".jpg", ""); 
    images[imageName] = requireContext(key); 
  });
};

importAll(require.context("./images", false, /\.(png|jpe?g|svg)$/));

export default images;

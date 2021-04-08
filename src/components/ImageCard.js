import ImageDetails from "./ImageDetails";
import imgStyle from "./ImageCard.module.css";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(",");

  const onClick = (action) => {
    if (action === 1) {
      window.open(image.pageURL);
    } else {
      window.open(image.largeImageURL);
    }
  };

  return (
    <div
      onClick={() => onClick(1)}
      className="max-w-sm rounded overflow-hidden shadow-md hover:bg-gray-100 hover:shadow-xl"
    >
      <div className={imgStyle.imgContainer}>
        <img
          onClick={() => onClick(2)}
          src={image.webformatURL}
          alt=""
          className={imgStyle.imgFocus}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-purple-500 text-xl mb-2">
          Photo by {image.user}
        </div>
        <ImageDetails image={image} />
      </div>
      <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;

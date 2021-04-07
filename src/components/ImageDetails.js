const ImageDetails = ({ image }) => {
  return (
    <ul>
      <li>
        <i className="far fa-eye"></i> <strong>Views: </strong>
        {image.views}
      </li>
      <li>
        <i className="fas fa-download"></i> <strong>Downloads: </strong>
        {image.downloads}
      </li>
      <li>
        <i className="far fa-thumbs-up"></i> <strong>Likes: </strong>
        {image.likes}
      </li>
      <li>
        <i className="far fa-star"></i> <strong>Favorites: </strong>
        {image.favorites}
      </li>
      <li>
        <i className="far fa-comments"></i> <strong>Comments: </strong>
        {image.comments}
      </li>
    </ul>
  );
};

export default ImageDetails;

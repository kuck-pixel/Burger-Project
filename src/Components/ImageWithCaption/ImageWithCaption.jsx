function ImageWithCaption(props) {
  return (
    <div className="image-with-caption">
      <img src={props.src} alt="" />
      <p>{props.caption}</p>
    </div>
  );
}

export default ImageWithCaption;

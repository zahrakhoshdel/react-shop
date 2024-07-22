import classes from "./BannerImage.module.css";

const BannerImage = (props) => {
  return (
    <div
      className={`${classes["banner-wrapper"]} ${
        props.className ? props.className : classes["banner-image"]
      }`}
    >
      <a href="/">
        <img src={props.image} alt="banner-image" />
      </a>
    </div>
  );
};

export default BannerImage;

import classes from "./CircleButton.module.css";

const CircleButton = ({ icon, iconAlt }) => {
  return (
    <div className={classes["button-container"]}>
      <div className={classes["button-circle"]}>
        <img src={icon} alt={iconAlt} />
      </div>
    </div>
  );
};

export default CircleButton;

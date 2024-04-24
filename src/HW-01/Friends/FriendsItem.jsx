import { PropTypes } from "prop-types";
import css from "./Friends.module.css";

export default function FriendsItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <div className={css.status}>
        <span className={isOnline ? css.statusGreen : css.statusRed} />
      </div>
      <img className={css.avatar} src={avatar} alt="аватар друга" width="64" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

FriendsItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

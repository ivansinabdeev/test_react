import { PropTypes } from "prop-types";
import css from "./Profile.module.css";

export default function Profile({
  avatar,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={name} className={css.avatar} width="64" />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>

        <ul className={css.stats}>
          <li className={css.item}>
            <span className={css.label}>Followers</span>
            <span className={css.quantity}>{followers}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Views</span>
            <span className={css.quantity}>{views}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Likes</span>
            <span className={css.quantity}>{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
Profile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
};

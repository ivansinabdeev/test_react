import { PropTypes } from "prop-types";
import FriendsItem from "./FriendsItem";
import css from "./Friends.module.css";

export default function Friends({ friends }) {
  return (
    <div className={css.section}>
      <ul className={css.friendList}>
        {friends.map((friend) => (
          <FriendsItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
  friends: PropTypes.array,
};

import { PropTypes } from "prop-types";
import css from "./Statistics.module.css";

export default function Statistics({ title, stats }) {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.list}>
        {stats.map((stat) => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
  stats: PropTypes.array,
};

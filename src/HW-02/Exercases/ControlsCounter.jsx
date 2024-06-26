import css from "./Exercases.module.css";

const Controls = ({ onIncrement, onDecrement }) => (
  <div className={css.buttonsList}>
    <button type="button" onClick={onIncrement}>
      +1
    </button>
    <button type="button" onClick={onDecrement}>
      -1
    </button>
  </div>
);

export default Controls;

import { Component } from "react";
import css from "./Exercases.module.css";

class Counter extends Component {
  state = {
    value: 5,
  };

  handleIncrement = () => {
    this.setState({
      value: 10,
    });

    console.log("Увеличили");
    // const target = event.target; // раньше надо было сохранять в асинхронном ЖС, щас без этого работает
    // setTimeout(() => {
    //   console.log("❗ ~ Counter ~ event:", event.target);
    // }, 1000);
  };
  handleDecrement = () => {
    console.log("Уменьшили");
  };

  render() {
    return (
      <div>
        <span className={css.counter}>{this.state.value}</span>
        <div className={css.buttonsList}>
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;

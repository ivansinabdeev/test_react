import { Component } from "react";
import { PropTypes } from "prop-types";
import Controls from "./ControlsCounter";
import css from "./Exercases.module.css";

class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  // handleIncrement = () => {
  //   this.setState({
  //     value: 10, // работает если хотим записать что-то новое (перезаписать)
  //   }); // передаём обьект
  // handleIncrement = () => {
  //   this.setState((prevState) => {
  //     return {
  //       value: prevState.value + 1, // изменять состояние от предыдущего
  //     }; // передаём функцию
  //   });
  handleIncrement = () => {
    this.setState((prevState) => ({
      value: prevState.value + 1, // изменять состояние от предыдущего
      // передаём функцию (без return)
    }));

    console.log("Увеличили");
    // const target = event.target; // раньше надо было сохранять в асинхронном ЖС, щас без этого работает
    // setTimeout(() => {
    //   console.log("❗ ~ Counter ~ event:", event.target);
    // }, 1000);
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      value: prevState.value - 1, // изменять состояние от предыдущего
      // передаём функцию (без return)
    }));
    console.log("Уменьшили");
  };

  render() {
    return (
      <div>
        <span className={css.counter}>{this.state.value}</span>
        {/* <div className={css.buttonsList}>
          <button type="button" onClick={this.handleIncrement}>
            +1
          </button>
          <button type="button" onClick={this.handleDecrement}>
            -1
          </button>
        </div> */}
        <Controls />
      </div>
    );
  }
}
Counter.propTypes = {
  initialValue: PropTypes.number,
};

export default Counter;

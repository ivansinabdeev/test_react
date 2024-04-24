import PropTypes from "prop-types";
import css from "./Transactions.module.css";

export default function Transactions({ type, amount, currency }) {
  return (
    <>
      <table className={css.transactionHistory}>
        <tbody>
          <tr>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

Transactions.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

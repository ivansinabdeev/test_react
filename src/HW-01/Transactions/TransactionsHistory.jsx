import PropTypes from "prop-types";
import Transactions from "./Transactions";
import css from "./Transactions.module.css";

export default function TransactionHistory({ items }) {
  return (
    <div className={css.section}>
      <table className={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.title}>Type</th>
            <th className={css.title}>Amount</th>
            <th className={css.title}>Currency</th>
          </tr>
        </thead>
        <tbody className={css.tbody}>
          {items.map((item) => (
            <tr key={item.id}>
              <td className={css.data}>
                <Transactions type={item.type} />
              </td>

              <td className={css.data}>
                <Transactions amount={item.amount} />
              </td>

              <td className={css.data}>
                <Transactions currency={item.currency} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array,
};

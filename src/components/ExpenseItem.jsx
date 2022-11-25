import "./expenseItem.css";
import { ExpenseDate } from "./ExpenseDate";

export function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item_description">
        <h2>{props.title}</h2>

        <div className="expense-item_price">Rs{props.amount}</div>
      </div>
    </div>
  );
}

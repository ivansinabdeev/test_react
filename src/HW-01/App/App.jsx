import "./App.css";
import Profile from "../Profile/Profile";
import Statistics from "../Statistics/Statistics";
import Friends from "../Friends/Friends";
import TransactionHistory from "../Transactions/TransactionsHistory";

// import data

import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";

function App() {
  return (
    <>
      <Profile
        avatar={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />
      <Statistics title="my statistics:" stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

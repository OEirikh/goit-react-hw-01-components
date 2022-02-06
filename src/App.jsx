import {
  username,
  tag,
  location,
  avatar,
  stats,
} from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/ friends.json';
import transactions from './components/TransactionHistory/transactions.json';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statiatics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

function App() {
  return (
    <div>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload Stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;

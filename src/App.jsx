import React from 'react';
import Profile from './components/profile/Profile';
import FriendList from './components/friendlist/FriendList';
import TransactionHistory from './components/transactionhistory/TransactionHistory';

import userData from './components/profile/userData.json';
import friends from './components/friendlist/friends.json';
import transactions from './components/transactionhistory/transactions.json';

import './App.css';

const App = () => {
  return (
    <>
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />  
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;

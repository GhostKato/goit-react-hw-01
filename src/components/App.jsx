import React from 'react';
import Profile from './Profile/Profile';
import FriendList from './Friendlist/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

import userData from '../assets/userData.json';
import friends from '../assets/friends.json';
import transactions from '../assets/transactions.json';

import styles from './App.module.css';

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

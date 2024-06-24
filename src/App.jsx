import React from 'react';
import Profile from './components/profile/Profile';
import FriendList from './components/friendlist/FriendList';

import userData from './components/profile/userData.json';
import friends from './components/friendlist/friends.json';

import './App.css';

export function App() {
  return (
    <div className="App">
      <Profile
        avatar={userData.avatar}
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        followers={userData.stats.followers}
        views={userData.stats.views}
        likes={userData.stats.likes}
      />      
    </div>
  );
}

export function App2() {
  return (
    <div className="App">
      <FriendList friends={friends} />
    </div>
  );
}
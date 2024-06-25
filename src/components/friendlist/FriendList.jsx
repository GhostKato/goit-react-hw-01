import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from './FriendListItem';


const FriendList = ({ friends }) => {
  return (
    <ul className={styles['friend-list']}>
      {friends.map(friend => (
        <li className={styles['friend-item']} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
};

export default FriendList;

import React from 'react';
import styles from './FriendListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    color: isOnline ? 'green' : 'red'
  };

  return (
    <div className={styles['friend-item']}>
      <img className={styles['friend-img']} src={avatar} alt="Avatar" width="100" />
      <p className={styles['friend-name']}>{name}</p>
      <p style={statusStyle}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
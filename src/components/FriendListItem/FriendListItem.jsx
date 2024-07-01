import React from 'react';
import styles from './FriendListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusStyle = {
    color: isOnline ? 'green' : 'red'
  };

  return (
    <div className={styles.item}>
      <img className={styles.img} src={avatar} alt="Avatar" width="100" />
      <p className={styles.name}>{name}</p>
      <p style={statusStyle}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
import React from 'react';
import styles from './Profile.module.css';


const Profile = ({ avatar, username, tag, location, followers, views, likes }) => (
  <div className={styles.container}>
    <div className={styles.description}>
      <img className={styles.avatar}
        src={avatar}
        alt="User avatar"
      />
      <p className={styles.name}>{username}</p>
      <p className={styles.p}>@{tag}</p>
      <p className={styles.p}>{location}</p>
    </div>

    <ul className={styles.list}>
      <li className={styles.item}>
        <span className={styles.text}>Followers</span>
        <span className={styles.num}>{followers}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Views</span>
        <span className={styles.num}>{views}</span>
      </li>
      <li className={styles.item}>
        <span className={styles.text}>Likes</span>
        <span className={styles.num}>{likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;



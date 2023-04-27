import React from 'react';
import styles from './HomePage.module.css';
function Picture(props: any) {
  return (
    <>
      <h1 className={styles.h1}>{props.title}</h1>
      <img src="./JoelHiltonHeadshot(1).jpg" alt="JoelHilton"></img>
    </>
  );
}

export default Picture;

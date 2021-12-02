import React from 'react';
import styles from '../../Users/Users.module.css';
import preloader from '../../../assets/images/preloader.svg';

const Preloader: React.FC = () => {
  return (
    <>
      <img className={styles.preloader} src={preloader} alt='is loading...' />
    </>
  );
};

export default Preloader;

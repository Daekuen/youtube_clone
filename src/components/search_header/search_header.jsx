import React from 'react';
import styles from './search_header.module.css';


const SearchHeader = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="../img/logo.png" alt="youtube logo img" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input className={styles.input} type="search" placeholder='Search...'/>
      <button className={styles.button} type='submit'>
        <img className={styles.buttonImg} src="../img/search.png" alt="search img" />
      </button>
    </header>
  )
}

export default SearchHeader;
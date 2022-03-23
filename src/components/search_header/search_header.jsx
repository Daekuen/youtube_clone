import React from 'react';
import styles from './search_header.module.css';


const SearchHeader = ( {onSearch} ) => {

  const inputRef = React.useRef();

  const onSubmit = (event) =>{
    event.preventDefault()
    const value = inputRef.current.value;
    console.log(value)
    onSearch(value)
    inputRef.current.value = '';
  }

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="../img/logo.png" alt="youtube logo img" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <form className={styles.form} onSubmit={onSubmit}>
        <input className={styles.input} type="search" placeholder='Search...' ref={inputRef} />
        <button className={styles.button} type='submit'>
          <img className={styles.buttonImg} src="../img/search.png" alt="search img" />
        </button>
      </form>
    </header>
  )
}

export default SearchHeader;
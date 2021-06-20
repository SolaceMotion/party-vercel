import SearchRounded from '@material-ui/icons/SearchRounded';
import styles from './search-input.module.css';

export default function SearchInput({ ...rest }) {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
}

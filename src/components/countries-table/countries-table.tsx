import styles from './countries-table.module.css';
import Link from 'next/link';

const orderBy = (countries: any[], direction?: string) => {
  if (direction === 'asc') {
    return [...countries].sort((a, b) => (a.population > b.population ? 1 : -1));
  } else if (direction === 'desc') {
    return [...countries].sort((a, b) => (a.population > b.population ? -1 : 1));
  }
  return countries;
};

/* const setValueAndDirection = value => {}; */

const CountriesTable = ({ parties }: { parties: Array<any> }) => {
  /*   const orderedCountries = orderBy(countries, 'asc'); */

  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div>Party</div>
        </button>

        <button className={styles.heading_population}>
          <div>Members</div>
        </button>
      </div>

      {parties.map(({ party, members }, index) => (
        <Link href={`/party/${party}`} key={index}>
          <div className={styles.row}>
            <div className={styles.name}>{party}</div>

            <div className={styles.members}>{members}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;

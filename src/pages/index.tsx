import Layout from '../components/Layout/layout';
import styles from '../styles/Home.module.css';
import SearchInput from '../components/search-input/search-input';
import CountriesTable from '../components/countries-table/countries-table';

import { GetServerSideProps } from 'next';

export default function Home({ data }: { data: any }) {
  console.log;
  return (
    <Layout className={styles.counts}>
      Found {data.length} parties <SearchInput placeholder="Filter by Name or regions served" />
      <CountriesTable parties={data} />
    </Layout>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://agile-lowlands-27742.herokuapp.com/api');
  const data = await res.json();
  return {
    props: { data },
  };
};

import Layout from '../../components/Layout/layout';
import CountriesTableId from '../../components/countries-table/countries-table-id';

const getParty = async (name: string) => {
  const res = await fetch(
    `https://agile-lowlands-27742.herokuapp.com/api/search?party=${encodeURIComponent(name)}`
  );
  const data = res.json();
  return data;
};

const Party = ({ partyProp }: { partyProp: any[] }) => {
  const [party] = partyProp;
  return (
    <Layout>
      <CountriesTableId data={party} /* style={{ display: 'flex' }} */ />
    </Layout>
  );
};

export default Party;

export const getStaticPaths = async () => {
  const res = await fetch('https://agile-lowlands-27742.herokuapp.com/api');
  const data: any[] = await res.json();

  const paths = data.map(({ party }) => {
    return {
      params: {
        id: party,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  const partyProp = await getParty(params.id);
  return {
    props: {
      partyProp,
    },
  };
};

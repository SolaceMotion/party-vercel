type Data = {
  party: string;
  members: number;
  regions_served: string;
  date: string;
};

const CountriesTableId = ({ data, ...rest }: { data: Data }) => {
  console.log(data);
  const { party, members, regions_served, date } = data;
  return (
    <div {...rest}>
      {party} {members} {regions_served} {date}
    </div>
  );
};

export default CountriesTableId;

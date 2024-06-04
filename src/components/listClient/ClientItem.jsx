export const ClientItem = ({ item }) => {
  console.log(item);
  return (
    <div>
      <p>{item.name}</p>
      <p>{item.ipn}</p>
      <p>{item.tel}</p>
      <p>{item.credit}</p>
      <p>{item.targetCredit}</p>
      <p>{item.intrest}</p>
    </div>
  );
};

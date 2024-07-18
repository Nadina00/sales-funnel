import { Oval } from "react-loader-spinner";


export const Loader = () => {
  return (
    <Oval
      visible={true}
      height="100"
      width="100"
      color="rgb(97, 95, 139)"
      ariaLabel="oval-loading"
      wrapperStyle={{}}
      wrapperClass=""
    />
  );
};

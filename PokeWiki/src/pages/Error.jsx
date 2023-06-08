import { useRouteError } from "react-router-dom";

function Error() {
  const { message } = useRouteError();
  return <div>{message}</div>;
}

export default Error;

import { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const { message } = useRouteError();
  let navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 2000);
  });
  return (
    <>
      <div className="container mx-auto p-4 flex items-center justify-center h-screen">
        <p className="text-6xl text-orange-50 bg-orange-950 p-10 text-center rounded-3xl max-w-100">
          {message}
        </p>
      </div>
    </>
  );
}

export default Error;

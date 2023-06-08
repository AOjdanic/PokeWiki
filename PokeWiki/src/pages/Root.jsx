import { Outlet } from "react-router-dom";
import MainHeading from "../components/MainHeading";

function Root() {
  return (
    <>
      <MainHeading />
      <main>
        <div className="container mx-auto p-4">
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default Root;

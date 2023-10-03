import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../components/NavBar";

const HomeLayout = () => {
  //! 'useNavigation' is used to access various state of a page i.e loading,active,idle etc.
  const navigation = useNavigation();

  const isPageLoading = navigation.state === "loading";

  return (
    <>
      {/* ye common hga har ek page m */}
      <NavBar />
      <section className="page">
        {/*  'Outlet' jo chiz sb jgh show krni h har ek page m nested route k lie vo display krega --> (shared layout) */}
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
};

export default HomeLayout;

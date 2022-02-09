import React from "react";
import AllList from "../components/SingleEdit/AllList";
import ExpertsEditList from "../components/SingleEdit/AllList";
import YourEditList from "../components/SingleEdit/YourEditList";
import TestersEditList from "../components/SingleEdit/;TestersEditList";

const SingleEdit = () => {
  return (
    <section id={classes.contentBox}>
      <div className={classes["main-title"]}>
        <h2>Lifestyle</h2>
      </div>
      <AllList />
      <ExpertsEditList />
      <YourEditList />
      <TestersEditList />
    </section>
  );
};

export default SingleEdit;

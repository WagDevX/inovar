import React from "react";

const Container = (props) => {
  return (
    <section
      id={props.id}
      className={`container p-8 mx-auto xl:px-0 ${
        props.className ? props.className : ""
      }`}
    >
      {props.children}
    </section>
  );
};

export default Container;

import React from "react";
import { RouteComponentProps } from "react-router";

export const Home = (props: RouteComponentProps) => {
  console.log("homeprops", props);

  return (
    <>
      <button
        onClick={() => {
          sessionStorage.setItem("login", "true");
          alert("You can now view todos route .");
          props.history.push("/todos");
        }}
      >
        Log In
      </button>
      <button onClick={() => sessionStorage.removeItem("login")}>
        Log Out
      </button>
      <h2>Home page</h2>{" "}
    </>
  );
};

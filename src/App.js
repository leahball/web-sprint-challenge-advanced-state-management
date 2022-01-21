import React, { Component } from "react";
import { connect } from "react-redux";
import { useEffect } from "react";
import { fetchSmurfs, fetchSuccess } from "./actions";
import AddForm from "./components/AddForm";
import SmurfList from "./components/SmurfList";
import Header from "./components/Header";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = (props) => {
  const { loading, error } = props;

  useEffect(() => {
    props.fetchSmurfs();
    axios.get("http://localhost:3333/smurfs").then((res) => {
      props.fetchSuccess(res.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />

      <main>
        {error !== "" && <h3>{error}</h3>}
        {loading ? <h3>We are loading</h3> : <SmurfList />}
        <AddForm />
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchSmurfs, fetchSuccess })(App);

//Task List:
//1. Connect the fetchSmurfs actions to the App component.
//2. Call the fetchSmurfs action when the component mounts.

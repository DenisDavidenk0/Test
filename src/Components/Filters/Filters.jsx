import { Button, Select } from "@mui/material";
import React from "react";
import styles from "../styles.css";

export const Filters = ({ setShowCreate, showDeleteBtn, deleteFunc }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Filter name={"Статус"} />
      <Filter name={"Товар"} />
      <Filter name={"Id"} />
      <Filter name={"Название"} />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: 20,
        }}
      >
        <Button variant="outlined" onClick={() => setShowCreate(true)}>
          +
        </Button>
        {showDeleteBtn ? <Button onClick={deleteFunc}>x</Button> : ""}
      </div>
    </div>
  );
};

const Filter = ({ name, data }) => {
  return (
    <div className={"itemBox"}>
      <p>{name}</p>
      <Select style={{ height: 30, width: 30 }} />
    </div>
  );
};

import { Switch } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import styles from "../styles.css";

export const ListItem = ({
  status,
  id,
  title,
  image,
  remove,
  changeItem,
  inputActive = false,
  addItem,
  selectItem,
  isSelected,
}) => {
  const [titleInputActive, setTitleInputActive] = useState(inputActive);
  const [idInputActive, setIdInputActive] = useState(inputActive);
  const secondInput = useRef();

  const [_title, setTitle] = useState();
  const [_id, setId] = useState();

  return (
    <div
      onClick={selectItem}
      style={{
        display: "flex",
        alignItems: "center",
        backgroundColor: isSelected ? "gray" : "lightgray",
      }}
      className="item"
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: 40,
            marginRight: 40,
          }}
        >
          <Switch />
        </div>

        <p style={{ width: 40, marginRight: 40 }}>xxxx-</p>

        <div style={{ width: 40, marginRight: 40 }}>
          {idInputActive ? (
            <input
              autoFocus
              style={{ width: 30 }}
              onChange={(event) => setId(event.target.value)}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  if (inputActive === true) secondInput.current?.focus();
                  else {
                    changeItem(_id, "id");
                  }
                }
              }}
              value={_id}
            />
          ) : (
            <p onClick={() => setIdInputActive(true)}>{id}</p>
          )}
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: 40,
            marginRight: 40,
          }}
        >
          <div style={{ width: 30, height: 30, backgroundColor: image }} />
          <div style={{ width: 40, marginRight: 40 }}>
            {titleInputActive ? (
              <input
                style={{ width: 30 }}
                ref={secondInput}
                onChange={(e) => setTitle(e.target.value)}
                value={_title}
                onKeyDown={(e) => {
                  if (e.keyCode === 13) {
                    addItem(_title, _id, "blue");
                  }
                }}
              />
            ) : (
              <p onClick={() => setTitleInputActive(true)}>{title}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

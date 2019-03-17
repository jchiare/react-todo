import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import TodoItems from ".././items/todoItems";
import "./todoColumn.css";

export default function TodoColumn(props) {
  const { header, info } = props;
  return (
    <>
      <div className="header-name">
        <h2 className="list-name">
          {header}
          <span className="info-icon">
            <Tooltip title={info} placement="right-start">
              <i className="material-icons">info</i>
            </Tooltip>
          </span>
        </h2>
      </div>
      <TodoItems />
    </>
  );
}

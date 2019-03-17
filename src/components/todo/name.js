import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import "./todo.css";

const textStyles = {
  margin: "0 auto"
};

export default function expandName(props) {
  const { name } = props;
  return (
    <>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <h1 className="section-header">{name}</h1>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <p className="section-header">
            wqkrmfmsfkasm wqkrmfmsfkasm wqkrmfmsfkasmwqkrmfmsfkasmwqkrmfmsfkasmv
          </p>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      ;
    </>
  );
}

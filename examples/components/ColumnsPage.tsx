import React from "react";
import { Columns, Column } from "../src";
import "../src/index.scss";
import "./style.scss";

class ColumnsPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2>Columns with default gap (0.75rem)</h2>
        <Columns>
          <Column>
            <div className="card-column-box">Column example 1</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 2</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 3</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 4</div>
          </Column>
        </Columns>
        <h2>Columns (centered) with default gap (0.75rem)</h2>
        <Columns centered={true}>
          <Column tablet={2}>
            <div className="card-column-box">16%</div>
          </Column>
          <Column tablet={3}>
            <div className="card-column-box">25%</div>
          </Column>
          <Column tablet={3}>
            <div className="card-column-box">25%</div>
          </Column>
          <Column tablet={2}>
            <div className="card-column-box">16%</div>
          </Column>
        </Columns>
        <h2>Columns with custom gap (1.25rem)</h2>
        <Columns multiline={true} columnGap="1.25rem">
          <Column tablet={4}>
            <div className="card-column-box">Column example 1</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 2</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 3</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 4</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 5</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 6</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 7</div>
          </Column>
          <Column tablet={4}>
            <div className="card-column-box">Column example 8</div>
          </Column>
        </Columns>
        <h2>Columns (gapless)</h2>
        <Columns gapless={true}>
          <Column>
            <div className="card-column-box">Column example 1</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 2</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 3</div>
          </Column>
          <Column>
            <div className="card-column-box">Column example 4</div>
          </Column>
        </Columns>
      </div>
    );
  }
}

export default ColumnsPage;

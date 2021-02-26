import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

class Insert extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const data = this.props.onDisplay;
    console.log(data);
    const count = this.props.onCount;

    const Display = data.map((data, index) => (
      <div className="user" id="isSetCheckbox" key={index.toString()}>
        {console.log(data)}

        <div>
          <div className="isCheckBox">
            <div className="is-DataCheck">
              <input
                type="checkbox"
                className="isCheck"
                onClick={() => this.props.onCheckBox(index)}
              />
              {data}
              <button
                className="isDeleteIcon"
                onClick={() => this.props.onDeleteData(index)}
              >
                <DeleteIcon
                  className="is-DeleteButton"
                  style={{ fontSize: 13 }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    ));

    return (
      <div className="user">
        {<p>You have {count} pending item </p>}
        <div>{Display}</div>
      </div>
    );
  }
}
export default Insert;

import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

class Insert extends Component {
  render() {
    const data = this.props.onDisplay;

    const count = this.props.onCount;

    const Display = data.map((data, index) => (
      <div className="user" id="isSetCheckbox" key={index.toString()}>
        <div>
          <div className="isCheckBox">
            <div className="is-DataCheck">
              <input
                type="checkbox"
                className="isCheck "
                checked={false}
                onChange={() => {}}
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
      <div>
        {count > 0 && <p>You have {count} pending item </p>}
        <div className="listContainer">{Display}</div>
      </div>
    );
  }
}
export default Insert;

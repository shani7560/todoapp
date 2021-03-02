import React, { Component } from "react";
import DeleteIcon from "@material-ui/icons/Delete";

class Showdata extends Component {
  render() {
    const data = this.props.onDisplay;
    console.log(data);
    const completedData = this.props.totalList;
    console.log(this.props);

    const Display = data.map((value, index) => (
      <div className="user" key={value.toString()}>
        <div>
          <div className="isCheckBox">
            <div className={"is-DataCheck" + (data ? " checkBoxColour" : "")}>
              <label class="container">
                <input
                  type="checkbox"
                  className="isCheck "
                  checked="checked"
                  checked={true}
                  onChange={() => {}}
                  onClick={() => this.props.onShowCheckBox(index)}
                />
                <span class="checkmark"></span>
              </label>

              <div className={value ? "dataCheck" : ""}>{value}</div>
              {console.log(value)}

              <button
                className="isDeleteIcon"
                onClick={() => this.props.onDeleteShowData(index)}
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

    let percentage = (data.length / completedData) * 100;
    console.log(data.length / completedData);

    return (
      <div className="isComplete">
        <div>{data.length > 0 && <p>complete {percentage.toFixed(2)}%</p>}</div>
        {Display}
      </div>
    );
  }
}
export default Showdata;

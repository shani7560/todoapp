import React, { Component } from "react";
import ReactDOM from "react-dom";
import Insert from "../InsertData/Insert";

const month = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      insertArr: [],
      isButtonEnable: false,
      count: 0,
      onDeleteData: "",
      onCheckBox: "",
      completed: false,
      newArray: [],
      object: {},
    };
  }
  onChange = (e) => {
    let { isButtonEnable } = this.state;
    let value = e.target.value;
    isButtonEnable = value ? true : false;
    this.setState({ name: value, isButtonEnable });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const count = this.state.count;
    if (this.state.name !== "") {
      let { insertArr, name } = this.state;
      insertArr.unshift(name);
      this.setState({
        insertArr,
        name: "",
        isButtonEnable: true,
        count: count + 1,
      });
    }
  };

  onDeleteData = (index) => {
    const deleteArray = this.state.insertArr;
    deleteArray.splice(index, 1);
    let { count } = this.state;

    this.setState({
      insertArr: deleteArray,
      count: count - 1,
    });
  };

  onCheckBox = (index) => {
    let { name, completed, count, object } = this.state;
    const newArray = this.state.insertArr;
    const obj = { newArray };
    console.log(obj);
    newArray.splice(index, 1);

    // this.state.newArray.push(obj);
    // console.log(this.state.newArray);

    // this.setState({
    //   insertArr: newArray,
    //   count: count - 1,
    //   completed: true,
    // });
  };

  render() {
    // console.log(this.state.insertArr);
    let { isButtonEnable } = this.state;
    console.log(isButtonEnable);
    var today = new Date();

    let date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();

    return (
      <div className="formBackground">
        <div className="data-item">
          <div className="textColor">{month[today.getDay()]}</div>
          <div className="textColor">{date}</div>
        </div>
        <div>
          <div className="txtForm">
            <input
              type="text"
              name="name"
              placeholder="Take the garbage out"
              className="textinput "
              onChange={this.onChange}
              value={this.state.name}
            />
            <div
              className="txtSubmit txtBtnDisable"
              submit="submit"
              onClick={this.handleSubmit}
            >
              +
            </div>
          </div>

          <div>
            <Insert
              onDisplay={this.state.insertArr}
              onDisplayName={this.state.name}
              onCount={this.state.count}
              onDeleteData={this.onDeleteData}
              onCheckBox={this.onCheckBox}
            />
          </div>
          <div className="inFooter">
            <div className="inShow">Show complete</div>
            <div className="inClear">Clear All</div>
          </div>
        </div>
      </div>
    );
  }
}
export default Form;

import React, { Component } from "react";

import Insert from "../InsertData/Insert";
import Showdata from "../InsertData/Showdata";
import InsertChartIcon from "@material-ui/icons/InsertChart";
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
      newArrData: [],
      object: {},
      isHideComplete: false,
      isShowData: true,
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
      insertArr.push(name);
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
  onDeleteShowData = (index) => {
    const showDataDelete = this.state.newArrData;
    showDataDelete.splice(index, 1);

    this.setState({
      newArrData: showDataDelete,
    });
  };

  onCheckBox = (index) => {
    console.log(index);
    let { newArrData, count, insertArr } = this.state;

    const dataStory = insertArr;
    console.log("old Array:-", dataStory[index]);

    let dataDelete = dataStory[index];
    console.log("hello:-", dataDelete);

    let dataRemove = newArrData;
    console.log("new Array:-", dataRemove);
    dataRemove.push(dataDelete);
    dataStory.splice(index, 1);

    this.setState({
      insertArr: dataStory,
      newArrData,
      count: count - 1,
    });
  };

  ShowHide = () => {
    this.setState({ isHideComplete: !this.state.isHideComplete });
  };
  ClearData = (index) => {
    const clearNewArray = this.state.insertArr;
    const clearShowData = this.state.newArrData;
    clearShowData.splice(index, 1);
    clearNewArray.splice(index, 1);

    this.setState({
      newArrData: [],
      insertArr: [],
      count: 0,
    });
  };

  onShowCheckBox = (index) => {
    console.log(index);
    let { newArrData, insertArr, count } = this.state;

    const seletedElement = newArrData;
    console.log(",,,,", seletedElement);

    let removeElement = seletedElement[index];
    console.log(",,,,", removeElement);

    let storyElement = insertArr;
    console.log(",,,,", storyElement);

    storyElement.push(removeElement);
    seletedElement.splice(index, 1);

    this.setState({
      newArrData: seletedElement,
      insertArr,
      count: count + 1,
    });
  };

  render() {
    let { isButtonEnable, newArrData, isHideComplete } = this.state;

    var today = new Date();

    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();

    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }

    // let date =
    //   today.getFullYear() +
    //   "-" +
    //   (today.getMonth() + 1) +
    //   "-" +
    //   today.getDate();

    return (
      <div className="formBackground">
        <div className="data-item">
          <div className="textColor">{month[today.getDay()]}</div>
          <div className="textColor">
            {(today = yyyy + "/" + mm + "/" + dd)}
          </div>
        </div>
        <div>
          <div className="txtForm">
            <input
              type="text"
              name="name"
              placeholder="Take the garbage out"
              className="textinput"
              onChange={this.onChange}
              value={this.state.name}
            />
            <div
              className={"txtSubmit " + (this.state.name ? "txtBtnColour" : "")}
              submit="submit"
              onClick={this.handleSubmit}
            >
              +
            </div>
          </div>
          {this.state.insertArr.length > 0 ? (
            <div>
              <Insert
                onDisplay={this.state.insertArr}
                onCount={this.state.count}
                onDeleteData={this.onDeleteData}
                onCheckBox={this.onCheckBox}
              />
            </div>
          ) : (
            <div className="iconBackground">
              <div className="iconeFont">
                <InsertChartIcon className="iconChart" />
              </div>
              <div>Time to chill You have no todos.</div>
            </div>
          )}

          <div>
            {isHideComplete && (
              <Showdata
                onShowCompleted={this.state.newArrData}
                onDisplay={this.state.newArrData}
                onDeleteShowData={this.onDeleteShowData}
                onShowCheckBox={this.onShowCheckBox}
                totalList={
                  this.state.insertArr.length + this.state.newArrData.length
                }
              />
            )}
          </div>

          <div className="inFooter">
            {this.state.newArrData.length > 0 && (
              <div className="inShow" onClick={this.ShowHide}>
                {this.state.isHideComplete ? "Hide Complete" : "Show Complete"}
              </div>
            )}

            {(this.state.insertArr.length > 0 ||
              this.state.newArrData.length > 0) && (
              <div className="inClear" onClick={this.ClearData}>
                Clear All
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
export default Form;

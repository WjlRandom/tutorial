import React from "react";
import "./index.css";

class Tree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exampleArr: [4, 7, 1, 0, 34, 76, 325, 34, 543, 67],
      resultArr: []
    };
  }

  render() {
    return (
      <div className="tree">
        <h3>数组排序的实现</h3>
        <div className="sort">
          <div>示例数组</div>
          <div>{JSON.stringify(this.state.exampleArr)}</div>
          <div>
            <button onClick={this.handleSort.bind(this, 1)}>冒泡排序</button>
            <button onClick={this.handleSort.bind(this, 2)}>选择排序</button>
            <button onClick={this.handleSort.bind(this, 3)}>插入排序</button>
            <button onClick={this.handleSort.bind(this, 4)}>快速排序</button>
          </div>
          <div>{JSON.stringify(this.state.resultArr)}</div>
        </div>
      </div>
    );
  }
  handleSort(type) {
    let array = [].concat(this.state.exampleArr);
    let result = [];
    switch (type) {
      case 1:
        result = bubbleSort(array);
        this.setState({
          resultArr: result
        });
        break;
      case 2:
        result = selectSort(array);
        this.setState({
          resultArr: result
        });
        break;
      case 3:
        result = insertSort(array);
        this.setState({
          resultArr: result
        });
        break;
      case 4:
        result = quickSort(array);
        this.setState({
          resultArr: result
        });
        break;

      default:
        console.log(type);
    }
  }
}
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

function selectSort(arr) {
  let L = arr.length;
  let minIndex, temp;
  for (let i = 0; i < L - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < L; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
function insertSort(arr) {
  let L = arr.length;
  let current;
  for (let i = 0; i < L; i++) {
    current = arr[i];
    let j = i - 1;
    while (j > 0 && arr[j] < current) {
      arr[j + 1] = current;
      j--;
    }
  }
}
function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var pivotIndex = Math.floor(arr.length / 2);

  var pivot = arr.splice(pivotIndex, 1)[0];
  console.log("pivot", pivot);

  var left = [];

  var right = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return quickSort(left).concat([pivot], quickSort(right));
}
export default Tree;

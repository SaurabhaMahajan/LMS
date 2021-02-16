import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "./toggleswitch.scss";

class Toggleswitch extends Component {
  constructor() {
    super();
    this.state = {
      checked: true,
      toggleCount: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.stopinput = this.stopinput.bind(this);
  }

  // handleChange() {
  //   this.setState({
  //     checked: !this.state.checked,
  //     toggleCount: this.state.toggleCount + 1
  //   });
  //   console.log('checkedd', this.state.checked);
  //   console.log('togglevaluee', this.state.toggleCount);
  //   if (this.state.checked) {
  //     this.props.selectedVisitor.push(this.props.description);
  //     console.log('inside true if', this.state.toggleCount);
  //   }
  //   else if (!this.state.checked && this.state.toggleCount < 2) {
  //     let element = document.getElementById('def');
  //     ReactDOM.findDOMNode(element).classList.add("addToggleClass");
  //     console.log('togglevalue - red', this.state.toggleCount);
  //     console.log('checkef-red', this.state.checked);
  //   }
  //   else if (!this.state.checked && this.state.toggleCount > 2) {
  //     let element = document.getElementById('def');
  //     ReactDOM.findDOMNode(element).classList.remove("addToggleClass");
  //     //  this.setState({ toggleCount:0, checked:!this.state.checked});
  //     console.log('togglevalue -white', this.state.toggleCount);
  //     console.log('checkef-white', this.state.checked);
  //   }
  // }
  handleChange= (event)=>{
    let isChecked = event.target.checked;
    let element = document.getElementById('abc');
    let labelselector = element.querySelector('label');
    console.log(isChecked);
    isChecked === true && labelselector.classList.contains('addToggleClass')
    ? labelselector.classList.remove("addToggleClass") :  labelselector.classList.add("addToggleClass")
    }

stopinput=(value)=>{
  value.disabled=true;
}
  //  if(!this.state.toggleValue)
  //  { this.removeToggleClass()} 
  //  else 
  //  {this.addToggleClass()  }
  //  {this.addToggleClass()  }
  //   console.log(this.props.selectedVisitor);

  //   addToggleClass=()=>{

  // }
  // removeToggleClass=()=>{
  //   let element = document.getElementById('def');
  //   ReactDOM.findDOMNode(element).classList.remove("addToggleClass");

  // }

  render() {
    return (<div id="abc" className="custom-control mr-4 custom-switch" >
      <input
        type="checkbox"
        className="custom-control-input"
        id={this.props.description}
        value={this.props.description}
        onChange={this.handleChange}
      />

      <label
        className="custom-control-label font-weight-bold"
        htmlFor={this.props.description}
        key={this.props.description}
      >
        {this.props.description}
      </label>
    </div>
    );
  }
}


const mapStateToProps = (state) => ({
  selectedVisitor: state.whoReducer.selectedVisitor
})

export default connect(mapStateToProps, null)(Toggleswitch);

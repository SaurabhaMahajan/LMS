import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "./toggleswitch.scss";
let count = -1

class Toggleswitch extends Component {
  constructor() {
    super();
    this.toggleRef = React.createRef()
  }

  componentDidMount() {
    this.setToggleState()
  }

  componentWillUnmount() {
    count = -1
  }

  componentDidUpdate(prevProps, nextState) {
    if (prevProps.count !== this.props.count) {
      this.setToggleState()
    }
  }

  setToggleState = () => {
    if (this.toggleRef.current && this.props.count === 0) {
      this.toggleRef.current.checked = true
    }
    else if (this.toggleRef.current && this.props.count === 1) {
      this.toggleRef.current.nextSibling.classList.add("addToggleClass")
    }
  }

  handleChange = (event) => {
    count = this.props.count || this.props.count === 0 ? this.props.count : -1
    count = count + 1
    let isChecked = event.target.checked;
    if (count === 2) {
      event.target.nextSibling.classList.remove("addToggleClass")
      event.target.checked = false;
      console.log(count, event.target.value, this.props.listType)
      this.props.getToggleState(count, event.target.value, this.props.listType);
      return;
    } else if (count > 2) {
      event.target.nextSibling.classList.remove("addToggleClass")
      event.target.checked = false;
      console.log(count, event.target.value, this.props.listType)
      this.props.getToggleState(0, event.target.value, this.props.listType);
    return;
    }
    isChecked === true && event.target.nextSibling.classList.contains('addToggleClass') ? event.target.nextSibling.classList.remove("addToggleClass")
      : event.target.nextSibling.classList.add("addToggleClass")
    console.log(count, event.target.value, this.props.listType)
    this.props.getToggleState(count, event.target.value, this.props.listType);
  }

  render() {
    return (<div id="outercontainer" className="custom-control mr-4 custom-switch" >
      <input
        ref={this.toggleRef}
        type="checkbox"
        className="custom-control-input"
        id={this.props.description}
        value={this.props.description}
        onChange={(e) => this.handleChange(e)}
      />
      <label
        className="custom-control-label font-weight-bold"
        htmlFor={this.props.description}
        key={this.props.description}>
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

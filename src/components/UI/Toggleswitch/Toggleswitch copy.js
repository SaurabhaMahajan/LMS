import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import "./toggleswitch.scss";

class Toggleswitch extends Component {
    constructor() {
        super();
        this.state = { checked: true, 
          toggleCount:0
         };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
    // let count=  this.state.toggleValue+1;
        this.setState({ checked:!this.state.checked});
        console.log('checkef' ,this.state.checkef);
        console.log('togglevalue' ,this.state.toggleValue);
       if(this.state.checked) { this.props.selectedVisitor.push(this.props.description)}
       else{ this.addToggleClass() }

      //  if(!this.state.toggleValue)
      //  { this.removeToggleClass()} 
      //  else 
      //  {this.addToggleClass()  }
      //  {this.addToggleClass()  }
      //   console.log(this.props.selectedVisitor);
    }
    addToggleClass=()=>{
    let element = document.getElementById('def');
    ReactDOM.findDOMNode(element).classList.add("addToggleClass");
    this.setState({ toggleValue:false, checked:!this.state.checked});
    console.log('togglevalue' ,this.state.toggleValue);
    console.log('checkef' ,this.state.checkef);
  }
  removeToggleClass=()=>{
    let element = document.getElementById('def');
    ReactDOM.findDOMNode(element).classList.remove("addToggleClass");
   
  }

    render() {
        return (<div  className="custom-control mr-4 custom-switch">
           <input
            id="abc"
            type="checkbox"
            className="custom-control-input"
            id={this.props.description}
            value={this.props.description}
            onChange={this.handleChange}
          />

          <label
            id="def"
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

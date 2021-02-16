import React, { Component } from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import {
	DateTimePicker
} from '@material-ui/pickers';
import Navigation from './Navigation';
import logo from '../../assets/logo.svg';

import "./css/login.scss";

const LINKS = [
	{ label: 'Website', to: 'https://www.robinwieruch.de/' },
	{ label: 'Twitter', to: 'https://twitter.com/rwieruch' },
];

class MainContainer extends Component {
	constructor(props) {
		super(props);
		this.state = ({
			selectedDate: new Date()
		})
	}

	handleDateChange = (date) => {
		this.setState({
			selectedDate: date
		})
	}

	render() {
		const {selectedDate} = this.state;
		return (
			<div className="App">
				<Navigation links={LINKS} />
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p>
						Edit <code>src/App.js</code> and save to reload.
					</p>
					<a
						className="App-link"
						href="https://reactjs.org"
						target="_blank"
						rel="noopener noreferrer"
					>
						Learn React
					</a>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<DateTimePicker className='datetimepickercontainer' value={selectedDate} onChange={this.handleDateChange} />
					</MuiPickersUtilsProvider>
				</header>
			</div>
		);
	}
}

export default MainContainer;

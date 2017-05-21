import React, { Component } from 'react';
import { getData, getInfo } from '../api';

import Vehicle from './Vehicle.js';

export default
class VehicleList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			vehicles: [],
		}
	}

	componentDidMount() {
		getData().then((vehicleList) => {
			const promises = vehicleList.map((vehicle) => getInfo(vehicle.id));
			Promise.all(promises).then((info) => {
				const vehicles = [];
				vehicleList.forEach((vehicle, index) => vehicles.push(Object.assign(vehicleList[index], info[index])))
				this.setState({ vehicles })
			})
		});
	}

	render() {
		if(this.state.vehicles) {
		    return (
					<ul className="vehicles-list">
				    {this.state.vehicles.map((vehicle) => <li key={vehicle.id}><Vehicle vehicle={vehicle} /></li>)}
					</ul>
		    )
	    }

		return (<h1>Loading...</h1>);
	}
}
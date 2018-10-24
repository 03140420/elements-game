import React, { Component } from "react";
import GameCard from "../GameCard/GameCard"
import Grid from "@material-ui/core/Grid"

export default class CardDisplay extends Component {
	render() {
		if ( this.props.className === "opponents_hand" ) {
			return ( 
				<Grid container={true} direction="row" justify="space-around" alignItems="center">	
					<GameCard className="card_back"/>
					<GameCard className="card_back"/>
					<GameCard className="card_back"/>
					<GameCard className="card_back"/>
					<GameCard className="card_back"/>
				</Grid> 
			)
		} else {
			return ( 
				<Grid container={true} direction="row" justify="space-around" alignItems="center">
					<GameCard className="water" onClick={this.props.onClick}/>
					<GameCard className="earth" onClick={this.props.onClick}/>
					<GameCard className="light" onClick={this.props.onClick}/>
					<GameCard className="shadow" onClick={this.props.onClick}/>
					<GameCard className="fire" onClick={this.props.onClick}/>
				</Grid> 
			)
		}
	}
}

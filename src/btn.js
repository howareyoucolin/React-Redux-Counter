import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

//Import scss
import './scss/btn.scss';

//Component A
class Btn extends React.Component {
	
	clickHandler = () => {
		if(this.props.sign == '+') this.props.increment();
		if(this.props.sign == '-') this.props.decrement();
	}
	
	render() {
		return (
			<div className="btnWrap">
				<button onClick={this.clickHandler}> {this.props.children} </button>
			</div>
		)
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		increment:() => {
			dispatch({type:'INCREASE_COUNT'});
		},
		decrement:() => {
			dispatch({type:'DECREASE_COUNT'});
		}
	}
}

export default connect(null,mapDispatchToProps)(Btn);
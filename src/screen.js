import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

//Import scss
import './scss/screen.scss';

//Component A
class Screen extends React.Component {
	render() {
		return (
			<div className="screen">
				{ this.props.count }
			</div>
		)
	}
};

const mapStateToProps = (state) => {
	return { count: state.count };
};

export default connect(mapStateToProps)(Screen);
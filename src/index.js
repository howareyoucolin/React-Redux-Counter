import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

//Redux components
import store from "./store/default";

//Components
import Screen from './screen';
import Btn from './btn';

//Import scss
import './scss/style.scss';

//Component A
class App extends React.Component {
	render() {
		return (
			<div className="app">
				<div className="main">
					<Screen />
					<div className="row">
						<Btn sign="-">&#10134;</Btn> 
						<Btn sign="+">&#10133;</Btn>
					</div>
				</div>
			</div>
		)
	}
};

//Program is inited here
ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);




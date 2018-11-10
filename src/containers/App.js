import React from 'react'
import {connect} from 'react-redux'
import * as UI from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import MainScreen from './MainScreen'
import UserRequest from './UserRequest'
import {push} from 'react-router-redux';

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		console.log("render!!")

		let active = 'mainscreen';

		switch(this.props.pageId) {
			case 'epic':
				active = 'epicscreen';
				break;
			case 'userrequest' :
				active = 'userrequest';
				break;
			default:
				break;
		}

		return (
			<UI.Root activeView={active}>
				<MainScreen id="mainscreen"/>
			</UI.Root>
		);
	}
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(App);

import React from 'react'
import {connect} from 'react-redux'
import * as UI from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import TimeScreen from './TimeScreen'
import MainScreen from './MainScreen'
import EpicScreen from './EpicScreen'
import UserRequest from './UserRequest'

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// connect.subscribe((e) => {
		// 	switch (e.detail.type) {
		// 		case 'VKWebAppGetUserInfoResult':
		// 			this.setState({ fetchedUser: e.detail.data });
		// 			break;
		// 		default:
		// 			console.log(e.detail.type);
		// 	}
		// });
		// connect.send('VKWebAppGetUserInfo', {});
	}

	render() {
		console.log("render!!")

		let active = this.props.pageId == 'epic' ? 'userrequest' : 'mainscreen';
		return (
			<UI.Root activeView={active}>
				<MainScreen id="mainscreen"/>
				<TimeScreen id="timescreen"/>
				<EpicScreen id="epicscreen"/>
				<UserRequest id="userrequest"/>
			</UI.Root>
		);
	}
}

function mapStateToProps(state) {
    return {
    };
}

export default connect(mapStateToProps)(App);

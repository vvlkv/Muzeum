import React from 'react'
//import {connect} from 'react-redux'
import * as UI from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import MainScreen from './MainScreen'
import UserRequest from './UserRequest'
import {push} from 'react-router-redux';
import connect from '@vkontakte/vkui-connect';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			fetchedUser: null
		}
	}

	componentDidMount() {
		connect.subscribe((e) => {
			switch (e.detail.type) {
				case 'VKWebAppGetUserInfoResult':
					this.setState({ fetchedUser: e.detail.data });
					break;
				default:
					console.log(e.detail.type);
			}
		});
		connect.send('VKWebAppGetUserInfo', {});
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
				<MainScreen fetchedUser={this.state.fetchedUser} id="mainscreen"/>
			</UI.Root>
		);
	}
}

function mapStateToProps(state) {
    return {
    };
}

export default App;//connect(mapStateToProps)(App);

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
		this.state = {
			activePanel: 'mainscreen',
			fetchedUser: null,
		}
	}

	componentDidMount() {
	}

	show(e) {
		console.log("show!!!");
		console.log(e);
		this.setState({ activePanel: e })
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

import React from 'react'
import {connect} from 'react-redux'
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input } from '@vkontakte/vkui';
import * as UI from '@vkontakte/vkui'
import '@vkontakte/vkui/dist/vkui.css'
import TimeScreen from './TimeScreen'
import MainScreen from './MainScreen'
import EpicScreen from './EpicScreen'
import UserRequest from './UserRequest'
import {push} from 'react-router-redux';

const Appp = ({ openUserRequest, openEpic }) => {
  console.log('Appp');

	const openEpic = () =>  {
		console.log("openEpic")
		this.props.dispatch(push('epic'));
	}

	const openUserRequest = () => {
		console.log("userrequest")
		this.props.dispatch(push('userrequest'));
	}

  return (
		<View id='mainView' activePanel='mainPanel'>
			<Panel id='mainPanel'>
				<PanelHeader ></PanelHeader>
				<Div>
				<Button size="xl" level="secondary" onClick={openUserRequest}>
					Посетитель
				</Button>
				<Button size="xl" level="secondary" onClick={openEpic}>
					Работник
				</Button>
				<Button size="xl" level="secondary" onClick={openEpic}>
					Диспетчер
				</Button>
			</Div>
			</Panel>
		</View>
  );
}

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

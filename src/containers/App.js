import React from 'react';
import connect from '@vkontakte/vkui-connect';
import { View } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import MainScreen from './MainScreen';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activePanel: 'mainscreen',
			fetchedUser: null,
		};
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

	/*show(e) {
		this.setState({ activePanel: e })
	}*/

	go = (e) => {
		this.setState({ activePanel: e.currentTarget.dataset.to })
	};

	render() {

		/*let active = 'mainscreen';

		switch(this.props.pageId) {
			case 'epic':
				active = 'epicscreen';
				break;
			case 'userrequest' :
				active = 'userrequest';
				break;
			default:
				break;
		}*/
		return (
			<View activePanel={this.state.activePanel}>
				<MainScreen id="mainscreen" fetchedUser={this.state.fetchedUser} go={this.go} />
			</View>
		);
		/*return (
			<UI.Root activeView={this.state.activePanel}>
				<MainScreen id="mainscreen" fetchedUser={this.state.fetchedUser}/>
			</UI.Root>
		);*/
	}
}

export default App;

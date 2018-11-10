import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input, Root } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import UserRequest from './UserRequest'
import WorkerEpic from './WorkerEpic'
import DispetcherEpic from './DispetcherEpic'

class MainScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
			activePanel: 'mainscreen',
		}
  }
  render() {
    return (
      <Root activeView={this.state.activePanel}>
        <View id="mainscreen" activePanel="mainscreen">
          <Panel id='mainscreen'>
            <PanelHeader ></PanelHeader>
            <Button size="xl" level="2" onClick={this.showRequest.bind(this)}>
              Посетитель
            </Button>
            <Button size="xl" level="2" onClick={this.showWorkerEpic.bind(this)}>
              Работник
            </Button>
            <Button size="xl" level="2" onClick={this.showDispetcherEpic.bind(this)}>
              Диспетчер
            </Button>
          </Panel>
        </View>
        <UserRequest id='request'/>
        <WorkerEpic id='workerepic'/>
        <DispetcherEpic id='dispetcherepic'/>
      </Root>
    );
  }

  showRequest() {
    this.setState({activePanel:'request'})
  }

  showWorkerEpic() {
    this.setState({activePanel:'workerepic'})
  }

  showDispetcherEpic() {
    this.setState({activePanel:'dispetcherepic'})
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(MainScreen);

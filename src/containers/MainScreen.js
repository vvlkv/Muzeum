import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input, Root } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import UserRequest from './UserRequest'
import EpicScreen from './EpicScreen'

class MainScreen extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
			activePanel: 'mainscreen',
		}
    console.log(this.state.activePanel);
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
            <Button size="xl" level="2" onClick={this.showEpic.bind(this)}>
              Работник
            </Button>
            <Button size="xl" level="2" onClick={this.showEpic.bind(this)}>
              Диспетчер
            </Button>
          </Panel>
        </View>
        <UserRequest id='request'/>
        <EpicScreen id='epic'/>
      </Root>
    );
  }

  showRequest() {
    console.log("SHOWWW");
    this.setState(
      {
        activePanel:'request'
      }
    )
  }

  showEpic() {
    console.log("EPIC");
    this.setState(
      {
        activePanel:'epic'
      }
    )
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  openEpic() {
    console.log(this.props.route);
    // console.log("openEpic")
    // this.props.show("epicscreen");
    this.props.dispatch(push());
  }

  openUserRequest() {
    console.log("userrequest")
    this.props.dispatch(push('userrequest'));
  }

  getActualTime() {
    console.log("getActualTime");
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
    route: state.route
  };
}

export default connect(mapStateToProps)(MainScreen);

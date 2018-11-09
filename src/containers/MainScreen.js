import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class MainScreen extends Component {

  render() {
    return (
      <View id='mainView' activePanel='mainPanel'>
        <Panel id='mainPanel'>
          <PanelHeader ></PanelHeader>
          <Button size="xl" level="2" onClick={this.openEpic.bind(this)}>
            Show EPIC!
          </Button>
        </Panel>
      </View>
    );
  }

  openEpic() {
    console.log("openEpic")
    this.props.dispatch(push('epic'));
  }

  getActualTime() {
    console.log("getActualTime");
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
  };
}

export default connect(mapStateToProps)(MainScreen);

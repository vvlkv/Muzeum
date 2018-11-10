import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import RequestsScreen from './RequestsScreen'

class WorkerEpic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeStory: 'requests'
      };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }
  render() {
    return (
      <Epic id='epic' activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'requests'}
            data-story="requests"
          ></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
          ></TabbarItem>
        </Tabbar>
      }>
      <RequestsScreen id="requests" activePanel="requests"/>
        <View id="discover" activePanel="discover">
          <Panel id="discover">
            <PanelHeader>Discover</PanelHeader>
          </Panel>
        </View>
      </Epic>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(WorkerEpic);

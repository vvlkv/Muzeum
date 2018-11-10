import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, IOS, platform, TabbarItem, View, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import RequestsScreen from './RequestsScreen';
import MapScreen from './MapScreen';

import Icon28ChevronNote from '@vkontakte/icons/dist/24/note';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon28ChevronUser from '@vkontakte/icons/dist/24/user';
import Icon24User from '@vkontakte/icons/dist/24/user';

const osname = platform();

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
          >{osname === IOS ? <Icon28ChevronNote/> : <Icon24Note/>}</TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'map'}
            data-story="map"
          >{osname === IOS ? <Icon28ChevronUser/> : <Icon24User/>}</TabbarItem>
        </Tabbar>
      }>
      <RequestsScreen id="requests" activePanel="requests"/>
      <MapScreen id="map"/>
      </Epic>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(WorkerEpic);

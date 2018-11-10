import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, IOS, platform, TabbarItem, View, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import RequestsScreen from './RequestsScreen'

import Icon28ChevronNote from '@vkontakte/icons/dist/24/note';
import Icon24Note from '@vkontakte/icons/dist/24/note';
import Icon28ChevronPlace from '@vkontakte/icons/dist/24/place';
import Icon24Place from '@vkontakte/icons/dist/24/place';

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
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
          >{osname === IOS ? <Icon28ChevronPlace/> : <Icon24Place/>}</TabbarItem>
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

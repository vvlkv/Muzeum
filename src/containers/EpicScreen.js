import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';

class EpicScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeStory: 'feed'
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
            selected={this.state.activeStory === 'feed'}
            data-story="feed"
          ></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
          ></TabbarItem>
        </Tabbar>
      }>
        <View id="feed" activePanel="feed">
          <Panel id="feed">
            <PanelHeader>Feed</PanelHeader>
          </Panel>
        </View>
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

export default connect(mapStateToProps)(EpicScreen);

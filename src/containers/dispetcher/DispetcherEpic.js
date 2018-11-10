import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';
import WorkersItem from './WorkersItem'

class DispetcherEpic extends Component {
  constructor(props) {
    super(props);
    this.state = {
        activeStory: 'workers'
      };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }
  render() {
    return (
      <UI.Epic id='epic' activeStory={this.state.activeStory} tabbar={
        <UI.Tabbar>
          <UI.TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'workers'}
            data-story="workers"
          ></UI.TabbarItem>
          <UI.TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'discover'}
            data-story="discover"
          ></UI.TabbarItem>
        </UI.Tabbar>
      }>
      <WorkersItem id="workers"/>
      <UI.View id="discover" activePanel="discover">
        <UI.Panel id="discover">
          <UI.PanelHeader>Discover</UI.PanelHeader>
        </UI.Panel>
      </UI.View>
      </UI.Epic>
    )
  }
}

function mapStateToProps(state) {
  return {

  };
}

export default connect(mapStateToProps)(DispetcherEpic);

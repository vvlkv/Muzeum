import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import {push} from 'react-router-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

class RequestsItem extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      activeView: "main",
			activePanel: "workers",
      workerID: -1,
      post: -1,
      password: ""
		}
  }

  preRender() {
    return (
      <UI.View id="spinner" activePanel="spinner">
        <UI.Panel id="spinner">
          <UI.PanelHeader>Spinner</UI.PanelHeader>
          <div style={{ height: 100 }}>
            <UI.Spinner />
          </div>
        </UI.Panel>
      </UI.View>
    );
  }

  changeID(e) {
    this.setState({workerID: e.target.value});
  }

  changePost(e) {
    this.setState({post: e.target.value});
  }

  changePassword(e) {
    this.setState({password: e.target.value});
  }

  showEmployee(e) {
    console.log(e);
  }

  render() {
    return (
      <UI.View id="requests" activePanel="requests">
        <UI.Panel id='requests'>
          <UI.PanelHeader noShadow>Заявки</UI.PanelHeader>
            <UI.FixedLayout vertical="top">
              <UI.Tabs theme="header" type="buttons">
                <UI.HorizontalScroll>
                  <UI.TabsItem
                    onClick={() => this.setState({ activeTab6: 'all' })}
                    selected={this.state.activeTab6 === 'all'}
                  >
                    Активные
                  </UI.TabsItem>
                  <UI.TabsItem
                    onClick={() => this.setState({ activeTab6: 'users' })}
                    selected={this.state.activeTab6 === 'users'}
                  >
                    Доступные
                  </UI.TabsItem>
                  <UI.TabsItem
                    onClick={() => this.setState({ activeTab6: 'groups' })}
                    selected={this.state.activeTab6 === 'groups'}
                  >
                    История
                  </UI.TabsItem>
                </UI.HorizontalScroll>
              </UI.Tabs>
            </UI.FixedLayout>
        </UI.Panel>
      </UI.View>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(RequestsItem);

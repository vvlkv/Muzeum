import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

class RequestsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
			activePanel: 'mainscreen',
		}
  }
  render() {
    return (
        <UI.View id="requests" activePanel="mainscreen">
          <UI.Panel id='mainscreen'>
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

export default connect(mapStateToProps)(RequestsScreen);

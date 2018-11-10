import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import {push} from 'react-router-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

import * as requestActions from '../../store/createRequest/actions'
import * as requestSelectors from '../../store/createRequest/reducer'

class RequestsItem extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
			activePanel: "requests",
      activeTempRequest: null
		}
  }

  componentWillMount() {
    this.props.dispatch(requestActions.fetchTmpRequests())
  }

  changeID(e) {
    this.setState({workerID: e.target.value});
  }

  changePost(e) {
    this.setState({post: e.target.value});
  }

  showTempRequest(request) {
    console.log(request);
    this.setState({
      activePanel: "showtemprequest",
      activeTempRequest: request
    });
    this.forceUpdate();
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

  render() {
    if (!this.props.tempRequests) return this.preRender();
    return (
      <UI.Root activeView="requests">
        <UI.View id="requests" activePanel={this.state.activePanel}>
          <UI.Panel id='requests'>
            <UI.PanelHeader noShadow>Заявки</UI.PanelHeader>
              <UI.FixedLayout vertical="top">
                <UI.Tabs noShadow theme="header" type="buttons">
                  <UI.HorizontalScroll>
                    <UI.TabsItem
                      onClick={() => this.setState({ activeTab6: 'all' })}
                      selected={this.state.activeTab6 === 'all'}
                    >
                      На рассмотрении
                    </UI.TabsItem>
                    <UI.TabsItem
                      onClick={() => this.setState({ activeTab6: 'users' })}
                      selected={this.state.activeTab6 === 'users'}
                    >
                      Активные
                    </UI.TabsItem>
                    <UI.TabsItem
                      onClick={() => this.setState({ activeTab6: 'groups' })}
                      selected={this.state.activeTab6 === 'groups'}>
                      История
                    </UI.TabsItem>
                  </UI.HorizontalScroll>
                </UI.Tabs>
              </UI.FixedLayout>
              <UI.List style={{ marginTop: 60 }}>
                {this.props.tempRequests.map(request => <UI.Cell expandable description={request.remark} onClick={this.showTempRequest.bind(this, request)}>{request.remark}</UI.Cell>)}
              </UI.List>
          </UI.Panel>
          <UI.Panel id="showtemprequest">
            <UI.PanelHeader>Заявка</UI.PanelHeader>
            <UI.FormLayout>
              <UI.Input top="ID гостя" value={this.state.activeTempRequest == null ? "" : this.state.activeTempRequest.id}/>
              <UI.Input top="Описание заявки" value={this.state.activeTempRequest == null ? "" : this.state.activeTempRequest.remark}/>
              <UI.Input top="Дата создания" value={this.state.activeTempRequest == null ? "" : this.state.activeTempRequest.create_date}/>
              <UI.Input top="Помещение" value={this.state.activeTempRequest == null ? "" : this.state.activeTempRequest.location}/>
              <UI.Select>
              </UI.Select>
            </UI.FormLayout>
          </UI.Panel>
        </UI.View>
      </UI.Root>
    );
  }
}

function mapStateToProps(state) {
  return {
    tempRequests: requestSelectors.getTmpRequests(state),
    jobTypes: requestSelectors.getTypeJobs(state)
  };
}

export default connect(mapStateToProps)(RequestsItem);

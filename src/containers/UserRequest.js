import React, {Component} from 'react';
import { Panel, Spinner, PanelHeader, View, FormLayout, Select, File, platform, Button, IOS, Textarea, Div, HeaderButton, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';

import PropTypes from 'prop-types';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

import * as requestActions from '../store/userRequest/actions'
import * as requestSelectors from '../store/userRequest/reducer'

const osname = platform();

class UserRequest extends Component {

  constructor(props) {
    console.log("USER_REQUEST");
    super(props);
    autoBind(this);
    this.state = {
      activePanel: "requestView",
    }
  }

  goBack() {
    console.log("goback");
    this.setState( { activePanel: "requestView"})
  }

  postRequest() {
    this.setState( { activePanel: "thanks"})
  }

  showCongrats() {
    this.setState( { activePanel: "thanks"})
  }

  componentWillMount() {
    this.props.dispatch(requestActions.fetchJobs())
  }

  renderLoading() {
    return (
      <View activePanel="spinner">
        <Panel id="spinner">
          <PanelHeader>Spinner</PanelHeader>
          <div style={{ height: 100 }}>
            <Spinner />
          </div>
        </Panel>
      </View>
    );
  }

  render() {
    //if (!this.props.typeJobs) return this.renderLoading();
    return (
      <View id="requestView" activePanel={this.state.activePanel}>
        <Panel id="requestView">
          <PanelHeader>Заявка</PanelHeader>
          <FormLayout>
            <Textarea top="Описание" placeholder="Оставтье описание заявки" />
            <Select top="Номер зала" placeholder="Выберите номер зала">
              {this.props.typeJobs.map(job => <option value={job.id}>{job.name}</option>)}
            </Select>
            <File top="Загрузите фото" before={<Icon24Camera />} size="l">
              Открыть галерею
            </File>
             <Div>
               <Button size="xl" level="secondary" onClick={this.showCongrats.bind(this)}>Оставить заявку</Button>
             </Div>
          </FormLayout>
        </Panel>
        <Panel id="thanks">
          <PanelHeader
            left={<HeaderButton onClick={this.goBack.bind(this)}>
      				{osname === IOS ? <Icon28ChevronBack/> : <Icon24Back/>}
      			</HeaderButton>}
      		>
          Persik
        </PanelHeader>
          <Input type="text" defaultValue="Спасибл"></Input>
        </Panel>
      </View>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    typeJobs: requestSelectors.getJobTypes(state)
  };
}

export default connect(mapStateToProps)(UserRequest);

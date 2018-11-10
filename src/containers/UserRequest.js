import React, {Component} from 'react';
import { Panel, ScreenSpinner, PanelHeader, InfoRow, Progress, Alert, View, FormLayout, Select, File, platform, Button, IOS, Textarea, Div, HeaderButton, Input } from '@vkontakte/vkui';
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
    super(props);
    autoBind(this);
    this.state = {
      activePanel: "requestView",
      remark: "",
      creatorId: "",
      location: -1,
      popout: null,
      selectedFile: null,
      loaded: 0,
      urls: null
    }
  }

  goBack() {
    this.setState( { activePanel: "requestView"})
  }

  showCongrats() {
    console.log(this.state.location);
    console.log(this.state.remark);
    console.log(this.state.creatorId);
    console.log(this.state.urls);
    this.props.dispatch(requestActions.postRequest(this.state.location, this.state.remark, this.state.creatorId));
  }

  changeRemark(e) {
    this.setState({remark: e.target.value});
  }

  changeLocation(e) {
    this.setState({location: e.target.value});
  }

  handleselectedFile = event => {
    this.setState({
      selectedFile: event.target.files[0],
      loaded: 0
    })
  }

  testFile(e) {
    console.log("testFilee");
    console.log(e.target.type);
    console.log(e.target.files[0].name);
    this.state.selectedFile = e.target.files[0];//this.setState({selectedFile: e.target.files[0]});
    console.log(this.state.selectedFile.name);
    const data = new FormData();
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    this.props.dispatch(requestActions.UploadPhoto(data));
  }

  openSheet () {
    console.log(this.state.location);
    console.log(this.state.remark);
    console.log(this.state.creatorId);
    console.log(this.state.selectedFile.name);

    /*const data = new FormData()
    data.append('file', this.state.selectedFile, this.state.selectedFile.name)

    this.props.dispatch(requestActions.UploadPhoto(data));*/

    this.props.dispatch(requestActions.postRequest(this.state.location, this.state.remark, this.state.creatorId));

    this.setState({ popout:
      <Alert
        actions={[{
          title: 'Закрыть',
          autoclose: true,
          style: 'destructive'
        }, {
          title: 'Ок',
          autoclose: true,
          style: 'cancel'
        }]}
        onClose={ () => {
          console.log("Exit alert!");
          this.changeRemark({target: {value: ""}});
          this.setState({remark: ""});
          console.log(this.state.remark);
          this.setState({ popout: null }) }}
      >
        <h2>Заявка отправлена</h2>
        <p>Спасибо за участие!</p>
      </Alert>
    });
  }

  render() {
    //if (!this.props.typeJobs) return this.renderLoading();  //
    return (
      <View popout={this.state.popout} id="requestView" activePanel={this.state.activePanel}>
        <Panel id="requestView">
          <PanelHeader>Заявка</PanelHeader>
          <FormLayout>
            <Textarea top="Описание" placeholder="Оставтье описание заявки" onChange={this.changeRemark.bind(this)}/>
            <Select top="Номер зала" placeholder="Выберите номер зала" onChange={this.changeLocation}>
              {this.props.locations.map(location => <option value={location.id}>{location.id} - {location.name}</option>)}
            </Select>
            <File top="Загрузите фото" before={<Icon24Camera />} size="l" onChange={this.testFile}>
              Открыть галерею
            </File>
            <Div>
                <Progress value={Math.round(this.state.loaded, 2)} />
            </Div>
             <Div>
               <Button size="xl" level="secondary" onClick={this.openSheet.bind(this)}>Оставить заявку</Button>
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
  return {
    locations: requestSelectors.getLocations(state),
    urls: requestSelectors.photoLoad(state)
  };
}

export default connect(mapStateToProps)(UserRequest);

import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import {push} from 'react-router-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

class WorkersItem extends Component {

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

  render() {
    return (
      <UI.Root activeView={this.state.activeView}>
        <UI.View id="main" activePanel={this.state.activePanel}>
          <UI.Panel id='workers'>
            <UI.PanelHeader
              left={<UI.HeaderButton onClick={() => this.setState({ activePanel: "addworker"})}>Добавить</UI.HeaderButton>}>
              Сотрудники
            </UI.PanelHeader>
          </UI.Panel>
          <UI.Panel id="addworker">
            <UI.PanelHeader>Добавить</UI.PanelHeader>
            <UI.FormLayout>
              <UI.Input
                type="ID"
                top="ID сотрудника"
                bottom="Введите ID ВКонтакте сотрудника, которого необходимо зарегистрировать"
                onChange={this.changeID}/>
              <UI.Select placeholder="Должность" onChange={this.changePost}>
              </UI.Select>
              <UI.Input
                type="password"
                top="Пароль"
                onChange={this.changeID}/>
            </UI.FormLayout>
            <UI.Button size="xl" level="secondary" alignment="bottom">Добавить сотрудника</UI.Button>
          </UI.Panel>
        </UI.View>
      </UI.Root>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(WorkersItem);

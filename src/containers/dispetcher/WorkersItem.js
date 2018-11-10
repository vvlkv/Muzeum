import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import {push} from 'react-router-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

import * as employeeActions from '../../store/createEmployee/actions'
import * as employeeSelectors from '../../store/createEmployee/reducer'
import * as requestSelectors from '../../store/userRequest/reducer'

const employers = [
  {name: "BANKA asd", post: "IOS developer"},
  {name: "BANKA UBIJCA", post: "IOS developer"},
  {name: "BANKA UBIJCA", post: "IOS developer"},
  {name: "BANKA UBIJCA", post: "IOS developer"},
  {name: "BANKA UBIJCA", post: "IOS developer"},
  {name: "BANKA UBIJCA", post: "IOS developer"}
];

class WorkersItem extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      activeView: "main",
			activePanel: "workers",
      workerID: -1,
      post: -1,
      timeTable:-1,
      password: "",
      area: -1,
      workPhone: ""
		}
  }

  changeID(e) {
    this.setState({workerID: e.target.value});
  }

  changePost(e) {
    this.setState({post: e.target.value});
  }

  changeTimeTable(e) {
    this.setState({timeTable: e.target.value});
  }

  changePassword(e) {
    this.setState({password: e.target.value});
  }

  changeArea(e) {
    this.setState({area: e.target.value})
  }

  changeWorkphone(e) {
    this.setState({workPhone: e.target.value})
  }

  showEmployee(e) {
  }

  componentWillMount() {
    this.props.dispatch(employeeActions.fetchPosts());
    this.props.dispatch(employeeActions.fetchTimeTables());
  }

  registerNewEmployee() {
    this.props.dispatch(employeeActions.createEmployee("Иван", "Иванов", this.state.area, "1995-20-10", this.state.workerID, this.state.timeTable, "WRK", this.state.password, this.state.post, "89213877640", this.state.workPhone, "vvlkv@icloud.com"))
    this.setState({activePanel: "workers"})
  }

  preRender() {
    return(
      <UI.View id="spinner" activePanel="spinner">
        <UI.Panel id="spinner">
          <div style={{ height: 100 }}>
            <UI.Spinner />
          </div>
        </UI.Panel>
      </UI.View>
    )
  }

  render() {
    if (!this.props.posts || !this.props.timeTables) return  this.preRender();
    return (
      <UI.Root activeView={this.state.activeView}>
        <UI.View id="main" activePanel={this.state.activePanel}>
          <UI.Panel id='workers'>
            <UI.PanelHeader
              left={<UI.HeaderButton onClick={() => this.setState({ activePanel: "addworker"})}>Добавить</UI.HeaderButton>}>
              Сотрудники
            </UI.PanelHeader>
            <UI.Group>
              <UI.List>
                {employers.map(employee => <UI.Cell expandable description={employee.post} onClick={this.showEmployee.bind(this, employee.name)}>{employee.name}</UI.Cell>)}
              </UI.List>
            </UI.Group>
          </UI.Panel>
          <UI.Panel id="aboutemployee">
            <UI.PanelHeader>Про сотрудника</UI.PanelHeader>
          </UI.Panel>
          <UI.Panel id="addworker">
            <UI.PanelHeader>Добавить</UI.PanelHeader>
            <UI.FormLayout>
              <UI.Input
                type="ID"
                top="ID сотрудника"
                bottom="Введите ID ВКонтакте сотрудника, которого необходимо зарегистрировать"
                onChange={this.changeID}/>
              <UI.Select top="Должность сотрудника" placeholder="" onChange={this.changePost}>
                {this.props.posts.map(post => <option value={post.id}>{post.post}</option>)}
              </UI.Select>
              <UI.Select top="Время работы" placeholder="" onChange={this.changeTimeTable}>
                {this.props.timeTables.map(timetable => <option value={timetable.id}>{timetable.timetable}</option>)}
              </UI.Select>
              <UI.Select top="Место работы" placeholder="" onChange={this.changeArea}>
                {this.props.locations.map(location => <option value={location.id}>{location.name}</option>)}
              </UI.Select>
              <UI.Input
                type="workphone"
                top="Рабочий телефон"
                onChange={this.changeWorkphone}/>
              <UI.Input
                type="password"
                top="Пароль"
                onChange={this.changeID}/>
            </UI.FormLayout>
            <UI.Button size="xl" level="secondary" onClick={this.registerNewEmployee.bind(this)}>Зарегистрировать</UI.Button>
          </UI.Panel>
        </UI.View>
      </UI.Root>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: employeeSelectors.getPosts(state),
    timeTables: employeeSelectors.getTimeTables(state),
    locations: requestSelectors.getLocations(state)
  };
}

export default connect(mapStateToProps)(WorkersItem);

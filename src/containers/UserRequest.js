import React, {Component} from 'react';
import { Panel, PanelHeader, View, FormLayout, Select, File, platform, Button, IOS, Textarea, Div, HeaderButton, Input } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';

import PropTypes from 'prop-types';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Camera from '@vkontakte/icons/dist/24/camera';

import * as requestActions from '../store/userRequest/actions'
import * as requestSelectors from '../store/userRequest/reducer'

const osname = platform();

const thematics = [
    {id: 3201, name: "Аренда автомобилей"},
    {id: 3273, name: "Автотовары"},
    {id: 3205, name: "Автосалон"},
    {id: 3282, name: "Автосервис"},
    {id: 3283, name: "Услуги для автовладельцев"},
    {id: 3284, name: "Велосипеды"},
    {id: 3285, name: "Мотоциклы и другая мототехника"},
    {id: 3286, name: "Водный транспорт"},
    {id: 3287, name: "Автопроизводитель"},
    {id: 3288, name: "Автомойка"},
    {id: 3117, name: "Автошкола"},
    {id: 3118, name: "Детский сад"},
    {id: 3119, name: "Гимназия"},
    {id: 3120, name: "Колледж"},
    {id: 3121, name: "Лицей"},
    {id: 3122, name: "Техникум"},
    {id: 3123, name: "Университет"},
    {id: 3124, name: "Школа"},
    {id: 3125, name: "Институт"},
    {id: 3126, name: "Обучающие курсы"},
    {id: 3276, name: "Дополнительное образование"},
    {id: 3275, name: "Тренинг, семинар"},
    {id: 3127, name: "Танцевальная школа"}
  ];

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

  showCongrats() {
    this.setState( { activePanel: "thanks"})
  }

  componentWillMount() {
    this.props.dispatch(requestActions.fetchJobs())
  }

  render() {
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

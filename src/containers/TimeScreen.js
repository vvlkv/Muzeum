import React, {Component} from 'react';
import { Panel, Button, Group, Div, PanelHeader, Epic, Tabbar, TabbarItem, View, Input, Textarea } from '@vkontakte/vkui';
import {connect} from 'react-redux';
import autoBind from 'react-autobind';
import * as timeActions from '../store/time/actions'
import * as timeSelectors from '../store/time/reducer'

class TimeScreen extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      value: "asdasd"
    };
    this.changeName = this.changeName.bind(this);
  }

  componentDidMount() {
    // this.props.dispatch(timeActions.fetchTime());
    // this.props.dispatch(timeActions.fetchTime());
  }

  changeName(e) {
        this.setState({
            value: e.target.value
        });
    }

  render() {
    return (
      <View id='mainView' activePanel='mainPanel'>
        <Panel id='mainPanel'>
          <PanelHeader>TimeView</PanelHeader>
          <Button size="xl" level="2" onClick={this.getActualTime}>
            What time is it??
          </Button>
          <Button size="xl" level="2" onClick={this.getBobTime}>
            Bob time!
          </Button>
          <Input type="text" alignment="center" value={this.props.lastTime}/>
          <Input type="text" alignment="center" value={this.props.lastTime}/>
          <Textarea top="Любимая музыка" placeholder="Группы, исполнители, продюссеры" onChange={this.changeName}/>
        </Panel>
      </View>
    );
  }

  getBobTime() {
    console.log(this.state.value);
    // this.props.dispatch(timeActions.fetchBobTime())
  }

  getActualTime() {
    console.log("getActualTime");
    this.props.dispatch(timeActions.fetchTime())
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps");
  return {
    lastTime: timeSelectors.getLastTime(state)
  };
}

export default connect(mapStateToProps)(TimeScreen);

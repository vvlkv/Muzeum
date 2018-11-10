import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import Icon24Back from '@vkontakte/icons/dist/24/back';
import Icon24Search from '@vkontakte/icons/dist/24/search';

class WorkersItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
			activePanel: 'workers'
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
  render() {
    // if (!this.props.jobTypes) return this.preRender();
    return (
      <UI.View id="workers" activePanel="workers">
        <UI.Panel id='workers'>
          <UI.PanelHeader
            left={<UI.HeaderButton><Icon24Back/></UI.HeaderButton>}/>
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
  console.log("mapStateToProps");
  return {
  };
}

export default connect(mapStateToProps)(WorkersItem);

import React, {Component} from 'react';
import * as UI from '@vkontakte/vkui';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';
import autoBind from 'react-autobind';

import * as requestActions from '../store/createRequest/actions'
import * as requestSelectors from '../store/createRequest/reducer'

class AdvsScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
			activePanel: 'advs'
		}
  }

  componentWillMount() {
    this.props.dispatch(requestActions.fetchAvds())
  }

  render() {
    return (
        <UI.View id="advs" activePanel="advs">
          <UI.Panel id='advs'>
            <UI.PanelHeader noShadow>Объявления</UI.PanelHeader>
              <UI.List>
                {this.state.avds.map(avd => <UI.Cell expandable description={avd.create_date}>{avd.remark}</UI.Cell>)}
              </UI.List>
          </UI.Panel>
        </UI.View>
    );
  }
}

function mapStateToProps(state) {
  return {
    avds: requestSelectors.getAvds(state),
  };
}

export default connect(mapStateToProps)(AdvsScreen);

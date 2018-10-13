import React from 'react';
import connect from '@vkontakte/vkui-connect';
import {View} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activePanel: 'home',
      fetchedUser: null,
      token: null,
      geo: {
        available: 0,
        lat: null,
        long: null
      }
    };
  }

  componentDidMount() {
    connect.subscribe((e) => {
      switch (e.detail.type) {
        case 'VKWebAppGetUserInfoResult':
          this.setState({fetchedUser: e.detail.data});
          break;
        case 'VKWebAppGeodataResult':
          this.setState(() => ({geo: e.detail.data}));
          break;
        case 'VKWebAppAccessTokenReceived':
          this.setState(() => ({token: e.detail.data}));
          break;
        default:
          console.log(e.detail.type);
      }
    });
    connect.send('VKWebAppGetUserInfo', {});
    connect.send("VKWebAppGetGeodata", {});
    connect.send("VKWebAppGetAuthToken", {"app_id": 6714171});
  }

  go = (e) => {
    this.setState({activePanel: e.currentTarget.dataset.to})
  };

  render() {
    return (
      <View activePanel={this.state.activePanel}>
        <Home id="home" fetchedUser={this.state.fetchedUser} geo={this.state.geo} token={this.state.token} go={this.go}/>
        <Persik id="persik" go={this.go}/>
      </View>
    );
  }
}

export default App;

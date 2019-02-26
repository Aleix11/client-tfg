import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import CustomHeader from "./CustomHeader";
import {Button, Container, Text} from "native-base";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {

    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
        <Container>
          <CustomHeader navigation={ this.props.navigation } />
          <ExpoConfigView />
        </Container>
    )
  }
}

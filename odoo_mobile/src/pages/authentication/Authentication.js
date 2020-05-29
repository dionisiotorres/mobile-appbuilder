import React, { Component } from 'react';
import { View, Image, Keyboard, Button, KeyboardAvoidingView, Text, Platform } from 'react-native';
// import {
//   Button,
//   Layout,
// } from 'react-native-ui-kitten';
import styles from './styles';
import I18n from "../../i18n/i18n";

export default class Authentication extends Component {

  constructor(props) {
    super(props)
    const TAG = 'AUTHENTICATION'
    this.state = {
      domainName: '',
      session_id: '',
      domainNameError: false,
      ranDomId: 0,
      loading: false,
      isEnabledSignUp: false,
    }
  }

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardDidShow);
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardDidHide);

    // fetch('https://raw.githubusercontent.com/boomlord/wcloud-configuration/master/db.json', {
    //   method: 'GET',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',
    //     'Cache-Control': 'no-cache',
    //   },
    // })
    // .then(response => response.json())
    // .then((responseJson) => {
    //   console.log(responseJson);
    //   this.setState({
    //     isEnabledSignUp: responseJson.signUp.isEnabled,
    //   })
    // })
    // .catch((error) => {
    //   // console.error(error);
    // });
  }

  componentWillUnmount() {
    if (this.keyboardDidHideListener) {
      this.keyboardDidHideListener.remove();
    }
    if (this.keyboardDidShowListener) {
      this.keyboardDidShowListener.remove();
    }

  }

  componentDidMount() {

  }

  _keyboardDidShow() {
    // alert('Keyboard Shown');
  }

  _keyboardDidHide() {
    // alert('Keyboard Hidden');
  }

  login() {
    this.props.navigation.navigate('DomainCheck_Page', {});
  }

  signUp() {
    this.props.navigation.navigate('SignUp_Page', {});
  }
  render() {
    return (
      <KeyboardAvoidingView style={styles.wrapper} behavior="padding">
        <View style={styles.wrapperContainer}>
          <Image source={require('../../../images/logo.png')}
            style={styles.imageLogo}
            resizeMode='contain' />

          {/* <Touchable status="success" onPress={() => this.login()} style={styles.formBtn}>
            <Text>{I18n.t('lbl_login')}</Text>
          </Touchable> */}

          <View style={styles.formWrapper}>
            <View style={{ padding: 5, height: 30, width: 120 }}>
              <Button title={I18n.t('lbl_login')}
                color="#5cb85c"
                onPress={() => this.login()} style={styles.formBtn}>
              </Button>
            </View>
            {this.state.isEnabledSignUp && <Touchable onPress={() => this.signUp()} style={styles.formBtn}>
              <Text>{I18n.t('lbl_signup')}</Text>
            </Touchable>}
          </View>
        </View>
      </KeyboardAvoidingView>
    )
  }
}

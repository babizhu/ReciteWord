/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
import AudioPlayer from 'react-native-audioplayer';
import GameObject from './logic';

import styles from './app/styles/MainStyle';

let {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View,
    } = React;

class ReciteWord extends React.Component{

    componentDidMount() {
        this.logicObj = new GameObject();

        //console.log( this.currentWord.word);
    }

    render() {

        return (
            <View style={styles.container}>

                <View style={styles.wordContainer}>
                    <View style={styles.miscNumber}>
                        <Text style={styles.miscTitle}>初中英语七年级上册</Text>
                        <Text style={styles.miscTitle}> </Text>
                        <Text style={styles.miscBigNumber}>生词听写</Text>
                    </View>

                    <TouchableHighlight underlayColor='#dddddd' onPress={this.aa.bind(this)}>
                        <Icon
                            name='fontawesome|play-circle'
                            size={120}
                            color='#2ecc71'
                            style={styles.beer}
                            />
                    </TouchableHighlight>

                    <TouchableHighlight underlayColor='#dddddd' onPress={this.backward.bind(this)}>
                        <Icon
                            name='fontawesome|fast-backward'
                            size={60}
                            color='#2ecc71'
                            style={styles.beer}
                            />
                    </TouchableHighlight>
                    <TouchableHighlight underlayColor='#dddddd' onPress={this.forward.bind(this)}>
                        <Icon
                            name='fontawesome|fast-forward'
                            size={60}
                            color='#2ecc71'
                            style={styles.beer}
                            />
                    </TouchableHighlight>


                </View>

            </View>
        );
    }
    aa () {
        let currentWord = this.logicObj.giveMeAWord();
        console.log(JSON.stringify(currentWord));
        AudioPlayer.play('sound/' + currentWord.word + '.mp3');
    }

    forward() {
        this.logicObj.forward();
        this.aa();
    }
    backward() {
        this.logicObj.backward();
        this.aa();

    }
}
AppRegistry.registerComponent('ReciteWord', () => ReciteWord);

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var { Icon, TabBarIOS, Spinner} = require('react-native-icons');
var AudioPlayer = require('react-native-audioplayer');
var GameObject = require('./logic');
var {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    TextInput,
    View,
    } = React;

var ReciteWord = React.createClass({
    componentDidMount: function () {
        this.logicObj = new GameObject();

        //console.log( this.currentWord.word);
    },

    render: function () {

        return (
            <View style={styles.container}>

                <View style={styles.wordContainer}>
                    <View style={styles.miscNumber}>
                        <Text style={styles.miscTitle}>初中英语七年级上册第一单元</Text>
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
    },
    aa:function(){
        let currentWord = this.logicObj.giveMeAWord();
        console.log('sound/'+currentWord.word+'.mp3')
        AudioPlayer.play('sound/'+currentWord.word+'.mp3');
    },

   forward:function() {
       this.logicObj.forward();
       this.aa();
   },
    backward:function(){
        this.logicObj.backward();
        this.aa();

    }
});
var styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginTop: 20,
    },
    misc: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2ecc71',
        padding: 10,
    },
    miscSectionHeader: {
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#27ae60'
    },
    miscSectionHeaderText: {
        fontSize: 18,
        color: '#ffffff',
        marginLeft: 15,
    },
    miscNumbersRow: {
        flex: 1,
        flexDirection: 'row',
    },
    miscNumber: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    miscTitle: {
        color: '#555555'
    },
    miscBigNumber: {
        fontSize: 30,
        color: '#111111'
    },
    wordContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eeeeee'
    },
    word: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 70
    },
    tip: {
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30
    },
    keyboardContainer: {
        flex: 1,
    },
    keyboard: {
        flex: 1,
        flexDirection: 'column',
        margin: 3,
    },
    keyboardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    key: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bbbbbb',
        margin: 3,
    },
    keyDisabled: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        margin: 3,
    },
    keyText: {
        fontSize: 20,
    },
    fakeKey: {
        flex: 1,
        margin: 5,
    },

    searchInput: {
        height: 36,
        padding: 4,
        marginRight: 5,
        flex: 4,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#48BBEC',
        borderRadius: 8,
        color: '#48BBEC'
    },
    beer: {
        flexDirection: 'column',
        width: 170,
        height: 170,
        alignItems: 'center'
    },
    twitterIcon: {
        flex: 1,
        width: 40,
        height: 40
    },
});


AppRegistry.registerComponent('ReciteWord', () => ReciteWord);

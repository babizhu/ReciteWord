/**
 * Created by liukun on 15/11/10.
 * 主要的styles文件
 */

'use strict';

import React from 'react-native';

let { StyleSheet } = React;

let styles = StyleSheet.create({
    deleteIcon: {
        width: 20,
        height: 20,
        margin: 10,
        opacity: 0.6
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        marginTop: 20
    },
    misc: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#2ecc71',
        padding: 10
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
        marginLeft: 15
    },
    miscNumbersRow: {
        flex: 1,
        flexDirection: 'row'
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
        flex: 1
    },
    keyboard: {
        flex: 1,
        flexDirection: 'column',
        margin: 3
    },
    keyboardRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    key: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bbbbbb',
        margin: 3
    },
    keyDisabled: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#ffffff',
        margin: 3
    },
    keyText: {
        fontSize: 20
    },
    fakeKey: {
        flex: 1,
        margin: 5
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
    }


});
export { styles as default };
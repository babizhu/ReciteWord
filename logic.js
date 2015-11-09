/**
 * Created by liukun on 15/9/24.
 * 背单词的业务逻辑
 */

//import WordsData from "./WordsData.js"

class GameObject {
    constructor() {

        var WordsData = require('./WordsData')
        this.words = new WordsData().getWordsByUnit(1);
        console.log("The count of words is " + this.words.length );
        this.currentIndex = 0;
    }

    startGame() {
        console.log("游戏开始啦");
        //this.currentWord = this.words[0];
    }

    isEnd(){
        return this.currentIndex > this.words.length - 1;
    }
    forward(){
        if( this.isEnd() ){
            console.log("本单元单词背完了");
            this.currentIndex = 0;
        }else{
            this.currentIndex++;
        }
    }
    backward(){
        if( this.currentIndex == 0 ){
            return;
        }
        this.currentIndex--;
    }
    giveMeAWord() {

        let word = this.words[this.currentIndex];
        let wordData = word.split(" ");
        //console.log( wordData[1] );
        return { word: wordData[0], symbol: wordData[1], mean: wordData[2]};
        //var pos = Math.floor(Math.random() * this.words.length);
        //this.currentWord = this.words[pos];
        //
        //
        //
        ////this.words.remove( this.currentWord );
        //for(i=0;i<this.words.length;i++){
        //    console.log(this.words[i])
        //}
        //this.currentWordDisplay = "";
        //var i;
        //for( i = 0; i < this.currentWord.length; i++ ){
        //    this.currentWordDisplay += "*";
        //}
        ////var tipPos = Math.floor(Math.random() * this.currentWord.length);
        //var tipPos = pos;
        //var tip = this.tips[tipPos]
        //return { word: this.currentWordDisplay, tip: tip };
        ////return "{ word : '" + this.currentWordDisplay + "', tip : '" + this.tips[pos] + "'}";
        ////{
        ////    { word: '*****',
        ////        totalWordCount: 1,
        ////        wrongGuessCountOfCurrentWord: 0 } }
        ////return this.currentWordDisplay;
    }


    getYourResult(callback) {
        var requestBody = {
            sessionId: this.sessionId,
            action: "getResult"
        }
        this.fetchData(requestBody, callback)
    }

} // end class GameObject

module.exports = GameObject;
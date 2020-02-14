const reader = require('readline-sync');
const Line = require('./app');

const myLine = new Line();

var text = reader.question('メッセージを入力してください: ');
if(text != '') {
	myLine.notify(text);
}
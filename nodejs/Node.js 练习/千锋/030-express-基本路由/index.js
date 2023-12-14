const express = require('express');

const app = express();




// 匹配根路径的请求
app.get('/', function (req, res) {
    res.send('root');
});

// 匹配 /about 路径的请求
app.get('/about', function (req, res) {
    res.send('about');
});

// 匹配 /random.text 路径的请求
app.get('/random.text', function (req, res) {
    res.send('random.text');
});



// 匹配 acd 和 abcd
app.get('/ab?cd', function(req, res) {
    res.send('ab?cd');
});

// 匹配 /ab/******
app.get('/ab/:id', function(req, res) {
    res.send('aaaaaaa');
});

// 匹配 abcd、abbcd、abbbcd等
app.get('/ab+cd', function(req, res) {
    res.send('ab+cd');
});

// 匹配 abcd、abxcd、abRABDOMcd、ab123cd等
app.get('/ab*cd', function(req, res) {
    res.send('ab*cd');
});

// 匹配 /abe 和 /abcde
app.get('/ab(cd)?e', function(req, res) {
    res.send('ab(cd)?e');
});


// 匹配任何路径中含有 a 的路径：
app.get(/a/, function(req, res) {
    res.send('/a/');
});

// 匹配 butterfly、dragonfly，不匹配 butterflyman、dragonfly man等
app.get(/.*fly$/, function(req, res) {
    res.send('/.*fly$/');
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
})

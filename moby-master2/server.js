var path = require('path');
var moby = require('./');
var express = require('express');
var app = module.exports = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, '/public')));

app.use('/', express.static('public'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
  res.render('index')
});

app.get('/search', function (req, res) {
  res.render('search', {
    q: req.query.q,
    searchResults: moby.search(req.query.q),
    reverseSearchResults: moby.reverseSearch(req.query.q)
  })
});

app.get('/search_return_string', function (req, res) {
  res.send(moby.search(req.query.q)+"");
});

app.get('/search_return_json', function (req, res) {
  var obj = {};
  obj.content = moby.search(req.query.q);
  res.send(obj);
});

app.get('/search_multiple_return_json', function (req, res) {
  var myResponse = {};
  myResponse.arr = [];
  //console.log(req.query);
  for(var key in req.query) {
    var value = req.query[key];
    //console.log(value);
    var temp = {};
    temp.search_term = value;
    temp.search_result = moby.search(value);
    temp.reversed_search_result = moby.reverseSearch(value);
    myResponse.arr.push(temp);
  }
  res.send(myResponse);
});

app.get('/similarity', function (req, res) {
  try{
    //console.log(req.query.q);
    const splitedReq = req.query.q.split("^");
    const array1 = splitedReq[0].split(";").filter(e=>e.trim().length > 0);
    //console.log(array1);
    const array2 = splitedReq[1].split(";").filter(e=>e.trim().length > 0);
    //console.log(array2);
    const sim = similarityBetween(array1,array2);
    res.send({'sim':sim});
  }catch (ex) {
    console.log(ex);
    res.send({'sim':0});
  }

});

if (!module.parent) {
  app.listen(app.get('port'), function () {
    console.log('Moby is running at localhost:' + app.get('port'))
  })
}




function searchBothNormalAndReverse(word){
  const normal = moby.search(word);
  const reversed = moby.reverseSearch(word);
  reversed.forEach((item)=>{
    if( ! normal.includes(item)){
      normal.push(item);
    }
  });
  return normal;
}
function similarity(word1,word2){
  const searchResult1 = searchBothNormalAndReverse(word1);
  const searchResult2 = searchBothNormalAndReverse(word2);
  let intersectionCount = 0;
  searchResult1.forEach((item)=>{
    if(searchResult2.includes(item)){
      intersectionCount++;
    }
  });
  const sumSizeUnique = searchResult1.length+searchResult2.length-intersectionCount;
  let jaccard = sumSizeUnique === 0 ? 0 : intersectionCount*1.0/sumSizeUnique;
  if(jaccard < 0) jaccard = 0;
  //console.log(word1+'\t\t'+word2+'\t\t'+jaccard);
  return jaccard;
}
function similarityBetween(wordList1,wordList2){
  let max_sim = 0;
  for (let i = 0; i < wordList1.length; i++) {
    for (let j = 0; j < wordList2.length; j++) {
      const sim = similarity(wordList1[i],wordList2[j]);
      if(sim > max_sim){
        max_sim = sim;
      }
    }
  }
  return max_sim;
}
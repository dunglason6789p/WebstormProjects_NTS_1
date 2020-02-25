var moby = require('moby');

// console.log(moby.search('mad'));
// console.log(moby.search('smaragdine'));
// console.log(moby.reverseSearch('smaragdine'));

// //const searchResult1 = moby.search('decadent');
// const searchResult1 = moby.search('decadence');
// const searchResult2 = moby.search('depravity');

// const searchResult1 = moby.search('car');
// const searchResult2 = moby.search('bike');

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

function similarityAmong(words){
    let max_sim = 0;
    for (let i = 0; i < words.length-1; i++) {
        for (let j = i+1; j < words.length; j++) {
            const sim = similarity(words[i],words[j]);
            if(sim > max_sim){
                max_sim = sim;
            }
        }
    }
    return max_sim;
}

//similarityAmong('proactive','voluntarily','vivacious','dynamic');
console.log(
    similarityAmong(['active','proactive','voluntary','vivacious','dynamic'])
);
console.log(
    similarityBetween(['active','proactive'],['voluntary','vivacious','dynamic'])
);
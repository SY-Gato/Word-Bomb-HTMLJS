//import {FrozenTrie} from './SuccinctTrieData.js';
//import { FrozenTrie } from "./SteveHanovSuccinctTrie";
//import {FrozenTrie} from './SteveHanovSuccinctTrie.js';
import {FrozenTrie} from './SteveHanovSuccinctTrie2.js';




//const alphabet = 
const checkingKey = "abcdefghijklmnopqrstuvwxyz";
//const dictLink = "Alpha_words_stored.json";
//const phrasesLink = "created3.txt";
//const dictLI
//const dictLink = "file:///C:/Users/seany/OneDrive/Documents/School Word Bomb/School Word Bomb 2/Rewrite/Rewru/Other Python Test/HOPEFULLYFINALREWRITE1/Alpha_words_stored.json"
//const dictLink = "file:///C:\Users\seany\OneDrive\Documents\School Word Bomb\School Word Bomb 2\Rewrite\Rewru\Other Python Test\HOPEFULLYFINALREWRITE1\Alpha_words_stored.json"'
//const dictLink = "file:///C:\Users\seany\OneDrive\Documents\/School Word Bomb/School Word Bomb 2/Rewrite/Rewru/Other Python Test/HOPEFULLYFINALREWRITE1/Alpha_words_stored.json";
//const dictLink = "file:///C:/Users/seany/OneDrive/Documents/School Word Bomb/School Word Bomb 2/Rewrite/Rewru/Other Python Test/HOPEFULLYFINALREWRITE1/Alpha_words_stored.json";
//const phrasesLink = "file:///C:/Users/seany/OneDrive/Documents/School Word Bomb/School Word Bomb 2/Rewrite/Rewru/Other Python Test/HOPEFULLYFINALREWRITE1/created3.txt";
//const dictLink = "./Alpha_words_stored.json";
const phrasesLink = "./created3.txt";
//
//cib
//const dictLink = "./cread"
//
//
const dictLink = "./createdDict1.json";
//



//let currentText;
let currentText = "";

let requiredText = "";

let toDraw = [];


let canvas;
let width;
//li
//let height;;
let height;
//let ctx'
let ctx;
//
let centerx, centery;
//


//lett
let addedMaxTime = 10000; // MS. 10 sec
//let acct
let actualMaxTime = 10000; // Added. MS.
//let startCountdownTT
let startCountdownTime = 0;
//
let currentTime;
//

//const fullCircle = 2 * Math.PI;
//const fullCircle = Math.Pi
//cp
const fullCircle = Math.PI * 2;

// Rendering

//let possible;
let possible = [];
let matchIndex = -1;
//let endML = 0-
//le 
let endML = 0;
//
let endML2 = 0;
//
//
///index
let index = 0;
//
let half = 0;
//let drawL
let drawRight = 0;

const letterBoxSpacing = 5;
const letterBoxWidth = 23;
const letterBoxHeight = 27;
const letterBoxCornerRadius = 6;
const letterBoxActualOffsetX = letterBoxWidth / 2;
const letterBoxActualOffsetY = 0 - ((letterBoxHeight / 2) + letterBoxCornerRadius);
//const drawOffset = letterBoxWidth _ 
//const drawOoffset 
const drawOffset = letterBoxWidth + letterBoxSpacing;

let drawLeft = 0;
//
let drawLeft2 = 0;
//

//const de
let textDrawLocation = 0;
//
//let et
let offsetDrawy = 0;
//


let dict;
//let pr
//let letterCombinations = [];
let letterCombinations;
//
let failedCount = 0;
let correctCount = 0;
//
//
//let 
let endListLength = 0;
//


//function getRandomCombination 
function getRandomCombination() {
    //return 
    //return letterCombinations[]
    return letterCombinations[Math.floor(Math.random() * letterCombinations.length)];
}
//
function processNewPhrase() {
//
    let possible2 = [];

    //possible/
    //p[o]
    //possible.length = 9
    possible.length = requiredText.length;

    //let calc1 = requiredText.split("";)
    //let calc1 = requiredText.split("";)
    let calc1 = requiredText.split("");
    //for (let calc2 = 0; calc2 < calc1.lent)
    //for l
    //for (let calc2 = 0.)
    //for let calc
    //for (let calc2 = 0; calc2 < calc1.length; calc2++) {
    //
    //for let()
    for (let calc2 = 0; calc2 < requiredText.length; calc2 ++) {
    //
        //
        //possible2.push(calc1.join("");)
        //possible2.push(calc1.join(""))
        //possible2.push(calc1,j)
        //possible2.push(calc1, )
        //possible2.push(calca)
        possible2.push(calc1.join(""));

        possible[calc2] = calc1.join("");

        calc1.pop();
    }
    //
    //possible.length = 0;
    //posis
    //possible = possible.concat(possible2.splice(0, possible2.length));
    //
    //possible = possible2.sl
    //possible = possible2.splice(0, possible2.length);
    //
    //
//console.o
    //console.log(p)
    //o
    console.log(requiredText);
    //
}
//

//
let loadedFiles = false;
//
//
let loadedFileCount = 0;
//
//function loadDictioanary
function loadDictionary() {
    //
    //fetch(dictLink, {
        //"method": "H"
    //    "method": "GET"
    //}).them
    /*fetch(dictLink, {
        "method": "GET"
    //}).then("")
    }).then((res) => {
        //
        res.text();
    //})
    //}).then((txt) +)
    //}).then((txt) += {
    //    
    //})
    }).then((txt) => {
        //
        console.log(txt.length);
        //
        //
        //let jsonObject = JSON.Pa
        let jsonObject = JSON.parse(txt);
        //
        //let newDict = 
        //dict = Frozen
        //dict = new FrozenTrie()
        //dict = new FrozenTrie()
        //dict = new FrozenTrie(jo)
        //dict = new FrozenTrie(jsonObject.trie, jsonObject.directory, jsonObject.N)
        //dict = new FrozenTrie(jsonObject.trie, jsonObject.dr)
        dict = new FrozenTrie(jsonObject.trie, jsonObject.directory,jsonObject.nodeCount);
        loadedFileCount += 1;
        //if (load)
        if (loadedFileCount == 2) {
            loadedFiles = true;
        }
    })*/
   //fetch(dictLink, {
   // 
   //})
   //fetch(dictLink).then(rex => rex.text()).then((txt) +>)
   //fetch(dictLink).then(res => render.)
   //fetch(dictLink).then(res => res.txt)
   //fetch(dictLink).then(res => res.text()).then(txt => {
//
    //console.log(txt.length);
   //});
   //fetch(dictLink, {
   // "method": "GET"
   //}).then(res => res.text()).then(txt => {
//
    //let jsonObject = JSON.parse(txt);
//
    //dict = new FrozenTrie(jsonObject.trie, jsonObject.directory, jsonObject.nodeCount);
//
    //loadedFileCount += 1;
    //if ()
   //});
    //fetch(dictLink).then(res => {})
    //    fet
    fetch(dictLink).then(res => res.text()).then(txt => {
//
        let jsonObject = JSON.parse(txt);

        //var data = {
        //jsonObject = []
        //jsonObject = {
        //    "nodeCount": 37,
        //    "directory": "BMIg",
        //    "trie": "v2qqqqqqqpIUn4A5JZyBZ4ggCKh55ZZgBA5ZZd5vIEl1wx8g8A"
        // };

        dict = new FrozenTrie(jsonObject.trie, jsonObject.directory, jsonObject.nodeCount);
        loadedFileCount += 1;
        if (loadedFileCount == 2) {
            //loadedFiles = true'
            loadedFiles = true;
        }
    });
}

//function loadPhrases 
//function lkoad
function loadPhrases() {
    //fetch(fra)
    /*fetch(phrasesLink, {
        "method": "GET"
    //}).then((res) +>)
    //}).tj
    }).then((res) => {
        res.text();
    }).then((txt) => {
        //let splitted
        //phrases

        //letterCombinations = txt.split
        letterCombinations = txt.split(/\r?\n/);
        //

        //getRandomCombination
        requiredText = getRandomCombination();
        //
        processNewPhrase();
        //
        if (loadedFileCount == 2) {
            loadedFiles = true;
        }
        //
    })*/
   //
   //fetch(phrasesLink).then(res = )
   fetch(phrasesLink).then(res => res.text()).then(txt => {
    //letter
        //letterCombinations = 
        letterCombinations = txt.split(/\r?\n/);

        //letterCombinations = letterCombinations.slic
        letterCombinations = letterCombinations.slice(0, 1000); // Maks
        // Makes it easei
        // makes it easier (?)


        //letterCombinations = ["he", "el", "ll", "lo"];

        requiredText = getRandomCombination();
        //
        //requiredText = "ari";
        //
        //
    //requiredText = "are";
        //requiredText = "ari";
        //requiredText = "ll";
        //render
        //requiredText = "ari";
        //
        processNewPhrase();

        processNormalKey();

        loadedFileCount += 1;
        if (loadedFileCount == 2) {
            loadedFiles = true;
        }
   })
}

//const normalTextW
const normalTextBoxColor = "white";
//const y
//const typew
const typedRequiredTextColor = "rgb(98, 66, 227)";
//const nonTypedRequit
//const nonTt
//const nonTypedRequiredTextColor = "rg"
const nonTypedRequiredTextColor = "gray";
//
//
//function roundedRect(x, y, width, height, radius) {
//    ctx.beginPath();
//    ctx.moveTo(x, y + radius);
//    ctx.arcTo(x, y + height, x + radius, y + height, radius);
//}
//
//
//function roundedRect(ctx, x, y, width, height, radius) {
//    ctx.beginPath();
//    ctx.moveTo(x, y + radius);
//    ctx.arcTo(x, y + height, x + radius, y + height, radius);
//    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
//    ctx.arcTo(x + width, y, x + width - radius, y, radius);
//    ctx.arcTo(x, y, x, y + radius, radius);
//    ctx.stroke();
//  }
//
// A utility function to draw a rectangle with rounded corners.

//function roundedRect(ctx, x, y, width, height, radius) {
//fimc
//functoin roundedr
//function roundedRect(x, y, width, height, raidu)
function roundedRect(x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    ctx.stroke();
}
//function roundedRect(ctx, x, y, width, height, radius) {
//function fillRoundedRect(ctx, x, y, )
//functoin 
function fillRoundedRect(x, y, width, height, radius, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + radius);
    ctx.arcTo(x, y + height, x + radius, y + height, radius);
    ctx.arcTo(x + width, y + height, x + width, y + height - radius, radius);
    ctx.arcTo(x + width, y, x + width - radius, y, radius);
    ctx.arcTo(x, y, x, y + radius, radius);
    //ctx.stroke();
    ctx.fill();
}
//
//
function processNormalKey() {
    //
    //
    //let toDraw2 = [];
    //endML = 0
    endML = 0;
    index = 0;
    let eml = 0;
    //for (let i = 0; i < pro)
    //fprt
    //for l
    //for (let i = 0 )
    for (let i = 0; i < possible.length; i++ ) {
        //if 9
        //if (currentText.endsWid)
        //if (currentText.endsWith(re))
        if (currentText.endsWith(possible[i])) {
            //eml = i;
            //
            //eml = possible.length - i;
            //
            //
            //eml
            //endML2 = eml;
            //endML = end
            //endML = requiredText.length - endML2;
            //
            //
            ///eml = requiredText.length - (possible.length - i);
            //
            //
            //endML = eml;
            //
            //
            eml = possible.length - i;
            //endML = requiredText.length - eml;
            //


            endML = eml;


            //index = requiredText.length - endMLK
            //index = requiredText.length  =
            index = requiredText.length - endML;

            break;
        }
    }
    //index
    //let toDraw2 = cui
    //math
    //math
    //matr

    index = requiredText.length - endML;


    //console 
    //console.log(endML);
    //console.log(index);


    matchIndex = currentText.indexOf(requiredText);
    //ley
    let toDraw2;


    //let le
    //let endList = (matchIndex === -1) ? requiredText.slice(0 - eml)

    //let endf

    //let endList = (matchIndex === -1) ? requiredText.slice(0 - endML)

    if (matchIndex == -1) {
        //toDraw2 = currentText.split("").concat
        //toDraw2 = (currentText + requiredText.slice(0 - mat))
        //toDraw2 = (currentText + requiredText.slice( 0 - eml )).split("");
        //
        //toDraw2 = currentText.slice("")
        //toDraw2  = currentText.split("";)
        //toDraw2 = currentText.sploit
        toDraw2 = currentText.split("");
        //let el = 
        //let el = (matchIndex === -1) ? requiredText.slice(0 - eml)/
        //let el = (math)
        //let el = (matchIndex === -1) ? requiredText.slice(0 - eml).split("") : [];
        //
        //let el = (matchIndex === -1) ? requiredText.slice9
        //let el = (matchIndex === -1) ? requiredText.slice(0 - endML2) :
        //let el = (matchIndex == -1) 
        //let el = (matchIndex === -1) ? requiredText.slice(0 - endML2).split("") : [];
        //
        //

        ///./
        //
        //let el = (matchIndex === -1) ? requiredText.slice(0 - endML).split("") : [];
        //
        //toDraw2 = toDraw2.concat(el);
        //
        //
        //endListLength = (requiredText.slice(0-eml)).length;
        //
        //
        //endListLength = el.length;
        //
    //}
        
        //let el = requiredText.slice(0 - index);
        let el = requiredText.slice(0 - index).split("");

        toDraw2 = toDraw2.concat(el);

        endListLength = el.length;
    } else {
        //toDraw2 = currentText.split("");
        //
        endListLength = 0;
        //
        //
        //let el = (math)
        //let el = (matcxh)
        //let el = (matchIndex - )
        //let el = (matchIndex === -1) ? requiredText.slice(0 - endML).split("") : [];
        toDraw2 = currentText.split("");
        //toDraw2 = toDraw2.concan
        //toDraw2 = toDraw2.concat(el);
        //endListLength = el;
        //
        //
        //endListLength = el.length;
        //
    }

    //let half2 = toDraw.
    //el
    let half2 = (toDraw2.length / 2);
    //lsf 
    //half = f
    half = half2;
    //drawRight = half * draw
    drawRight = half * letterBoxWidth + (letterBoxSpacing * half);
    //
    //drawLeft 
    //drawLeft2 = centerx - drawr
    drawLeft2 = centerx - drawRight;
    drawLeft = drawLeft2 - letterBoxActualOffsetX;
    //endML = eml;
    //

    //
    toDraw.length = 0;
    //toDraw = toDraw.concat(toDraw2.splice(0, toDraw2.length));
    //
    toDraw = toDraw2.splice(0, toDraw2.length);
    //
}
//

//function setup90

//function ()
//function setup*)
function setup() {
    //
    //canvas = document.querySelector(#)
    //canvas = c
    canvas = document.querySelector("#main_canvas");
    //widthy
    width = window.innerWidth;
    height = window.innerHeight;

    //centerx

    centerx = Math.floor(width / 2);
    centery = Math.floor(height / 2);

    //canvas.width = widr
    canvas.width = width;
    canvas.height = height;

    ctx = canvas.getContext('2d');
    //
    textDrawLocation = height * 0.7;
    //
    ctx.textAlign = "center";
    //
    //
    //offsetDrawy = letterBoxActualOffsetX
    offsetDrawy = letterBoxActualOffsetY + textDrawLocation;
    //
    ctx.font = "22px InterSemiBold";
    //
    //
    //
    //
    loadDictionary();
    loadPhrases();
    //repeat 
    //while True
    //while (true) {
        //if (fini)
        //of );p
        //
    //    if (loadedFiles) break;
        //
    //}
    //
}



//function render() {}
function render() {
    //
    //
    //ctx.clearRect(0, 0, wif)
    ctx.clearRect(0, 0, width, height);

    //
    ctx.lineWidth = 5;
    ctx.beginPath();
    //
    //ctx.arc(centerx, centery, 50, 0, (((currentTime - startCountdownTime) / (actualMaxTime - startCountdownTime)) * fillCi))
    ctx.arc(centerx, centery, 50, 0, (((currentTime - startCountdownTime) / (actualMaxTime - startCountdownTime)) * fullCircle), true);

    //
    ctx.stroke();
    ctx.lineWidth = 1;
    //
    //ctx.fillSyt
    ctx.fillStyle = "black";
    //
    //
    //ctx.fillText()
    //
    ctx.fillText('' + Math.floor((actualMaxTime - currentTime) / 1000), centerx, centery);
    //
    //
    //
    ///math
    matchIndex = currentText.indexOf(requiredText);
    //

    //console.log("--");
    //console.log(endML);
    //console.log(index);

    //
    //processNewPhrase();
    //
//for 
    for (let i = 0; i < toDraw.length; i++) {
        const item = toDraw[i];
        //if (matchIndex == -1)
        if (matchIndex === -1) {
            //if (i >= toDraw.length - (requiredText.length) && i < )
            //if (i >= toDraw.length - (requiredText.length) && i <= toDraw.length - endML - 1) {
            if (i >= toDraw.length - (requiredText.length) && i <= toDraw.length - index - 1) {
            //if (i >= toDraw.length - (index) && i <= toDraw.length - index - 1) {
                //
                //fillRoundedRect(drawLeft + (drawOffset * i), letterBoxActualOffsetY + )
                //fallR
                //fillRoundedRect(drawLeft + (drawOffset * i), drawOffset)
                //
                fillRoundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius, typedRequiredTextColor);
                //
            //}
            //} es
            } else {
                //if (i >= toDraw.length - )
                //
//if
                //if (i >= toDraw.length 0)
                //if (i +)
                //if (i >= toDraw.length - endML ^)
                //if (i >= toDraw.length - endML && i < )
                //if (i >= toDraw.length - endML && i < toDraw.length) {
                if (i >= toDraw.length - endListLength && i <= toDraw.length) {
                    //fille
                    //fillRoi
                    //fillRoundedRect(drawLet)
                    //fillRoundedRect(drawLeft + (drawOffset * i), letterBoxActualOffsetY + te)
                    //fillRoundedRect(drawLeft + (drawOffset * i),  off)
                    //fillRoundedRect(drawLeft + (drawLeft))
                    //fillRoundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius, type)
                    fillRoundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius, nonTypedRequiredTextColor);
                //}
                } else {
                    //roundedRect(drawLeft + 0)
                    //roundedRect(drawLeft + (drawOffset ()))
                    //rea
                    //roundedRect(drawLeft + (der))
                    //roundedRect(drawLeft + (drawOffset * i), offsetDrawy, lett)
                    roundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius);
                }
                //
            }
        //}
        //
        } else {
            //if (i < )
            //if (i >= math)
            //if (i >= math)
            //if (i >= math)
            if (i >= matchIndex && i <= matchIndex + (requiredText.length - 1)) {
                //fille
                fillRoundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius, typedRequiredTextColor);
            //}
            } else {
                roundedRect(drawLeft + (drawOffset * i), offsetDrawy, letterBoxWidth, letterBoxHeight, letterBoxCornerRadius);
            }
        }

        ctx.fillStyle = "black";
        //ctx.fillText()
        //ctx.fillText(item, drawLeft + (daw))
        //ctx.fillText(item, drawText)
        //ctx.fillText(item, drawT)
        //ctx.fillItem(item)
        ctx.fillText(item, drawLeft2 + (drawOffset * i), textDrawLocation);
        //
    }
    //
}




//function main() {
//
//}
//function main() {
//    curre
//}
//function main(render,)
function main(render_time) {
    //currentText
    //
    currentTime = render_time;
    //remainin
    //
    //if (actualMaxTime = )
    //if (actualMaxTime == currentTime) {
    if (currentTime >= actualMaxTime) {
        failedCount += 1;
        //actualMaxTime = currentText;
        //
        startCountdownTime = currentTime;
        //actualMaxTime = start
        // /

        //
        //current
        //actualMaxTime = startCountdownTime + current
        //
        actualMaxTime = startCountdownTime + addedMaxTime;

        //console.log("did");
        //
        currentText = "";
        //proc
        //


        //letter
        requiredText = getRandomCombination();
        processNewPhrase();

        processNormalKey();
        //toDraw.length = 0;
        //processNormalKey();
    }
    //

    //render() 
    //
    render();
    //requestAnimationFrame(nma)
    requestAnimationFrame(main);
}
//
//
function processEnter() {
//



    if (currentText.includes(requiredText)) {
        //
        //if (dict.lookup)
        /*console.log(dict.getNodeByIndex(0));
        //if (dict.lookup(currentText)) {
        if (dict.lookup(dict.getNodeByIndex(0), currentText)) {
            console.log("Correct!");
            currentText = "";
            requiredText = getRandomCombination();
            processNewPhrase();
            processNormalKey();
            correctCount += 1;
        }*/


            //ket
            /*let word = currentText;
            //let node = node1root;
            let node = dict.getNodeByIndex(0);
            console.log(node);
            for ( var i = 0; i < word.length; i++ ) {
                var child;
                var j = 0;
                //for ( ; j < node.getChildCount(); j++ ) {
                //let j;
                //let j = 0;
                for (j = 0; j < node.getChildCount(); j++) {
                    child = node.getChild( j );
                    if ( child.letter === word[i] ) {
                        break;
                    }
                }
    
                if ( j === node.getChildCount() ) {
                    return false;
                }
                node = child;
            }
    
            //return node.final;
            //cibsike,
            console.log(node,);*/
        
            if (dict.lookup(currentText)) {
            //if dic
            //if (dict.lookup(dict, null, currentText) ) {
                console.log("Correct!");
                currentText = "";
                requiredText = getRandomCombination();
                processNewPhrase();
                processNormalKey();
                correctCount += 1;
                //
                startCountdownTime = currentTime;
                actualMaxTime = startCountdownTime + addedMaxTime;
                //
            }
                
    }
}
/*function processNormalKey() {
    //
    //
    //let toDraw2 = [];
    //endML = 0
    let eml = 0;
    //for (let i = 0; i < pro)
    //fprt
    //for l
    //for (let i = 0 )
    for (let i = 0; i < possible.length; i++ ) {
        //if 9
        //if (currentText.endsWid)
        //if (currentText.endsWith(re))
        if (currentText.endsWith(possible[i])) {
            eml = i;
            break;
        }
    }
    //index
    //let toDraw2 = cui
    //math
    //math
    //matr
    matchIndex = currentText.indexOf(requiredText);
    //ley
    let toDraw2;
    if (matchIndex == -1) {
        //toDraw2 = currentText.split("").concat
        //toDraw2 = (currentText + requiredText.slice(0 - mat))
        toDraw2 = (currentText + requiredText.slice( 0 - eml )).split("");
    //}
    } else {
        toDraw2 = currentText.split("");
    }

    //let half2 = toDraw.
    //el
    let half2 = (toDraw2.length / 2);
    //lsf 
    //half = f
    half = half2;
    //drawRight = half * draw
    drawRight = half * letterBoxWidth + (letterBoxSpacing * half);
    //
    //drawLeft 
    //drawLeft2 = centerx - drawr
    drawLeft2 = centerx - drawRight;
    drawLeft = drawLeft2 - letterBoxActualOffsetX;
    endML = eml;
    toDraw.length = 0;
    toDraw = toDraw.concat(toDraw2.splice(0, toDraw2.length));
}*/
//
window.addEventListener('keydown', (event) => {
//
//
//
    //let keydownLowercase = event.key.toLo
    //let keydownLoc
    //et 
    //let keylo
    let keyLowercase = event.key.toLowerCase();
    if (keyLowercase == "enter") {
        //processEnter():
        processEnter();
    //} se
    } else if (keyLowercase == "backspace") {
        //currentText.
        //
        currentText = currentText.slice(0, -1);
        processNormalKey();
    //} else if (key)
    //} else if (checkingKey.inclu)
    //
//} 
    //
    //} else if (checkingKey.includes(keyLowercase)) {
//
    //}
    //
    } else if (keyLowercase.length === 1 && checkingKey.includes(keyLowercase)) {
        //
        //currentText = currentText + key
        currentText = currentText + keyLowercase;
        processNormalKey();
    }
//
});
//
//
//setup();
//main();
//
//
function runWhenReady() {
    //if (k)
    //f
    if (loadedFiles) {
        //break;
        return;
    }
    setTimeout(runWhenReady, 200);
}
//setiup
runWhenReady();
setup();
//main();
//
//
//main();
requestAnimationFrame(main);
/**
 * @Author: xiaojiezhang
 * @Date:   2018-11-28T11:46:08-05:00
 * @Last modified by:   xiaojiezhang
 * @Last modified time: 2018-11-28T13:51:57-05:00
 */
var cards=["queen", "queen", "king", "king"];
var cardsInPlay=[];
var cardOne = cards[0];

cardsInPlay.push(cardOne);

var cardTwo = cards[2];

cardsInPlay.push(cardTwo);

if(cardsInPlay[0]===cardsInPlay[1]){
  alert("You found a match!");
}else{
  alert("Sorry, try again.");
}

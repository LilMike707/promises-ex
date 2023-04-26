// PART 1

// let baseUrl = "http://numbersapi.com";
// let favNum = 13;

// // 1.
// $.getJSON(`${baseUrl}/${favNum}?json`).then((res) => {
//   console.log(res);
//   console.log(typeof res);
// });

// // 2.
// let nums = [1, 2, 3, 4, 5];
// for (let num in nums) {
//   $.getJSON(`${baseUrl}/${num}?json`).then((res) => {
//     console.log(res);
//   });
// }

// // 3.
// Promise.all(
//   Array.from({ length: 4 }, () => {
//     return $.getJSON(`${baseUrl}/${favNum}?json`);
//   })
// ).then((res) => {
//   res.forEach((data) => $("body").append(`<p>${data.text}</p>`));
// });

// PART 2

// let cardUrl = "https://deckofcardsapi.com/api/deck";

// // 1.

// $.getJSON(`${cardUrl}/new/draw`).then((res) => {
//   console.log(res);
//   console.log(`${res.cards[0].value} of ${res.cards[0].suit}`);
// });

// // 2.

// // let firstCard = null;
// $.getJSON(`${cardUrl}/new/draw`).then((res) => {
//   let firstCard = `${res.cards[0].value} of ${res.cards[0].suit}`;
//   let deckId = res.deck_id;
//   return $.getJSON(`${cardUrl}/${deckId}/draw`).then((res) => {
//     let secondCard = `${res.cards[0].value} of ${res.cards[0].suit}`;
//     console.log(firstCard);
//     console.log(secondCard);
//     console.log(`${firstCard} and a ${secondCard}`);
//   });
// });

// 3.

// let $btn = $("button");
// let $area = $("#card-area");

// $.getJSON(`${cardUrl}/new/shuffle/`).then((res) => {
//   console.log(res.deck_id);
//   deckId = res.deck_id;
//   $btn.show();
// });

// $btn.on("click", function () {
//   $.getJSON(`${cardUrl}/${deckId}/draw/`).then((res) => {
//     let cardSrc = res.cards[0].image;
//     console.log(res.cards[0].value);
//     $area.append(`<p>${res.cards[0].value} of ${res.cards[0].suit}</p>`);
//   });
// });

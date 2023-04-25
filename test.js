// PART 1

let baseUrl = "http://numbersapi.com";
let favNum = 13;
// 1.
$.getJSON(`${baseUrl}/${favNum}?json`).then((res) => {
  console.log(res);
  console.log(typeof res);
});

// 2.
let nums = [1, 2, 3, 4, 5];
for (let num in nums) {
  $.getJSON(`${baseUrl}/${num}?json`).then((res) => {
    console.log(res);
  });
}

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseUrl}/${favNum}?json`);
  })
).then((res) => {
  res.forEach((data) => $("body").append(`<p>${data.text}</p>`));
});

// PART 2

// 1.

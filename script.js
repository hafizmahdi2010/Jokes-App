

let jokeText = document.querySelector("#con");
let jokeCate = document.querySelector("#type");
let lang = document.querySelector("#lang");
let p = document.querySelector(".jokeCon > p");

let getJokeBtn = document.getElementById("getJoke");

getJokeBtn.addEventListener("click", () => {
  var selectedValue = lang.value;
  let jokeAPI = `https://v2.jokeapi.dev/joke/${jokeCate.value}?lang=${selectedValue}&contains=${jokeText.value}`;

  console.log("API : ",jokeAPI);
  fetch(jokeAPI)
    .then(x => x.json())
    .then(y => {
      if (y.error) {
        alert(`${y.causedBy[0]}
        ${y.additionalInfo}
        `)
      }
      else{
        p.innerText = y.joke ? y.joke : y.setup + " " + y.delivery;
      }
    });
});


let randomJokeBtn = document.getElementById("randomJoke");


randomJokeBtn.addEventListener("click", () => {
    JokeAPI.getJokes()
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        p.innerText = data.joke ? data.joke : data.setup + " " + data.delivery;
      });
});


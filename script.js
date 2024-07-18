const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.getElementById("dog-target");

function addNewDoggo() {
    const promise = fetch(DOG_URL);
    promise
            .then(function(response){
                const processingPromise = response.text();
                return processingPromise;
            })
            .then(function (processingPromise){
            const dogObject = JSON.parse(processingPromise);
            const img = document.createElement("img");
            img.src = dogObject.message;
            img.alt = "Cute doggo";
            doggos.appendChild(img);
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);


// easier code with doing json instead of text


// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target2");

// function addNewDoggo() {
//   const promise = fetch(DOG_URL);
//   promise
//     .then(function (response) {
//     const processingPromise = response.json(); // json instead of text
//     return processingPromise;
//   })
//     .then(function (processedResponse) {
//     // we get to skip this line since it'll already be an object
//     // const dogObject = JSON.parse(processedResponse);

//     const img = document.createElement("img");
//     img.src = processedResponse.message;
//     img.alt = "Cute doggo";
//     doggos.appendChild(img);
//   });
// }

// document.getElementById("dog-btn2").addEventListener("click", addNewDoggo);


//// more easier with asyn function 


// const DOG_URL = "https://dog.ceo/api/breeds/image/random";

// const doggos = document.getElementById("dog-target3");

// async function addNewDoggo() {
//   const promise = await fetch(DOG_URL);
//   const processedResponse = await promise.json();
//   const img = document.createElement("img");
//   img.src = processedResponse.message;
//   img.alt = "Cute doggo";
//   doggos.appendChild(img);
// }

// document.getElementById("dog-btn3").addEventListener("click", addNewDoggo);


async function getName() {
    return "Brian";
  }
  
  console.log("a promise", getName());
  
  getName().then(function (name) {
    console.log("the actual name", name);
  });


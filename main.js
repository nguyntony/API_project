import ajax from "./modules/ajax.js"

const mainContent = document.querySelector(".main-content") // grabbing the main content section
document.body.append(mainContent) // adding this to the body
const button = document.querySelector("#add")

// possibly add a button here to append one at a time?
let numArr = [];
for (let i = 1; i < 21; i++) { // get 20 different values
    let randomNum = Math.floor((Math.random() * 671)) // to generate a random number. 
    numArr.push(randomNum)
}
let url = `https://rickandmortyapi.com/api/character/${numArr}` // new url each time page refresh


ajax(url, (character) => {
    let parsedCharacter = JSON.parse(character);
    console.log(parsedCharacter)

    // function for eventlistener
    let generateCard = () => {
        if (parsedCharacter.length != 0) { // will not run the function if array is empty
            let selectedChar = parsedCharacter.pop(); // grabbing each character from array

            // creating div for each char
            let div = document.createElement("div")
            div.className = "card"
            mainContent.append(div)

            let h2 = document.createElement("h2")
            h2.innerText = selectedChar.name
            div.append(h2)


            // attach img for each div.
            let img = document.createElement("img")
            img.src = selectedChar.image
            div.append(img)

            let closeButton = document.createElement("span")
            closeButton.innerText = "X"
            closeButton.className = "close-btn"
            div.append(closeButton)

        } else {
            null
        }

        const btnClose = document.querySelector(".close-btn")
        btnClose.addEventListener("click", (evt => {
            evt.target.remove();
        }))
    }


    button.addEventListener("click", generateCard)
})






// callback function for the event listener 
// const evtCallback = (evt) => {
//     let randomNum = Math.floor((Math.random() * 671)) // to generate a random number. 
//     let url = `https://rickandmortyapi.com/api/character/${randomNum}` // new url each time 


//     ajax(url, (character) => {
//         let parsedCharacter = JSON.parse(character);

//         // create a div for each card. 
//         let div = document.createElement("div")
//         div.className = "card"
//         div.innerText = parsedCharacter.name
//         mainContent.append(div)

//         // attaching an img
//         let img = document.createElement("img")
//         img.src = parsedCharacter.image
//         div.append(img)
//     })
// }

// button.addEventListener("click", evtCallback)





// // this is accessing information from the API
// ajax("https://rickandmortyapi.com/api/character/", (results) => {
//     let parsedResults = JSON.parse(results);
//     let resultsArr = parsedResults.results;



//     // using a forEach to loop through the array
//     resultsArr.forEach((result) => {

//         // create a div for each card. 
//         let div = document.createElement("div")
//         div.className = "card"
//         div.innerText = result.name
//         mainContent.append(div)

//         let img = document.createElement("img")
//         img.src = result.image
//         div.append(img)
//     })
// })

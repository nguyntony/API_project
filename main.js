import ajax from "./modules/ajax.js"


const mainContent = document.querySelector(".main-content")
const cardHolder = document.querySelector("#card-holder")
const button = document.querySelector("#add")
document.body.append(mainContent)

let numArr = [];
for (let i = 1; i < 31; i++) {
    let randomNum = Math.floor((Math.random() * 671)) // to generate a random number. 
    numArr.push(randomNum)
}
const url = `https://rickandmortyapi.com/api/character/${numArr}` // new url each time page refresh


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
            // mainContent.append(div)
            cardHolder.prepend(div)


            //animation
            div.classList.add("card", "faded-out")
            setTimeout(() => { div.classList.remove("faded-out") }, 200)


            // title
            let h2 = document.createElement("h2")
            h2.innerText = selectedChar.name
            div.append(h2)


            // attach img for each div.
            let img = document.createElement("img")
            img.src = selectedChar.image
            div.append(img)


            // more card info
            let infoArr = ["status", "gender", "species"]
            infoArr.forEach((attrib) => {
                let h3 = document.createElement("h3")
                h3.innerText = selectedChar[attrib]
                div.append(h3)
            })



            // close button
            let closeButton = document.createElement("span")
            closeButton.innerText = "X"
            closeButton.className = "close-btn"
            closeButton.addEventListener("click", (evt) => {
                let parent = evt.target.parentNode;
                parent.remove()
            })
            div.append(closeButton)
        } else {
            null
        }
    }

    button.addEventListener("click", generateCard)
})


// trying to play with animation

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });


tl.to(".portal", { y: "0%", duration: 1, delay: 0.5 })
tl.to(".intro", { y: "-100%", duration: 1, delay: 0.5 });
tl.fromTo(".btn-container", { opacity: 0 }, { opacity: 1, duration: 1 });


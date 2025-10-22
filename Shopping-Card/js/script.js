const echo = console.log;

echo("hello gomycode");

// converting to tnd;


/*
       ********************************************
                                *******************
        *******************************************

        XXXX     xXXXX    XXXX                
        XXXX     XXXXX    XXXX         
        XXXXXXXXXXXXXX    XXXX        
        XXXX     XXXXX    XXXX        
        XXXX     XXXXX    XXXX        


        
          ********************************************
                                *******************
        *******************************************
    
*/


/* 
Core rule

this script can only be used for UI/UX.
 The server must be the source of truth for prices, totals, discounts, tax, 
 shipping and inventory.
Everything that affects money must be validated or computed server-side 
at checkout.
*/


// getting total price text
let totalDisplay = document.querySelector(".total-price .total");

let totalPrice = parseFloat(totalDisplay.innerHTML.replace(" $", "").trim());

// accessing plus button for cards
const cards = document.getElementsByClassName("card");

for (let card of cards) {
    const heartBtn = card.querySelector(".fa-heart");

    const trashBtn = card.querySelector(".fa-trash-alt");
    const plusBtn = card.querySelector(".fa-plus-circle");
    const minusBtn = card.querySelector(".fa-minus-circle");
    const quantitySpan = card.querySelector(".quantity");

    let singlePrice = card.querySelector(".unit-price").innerHTML;
    singlePrice = parseFloat(singlePrice.replace(" $", "").trim()); // popping " $"


    let quantity = 0;

    // Increment
    plusBtn.addEventListener("click", function () {
        quantity++;
        quantitySpan.innerHTML = quantity;
        totalPrice += singlePrice;
        totalDisplay.innerHTML = totalPrice.toString() + " $";

    });

    // Decrement
    minusBtn.addEventListener("click", function () {
        if (quantity > 0) {
            quantity--;
            quantitySpan.innerHTML = quantity;
            totalPrice -= singlePrice;
            totalDisplay.innerHTML = totalPrice.toString() + " $";
        }
    });

    // handling like button logic

    heartBtn.addEventListener("click", function () {

        if (heartBtn.classList.contains("licked")) {
            heartBtn.classList.remove("licked")
            heartBtn.style.color = "black"
        } else {
            heartBtn.style.color = "red"
            heartBtn.classList.add("licked");
        }
    })

    trashBtn.addEventListener("click", function () {
        card.innerHTML = "";
        card.style = ""
    })
}









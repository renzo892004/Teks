// Premium Cards image set
const premium_cards = {
    card1: { front: "/img/sonic_front.gif", back: "/img/sonic_back.jpg"},
    card2: { front: "https://i.pinimg.com/originals/8b/d5/52/8bd552b7ed048b3b4b28cdb07ade4c44.gif", back: "https://i.pinimg.com/564x/80/a1/1b/80a11b571d12029f80c1a09553574fc5.jpg" },
    card3: { front: "https://i.pinimg.com/originals/9c/41/ab/9c41abdbfa14e30f012bb57fda6fe293.gif", back: "https://w0.peakpx.com/wallpaper/434/381/HD-wallpaper-fast-black-black-and-white-car-chevy-cool-logo-motion-my-speed-super.jpg" },
    card4: { front: "", back: "" },
    card5: { front: "", back: "" },
    card6: { front: "", back: "" }
};

// Player1 Cards image set
const P1_cards = {
    card1: {front: "/img/naruto_front.jpg", back: "/img/naruto_back.png"},
    card2: {front: "/img/dragonball_front.webp", back: "/img/dragonball_back.jpg"},
    card3: {front: "/img/ben10_front.jpg", back: "/img/ben10_back.jpg"}
}

// Player2 image sets
const P2_cards = {
    card1: {front: "/img/superman_front.webp", back: "/img/superman_back.jpg"},
    card2: {front: "/img/cars_front.jpg", back: "/img/cars_back.jpg"},
    card3: {front: "/img/bleach_front.jpg", back: "/img/bleach_back.jpg"}
}

// Bugaw/Player3 image set
const P3_card_front_1 = "https://m.media-amazon.com/images/M/MV5BMzE0ZDU1MzQtNTNlYS00YjNlLWE2ODktZmFmNDYzMTBlZTBmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg";
const P3_card_back_1 = "https://i.pinimg.com/474x/92/cf/09/92cf093e80c6ba6e212f53d8aed527e2.jpg";
const P3_card_front_2 = "https://i.pinimg.com/originals/73/dc/b8/73dcb82a864a1ae4739f573b948b2939.jpg"
const P3_card_back_2 = "https://www.shutterstock.com/shutterstock/photos/2295107843/display_1500/stock-photo-marvel-comics-wallpaper-for-mobile-full-hd-wallpaper-2295107843.jpg"
const P3_card_front_3 = "https://wallpapersmug.com/download/1224x1224/4c2607/justice-league-cartoon-comic-artwork-4k.jpg"
const P3_card_back_3 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmx1_QBO9Mpi0yEeOZN3eo1JuferbIQemoog&s"

// Image sets for easy access with "imageFront" and "imageBack" naming
const p1_imageSet_4 = [premium_cards.card1.front, premium_cards.card1.back]
const p1_imageSet_5 = [premium_cards.card2.front, premium_cards.card2.back]
const p1_imageSet_6 = [premium_cards.card3.front, premium_cards.card3.back]

const p1_imageSet_1 = [P1_cards.card1.front, P1_cards.card1.back];
const p1_imageSet_2 = [P1_cards.card2.front, P1_cards.card2.back];
const p1_imageSet_3 = [P1_cards.card3.front, P1_cards.card3.back];

const p2_imageSet_1 = [P2_cards.card1.front, P2_cards.card1.back];
const p2_imageSet_2 = [P2_cards.card2.front, P2_cards.card2.back];
const p2_imageSet_3 = [P2_cards.card3.front, P2_cards.card3.back];

const p3_imageSet_1 = [P3_card_front_1, P3_card_back_1];
const p3_imageSet_2 = [P3_card_front_2, P3_card_back_2];
const p3_imageSet_3 = [P3_card_front_3, P3_card_back_3];

// Result 
let randomNumPlayer1;
let randomNumPlayer2;
let randomNumPlayer3;

// Bet
let tossCards = document.getElementById("tossCard");
let resHolder = document.getElementById("result");
let finalBet = 0;
let p1_initial;
let p2_initial;
let betModal;
let p1Money = 2000; // Initial money for Player 1
let p2Money = 2000; // Initial money for Player 2

// This object will store which card has been picked
let buyCards = {premC1: null};
let pickedCards = { demo1: null, demo: null, demo2: null };

// Function to flip the card between front and back based on its current src
function flip(element, imageSet) {
    let currentImage = element.src;

    // If imageSet is picked
    if (imageSet === 1) {
        element.src = element.classList.contains('flipped') ? element.src = P1_cards.card1.back : P1_cards.card1.front;
        element.classList.toggle('flipped');
    } 
    else if (imageSet === 2) {
        element.src = element.classList.contains('flipped') ? element.src = P1_cards.card2.back : P1_cards.card2.front;
        element.classList.toggle('flipped');
    }
    else if (imageSet === 3) {
        element.src = element.classList.contains('flipped') ? element.src = P1_cards.card3.back : P1_cards.card3.front
        element.classList.toggle('flipped');
    }
    else if(imageSet === 4) {
        element.src = element.classList.contains('flipped') ? element.src = P2_cards.card1.back : P2_cards.card1.front;
        element.classList.toggle('flipped');
    }
    else if(imageSet === 5) {
        element.src = element.classList.contains('flipped') ? element.src = P2_cards.card2.back : P2_cards.card2.front;
        element.classList.toggle('flipped');
    }
    else if(imageSet === 6) {
        element.src = element.classList.contains('flipped') ? P2_cards.card3.back : element.src = P2_cards.card3.front;
        element.classList.toggle('flipped');
    }
    else if(imageSet === 7) {
        currentImage === P3_card_front_1 ? element.src = P3_card_back_1 : element.src = P3_card_front_1;
    }
    else if(imageSet === 8) {
        currentImage === P3_card_front_2 ? element.src = P3_card_back_2 : element.src = P3_card_front_2;
    }
    else if(imageSet === 9) {
        currentImage === P3_card_front_3 ? element.src = P3_card_back_3 : element.src = P3_card_front_3;
    } 
    else if(imageSet === 10) {
        element.src = element.classList.contains('flipped') ? element.src = premium_cards.card1.front : element.src = premium_cards.card1.back;
        element.classList.toggle('flipped');
    }
    else if(imageSet === 11) {
        currentImage === premium_cards.card2.front ? element.src = premium_cards.card2.back : element.src = premium_cards.card2.front;  
    }
    else if(imageSet === 12) {
        currentImage === premium_cards.card3.front ? element.src = premium_cards.card3.back : element.src = premium_cards.card3.front;
    }
}

// Function to set the initial card image when a player picks a card
function pickCard(cardId, imageSet) {
    const card = document.getElementById(cardId);
    pickedCards[cardId] = imageSet;  // Store which set the player picked

    // Set the initial image for the card based on the image set picked
    if (imageSet === 1) {
        card.src = P1_cards.card1.back; 
    } else if (imageSet === 2) {
        card.src = P1_cards.card2.back; 
    } else if (imageSet === 3) {
        card.src = P1_cards.card3.back; 
    } else if (imageSet === 4) {
        card.src = P2_cards.card1.back;
    } else if (imageSet === 5) {
        card.src = P2_cards.card2.back;
    } else if (imageSet === 6) {
        card.src = P2_cards.card3.back;
    } else if (imageSet === 7) {
        card.src = P3_card_back_1;
    } else if (imageSet === 8) {
        card.src = P3_card_back_2;
    } else if (imageSet === 9) {
        card.src = P3_card_back_3;
    } else if (imageSet === 10) {
        card.src = premium_cards.card1.back
    } else if (imageSet === 11) {
        card.src = premium_cards.card2.back
    } else if (imageSet === 12) {
        card.src = premium_cards.card3.back
    }
}

function showCardBack(playerId, imageSet) {
    const card = document.getElementById(playerId);
    const cardBacks = [
        P1_cards.card1.back, P1_cards.card2.back, P1_cards.card3.back,
        P2_cards.card1.back, P2_cards.card2.back, P2_cards.card3.back,
        P3_card_back_1, P3_card_back_2, P3_card_back_3,
        premium_cards.card1.back, premium_cards.card2.back, premium_cards.card3.back,
    ];
    if (imageSet >= 1 && imageSet <= 12) {
        card.src = cardBacks[imageSet - 1];  // imageSet is 1-indexed, array is 0-indexed
    }
}

// Function to simulate the game logic and randomly assign images to picked cards
function teksPlay() {
    let num = [0, 1];
    let index = 0;
    let flipSpeed = Math.floor(Math.random() * (400 - 200 + 1)) + 200;

    // Check if either player has not picked a card, and if so, display "Pick Card"
    if (pickedCards.demo1 === null || pickedCards.demo2 === null || pickedCards.demo === null) {
        return;
    }

    document.getElementById("moveUp").style.zIndex = "500";

    // Toss Card animation
        if (tossCards.classList.contains("fa-hand-point-right")) {
            tossCards.classList.remove("fa-hand-point-right")
            tossCards.classList.add("fa-thumbs-up")
        } else {
            tossCards.classList.remove("fa-thumbs-up")
            tossCards.classList.add("fa-hand-point-right")
            return;
        }   

    // Randomly assign image for Player 1 (demo1)
    if (pickedCards.demo1 !== null) {
    let imageSetForPlayer1 = pickedCards.demo1 === 1 ? p1_imageSet_1 : pickedCards.demo1 === 2 ? p1_imageSet_2 : pickedCards.demo1 === 3 ? p1_imageSet_3 : pickedCards.demo1 === 10 ? p1_imageSet_4 : pickedCards.demo1 === 11 ? p1_imageSet_5 :  p1_imageSet_6;
    let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
        let interval = setInterval(() => {
            document.getElementById("demo1").src = imageSetForPlayer1[index];
            index = (index + 1) % num.length;
        }, flipSpeed);

        // After 3 seconds, clear the interval and set final result for Player 1, then call player2()
        setTimeout(() => {
            clearInterval(interval);
            randomNumPlayer1 = Math.floor(Math.random() * imageSetForPlayer1.length);
            imageRes = imageSetForPlayer1[randomNumPlayer1];
            document.getElementById("demo1").src = imageRes;
            player3();  // Start Player 2's interval after Player 1 is finished
        }, ranTimeOut);  // 3 seconds delay
    }

    function player2() {
        // Randomly assign image for Player 2 (demo2)
        if (pickedCards.demo2 !== null) {
            let imageSetForPlayer2 = pickedCards.demo2 === 4 ? p2_imageSet_1 : pickedCards.demo2 === 5 ? p2_imageSet_2 : p2_imageSet_3;
            let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
            let index = 0; // Reset index for Player 2's images
            let interval = setInterval(() => {
                document.getElementById("demo2").src = imageSetForPlayer2[index];
                index = (index + 1) % num.length;
            }, flipSpeed);

            // After 3 seconds, clear the interval and set final result for Player 2
            setTimeout(() => {
                clearInterval(interval);
                randomNumPlayer2 = Math.floor(Math.random() * imageSetForPlayer2.length);
                imageRes = imageSetForPlayer2[randomNumPlayer2];
                document.getElementById("demo2").src = imageRes; // Correct assignment
                setTimeout(showModal, 500);
            }, ranTimeOut);  // 3 seconds delay
        }
    }

    function player3() {
        if(pickedCards.demo !== null) {
            let imageSetForPlayer3 = pickedCards.demo === 7 ? p3_imageSet_1 : pickedCards.demo === 8 ? p3_imageSet_2 : p3_imageSet_3;
            let ranTimeOut = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000;;
            let index = 0;
            let interval = setInterval(() => {
                document.getElementById("demo").src = imageSetForPlayer3[index];
                index = (index + 1) % num.length;
            }, flipSpeed);

            setTimeout(() => {
                clearInterval(interval);
                randomNumPlayer3 = Math.floor(Math.random() * imageSetForPlayer3.length);
                imageRes = imageSetForPlayer3[randomNumPlayer3];
                document.getElementById("demo").src = imageRes;
                player2();
            }, ranTimeOut)
        }
    }
}

function resultLabel() {
    let winBet = finalBet * 2; // Winnings if a player wins
    let labelBet = document.getElementById("winBet");

    // Use the global p1Money and p2Money variables
    let p1_current = p1Money; // Current money for Player 1
    let p2_current = p2Money; // Current money for Player 2

    if (randomNumPlayer1 === randomNumPlayer2) {
        // Draw: Return the finalBet to both players
        resHolder.innerHTML = "Draw";
        labelBet.innerHTML = "";
        p1Money = p1_current + finalBet; // Return the bet to Player 1
        p2Money = p2_current + finalBet; // Return the bet to Player 2
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    } else if (randomNumPlayer3 === randomNumPlayer2) {
        // Player 1 wins: Add winnings to Player 1's balance
        resHolder.innerHTML = "Player I";
        labelBet.innerHTML = "+ " + "₱" + winBet;
        p1Money = p1_current + winBet; // Add winnings to Player 1's balance
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
    } else if (randomNumPlayer3 === randomNumPlayer1) {
        // Player 2 wins: Add winnings to Player 2's balance
        resHolder.innerHTML = "Player II";
        labelBet.innerHTML = "+ " + "₱" + winBet;
        p2Money = p2_current + winBet; // Add winnings to Player 2's balance
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    } else {
        // No result (e.g., if the game is not yet played)
        resHolder.innerHTML = "Pick";
        labelBet.innerHTML = "";
    }
}

function showModal() {
    const modal = document.querySelector(".modal");
    modal.style.display = "flex"
    resultLabel()
    tossCards.classList.remove("fa-hand-fist");
    tossCards.classList.add("fa-hand-point-right");
}

function playAgain() {
    const modal = document.querySelector(".modal");
    modal.style.display = "none";
    document.getElementById("moveUp").style.zIndex = "-1";
    tossCards.classList.remove("fa-thumbs-up");
    tossCards.classList.add("fa-hand-point-right");
    betModal.style.display = "flex";

    // Reset card images to their back faces
    showCardBack("demo1", pickedCards.demo1);  // Reset Player 1's card
    showCardBack("demo2", pickedCards.demo2);  // Reset Player 2's card
    showCardBack("demo", pickedCards.demo);    // Reset Player 3's card

    // Do not reset player money here; it should persist
    // Update the UI to reflect the current money balance
    p1_initial.innerHTML = p1Money;
    p2_initial.innerHTML = p2Money;
}

function placeBet(amount) {
    let betResult = document.getElementById("betRes");
    
    if(amount === 1) {
        betResult.innerHTML = 100;
    } else if (amount === 2) {
        betResult.innerHTML = 200;
    } else if (amount === 3) {
        betResult.innerHTML = 300;
    } else if (amount === 4) {
        betResult.innerHTML = 1000;
    } else {
        betResult.innerHTML = 0;
    }
    
    finalBet = parseInt(betResult.innerHTML);
}

function placeBetandStart() {
    p1_initial = document.getElementById("p1_initial");
    p2_initial = document.getElementById("p2_initial");
    betModal = document.querySelector(".betModal");

    if (p1Money < finalBet) {
        document.getElementById("moneyStatus").innerHTML = "Player I: Insufficient balance!";
        return;
    } 
    
    if (p2Money < finalBet) {
        document.getElementById("moneyStatus").innerHTML = "Player II: Insufficient balance!";
        return;
    }

    if (finalBet !== 0) {
        betModal.style.display = "none";
        p1Money -= finalBet; // Deduct finalBet from Player 1's balance
        p2Money -= finalBet; // Deduct finalBet from Player 2's balance
        p1_initial.innerHTML = p1Money; // Update UI for Player 1
        p2_initial.innerHTML = p2Money; // Update UI for Player 2
    }

    document.getElementById("moneyStatus").innerHTML = "";
    document.getElementById("betLabel").innerHTML = finalBet;
}

function premCardsOpen() {
    const premCard = document.querySelector(".prem_card_modal");
    premCard.style.display = "flex"
}

function premCardsClose() {
    const premCard = document.querySelector(".prem_card_modal");
    premCard.style.display = "none"
}

function buyPremCard(cardId, imageSet) {
    const premCardId = document.getElementById(cardId);
    let premCardValue = 500;

    if (imageSet === 10) { // Player 1 buys the card
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn10").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick10").style.display = "block"
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn10").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    } else if (imageSet === 11) {
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn11").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick11").style.display = "block"
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn11").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    } else if (imageSet === 12) {
        document.getElementById("premBuyerStat").innerHTML = "Congratulations! You acquired a premium card!";
        document.querySelector(".premBtn12").style.display = "none"
        if (p1Money >= premCardValue) {
            document.querySelector(".premBtnPick12").style.display = "block"    
            p1Money -= premCardValue; // Deduct money
            p1_initial.innerHTML = p1Money; // Update UI
            document.getElementById("bal").innerHTML = p1Money;
        } else {
            document.querySelector(".premBtn12").style.display = "block"
            document.getElementById("premBuyerStat").innerHTML = "Insufficient balance!"
        }
    }
}

function hideModal() {
    document.querySelector(".modal_style").style.visibility = "hidden";
    document.querySelector(".showResultModal").style.visibility = "visible"
}

function showResultModal() {
    document.querySelector(".modal_style").style.visibility = "visible";
    document.querySelector(".showResultModal").style.visibility = "hidden"
}
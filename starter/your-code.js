window.addEventListener("DOMContentLoaded", () => {
<<<<<<< HEAD
    document.getElementById("fav-flavor").value = localStorage.getItem("txt");

    //prob 1
document.getElementById("make-circle-blue").addEventListener("click", event => {
    let circle = document.getElementById("blue-circumference-circle");
    circle.setAttribute("style", "background-color: blue;");
});
//end prob 1

//prob 2
document.getElementById("remove-content-from-apples").addEventListener("click", event => {
    document.getElementById("apples-div").innerHTML = "";
});
//end of prob 2

//prob 3
document.getElementById("add-image-btn").addEventListener("click", event => {
    let kids = document.getElementById("add-image");
    if (kids.innerHTML==="") {
        kids.innerHTML = "<img src='images/logo-emblem-black.svg'>"
    };
});
//end of prob 3

//prob 4
let div1 = document.getElementById("bubble-foe");
document.getElementById("bubble-friend").addEventListener("keydown", event => {
    event.stopPropagation();
});
//end of prob 4

//prob 5
let totalValue = document.getElementById("total-value");
document.getElementById("multiply").addEventListener("click", event => {
    total *= 2;
    totalValue.innerHTML = total;
=======
    let startText = document.getElementById("fav-flavor")
    startText.value = localStorage.getItem("input")

    document.getElementById("make-circle-blue").addEventListener("click", event => {
        document.getElementById("blue-circumference-circle").setAttribute("style", "background-color: blue;")
    }); //end of prob 1

    document.getElementById("remove-content-from-apples").addEventListener("click", event => {
        document.getElementById("apples-div").innerHTML = '';
    }); //end of prob 2

    document.getElementById("add-image-btn").addEventListener("click", event => {
        let imageContent = document.getElementById("add-image")
        if (imageContent.children.length === 0) {
            imageContent.innerHTML = "<img src='images/logo-emblem-black.svg'>";
        }
    }); //end of prob 3

    let bubbles = document.getElementById("bubble-friend");
    let box = document.getElementById("bubble-foe");
    bubbles.addEventListener("keydown", event => {
        event.stopPropagation();
    }); //end of prob 4


    let totalValue = document.getElementById("total-value");
    document.getElementById("multiply").addEventListener("click", event => {
        total *= 2;
        totalValue.innerHTML = total;
    })

    document.getElementById("add-two").addEventListener("click", event => {
        total += 2;
        totalValue.innerHTML = total;
    })

    document.getElementById("reset-total").addEventListener("click", event => {
        total = 1;
        totalValue.innerHTML = total;
    }); //end of prob 5


    document.getElementById("store-flavor").addEventListener("click", event => {
        let inputBox = document.getElementById("fav-flavor");
        localStorage.setItem("input", inputBox.value);
    }); //end of prob 6;

    document.getElementById("will-not-check").addEventListener("click", event => event.preventDefault());

>>>>>>> b4cd980a96c7314287c682ac1aea1cb3cd4cdd4b
});

document.getElementById("add-two").addEventListener("click", event => {
    total += 2;
    totalValue.innerHTML = total;
});

document.getElementById("reset-total").addEventListener("click", e => {
    total = 1;
    totalValue.innerHTML = total;
});
//end of prob 5

//prob 6
document.getElementById("store-flavor").addEventListener("click", e => {
    let storeText = document.getElementById("fav-flavor").value;
    localStorage.setItem("txt", `${storeText}`);
});
//end of prob 6 at line 2

//prob 7
document.getElementById("will-not-check").addEventListener("click", e => {
    event.preventDefault();
})
//end of prob 7
});


const li = document.querySelectorAll("li");
const call = document.querySelector("#call");
const price = document.querySelector("#price");
const call2 = document.querySelector("#call2");
let liarr = new Array();
    liarr[0] = {key : "1", calling : "00000", price : "4dolar", calling2 : "010-0000-2222"};
    liarr[1] = {key : "2", calling : "11111", price : "5dolar" , calling2 : "010-0000-9999"};

li.forEach((e) => {e.addEventListener("click",() => {
    switch (e.id) {
        case (liarr[0].key):
            call.innerText = liarr[(e.id)-1].calling;
            price.innerText = liarr[0].price;
            call2.innerText = liarr[0].calling2;
        break;
        
        case (e.id = "2"):
            call.innerText = "해드릴까요?"
            price.innerText = "5딸라"
            call2.innerText = "싫은데;;"
            console.log(liarr[0]);
        break;
        case ("3"):
            call.innerText = "ccc";
            price.innerText = "ccc";
            call2.innerText = "ccc";
        break;
        case ("4"):
            call.innerText = "ddd";
            price.innerText = "ddd";
            call2.innerText = "ddd";
        break;
        case (e.id = "5"):
            call.innerText = "fff";
            price.innerText = "fff";
            call2.innerText = "fff";
        break;
        case (e.id = "6"):
            call.innerText = "ggg";
            price.innerText = "ggg";
            call2.innerText = "ggg";
        break;
        case (e.id = "7"):
            call.innerText = "eee";
            price.innerText = "eee";
            call2.innerText = "eee";
        break;
        case (e.id = "8"):
            call.innerText = "ppp";
            price.innerText = "ppp";
            call2.innerText = "ppp";
        break;
        case (e.id = "9"):
            call.innerText = "ttt";
            price.innerText = "ttt";
            call2.innerText = "ttt";
        break;
        case (e.id = "10"):
            call.innerText = "qqq";
            price.innerText = "qqq";
            call2.innerText = "qqq";
        break;
        default:
            call.innerText = "";
            price.innerText = "";
            call2.innerText = "";
        break;
    }
} )})

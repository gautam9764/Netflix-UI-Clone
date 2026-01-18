// alert("hello word");

// let box11 = window.document.querySelector(".box11");
// let box22 = window.document.querySelector('.box22');

// box11.addEventListener("click", () => {
//   if (box22.style.display ==="none" || box22.style.display ==="") {
//     box22.style.display = "inline"
//   }else{
//     box22.style.display = "none"
//   }
// });

// let flag = 0;
// box11.addEventListener("click", () => {
//     if (flag == 0) {
//         box22.style.display = "inline";
//         flag = 1
//     } else {
//         box22.style.display = "none";
//         flag = 0;
//     }
// });

// let box11 = window.document.querySelectorAll(".box11");
// let box22 = window.document.querySelectorAll(".box22");

// let flag = 0;

// box11.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         if (flag === 0) {
//             box22.style.display = "inline";
//             flag = 1;
//         } else {
//             box22.style.display = "none";
//             flag = 0;
//         }
//     });
// });

let box11_1 = window.document.querySelector(".box11_1");
let box22_1 = window.document.querySelector(".box22_1");
let arrow1_1 = window.document.querySelector(".arrow1_1");
let arrow2_1 = window.document.querySelector(".arrow2_1");

let flag1 = 0;
box11_1.addEventListener("click", () => {
    if (flag1 === 0) {
        box22_1.style.display = "inline";
        arrow1_1.style.display = "none"
        arrow2_1.style.display = "inline"

        box22_1.style.transition = "transform 1s ease";
        box22_1.style.transform = "scale(1.1)";
        flag1 = 1;
    } else {
        box22_1.style.display = "none";
        arrow1_1.style.display = "inline";
        arrow2_1.style.display = "none"
        flag1 = 0;
    }
});

let box11_2 = window.document.querySelector(".box11_2");
let box22_2 = window.document.querySelector(".box22_2");
let arrow1_2 = window.document.querySelector(".arrow1_2");
let arrow2_2 = window.document.querySelector(".arrow2_2");

let flag2 = 0;
box11_2.addEventListener("click", () => {
    if (flag2 === 0) {
        box22_2.style.display = "inline";
        arrow1_2.style.display = "none"
        arrow2_2.style.display = "inline"        
        box22_2.style.transition = "transform 1s ease";
        box22_2.style.transform = "scale(1.1)";
        flag2 = 1;
    } else {
        box22_2.style.display = "none";
        arrow1_2.style.display = "inline";
        arrow2_2.style.display = "none"
        flag2 = 0;
    }
});
let box11_3 = window.document.querySelector(".box11_3");
let box22_3 = window.document.querySelector(".box22_3");
let arrow1_3 = window.document.querySelector(".arrow1_3");
let arrow2_3 = window.document.querySelector(".arrow2_3");

let flag3 = 0;
box11_3.addEventListener("click", () => {
    if (flag3 === 0) {
        box22_3.style.display = "inline";
        arrow1_3.style.display = "none"
        arrow2_3.style.display = "inline"
                
        box22_3.style.transition = "transform 1s ease";
        box22_3.style.transform = "scale(1.1)";
        flag3 = 1;
    } else {
        box22_3.style.display = "none";
        arrow1_3.style.display = "inline";
        arrow2_3.style.display = "none"
        flag3 = 0;
    }
});

let box11_4 = window.document.querySelector(".box11_4");
let box22_4 = window.document.querySelector(".box22_4");
let arrow1_4 = window.document.querySelector(".arrow1_4");
let arrow2_4 = window.document.querySelector(".arrow2_4");

let flag4 = 0;
box11_4.addEventListener("click", () => {
    if (flag4 === 0) {
        box22_4.style.display = "inline";
        arrow1_4.style.display = "none"
        arrow2_4.style.display = "inline"
                
        box22_4.style.transition = "transform 1s ease";
        box22_4.style.transform = "scale(1.1)";
        flag4 = 1;
    } else {
        box22_4.style.display = "none";
        arrow1_4.style.display = "inline";
        arrow2_4.style.display = "none"
        flag4 = 0;
    }
});

let box11_5 = window.document.querySelector(".box11_5");
let box22_5 = window.document.querySelector(".box22_5");
let arrow1_5 = window.document.querySelector(".arrow1_5");
let arrow2_5 = window.document.querySelector(".arrow2_5");

let flag5 = 0;
box11_5.addEventListener("click", () => {
    if (flag5 == 0) {
        box22_5.style.display = "inline";
        arrow1_5.style.display = "none"
        arrow2_5.style.display = "inline"
                
        box22_5.style.transition = "transform 1s ease";
        box22_5.style.transform = "scale(1.1)";
        flag5 = 1;
    } else {
        box22_5.style.display = "none";
        arrow1_5.style.display = "inline";
        arrow2_5.style.display = "none"
        flag5 = 0;
    }
});

let box11_6 = window.document.querySelector(".box11_6");
let box22_6 = window.document.querySelector(".box22_6");
let arrow1_6 = window.document.querySelector(".arrow1_6");
let arrow2_6 = window.document.querySelector(".arrow2_6");

let flag6 = 0;
box11_6.addEventListener("click", () => {
    if (flag6 === 0) {
        box22_6.style.display = "inline";
        arrow1_6.style.display = "none"
        arrow2_6.style.display = "inline"
                
        box22_6.style.transition = "transform 1s ease";
        box22_6.style.transform = "scale(1.1)";
        flag6 = 1;
    } else {
        box22_6.style.display = "none"
        arrow1_6.style.display = "inline";
        arrow2_6.style.display = "none"
        flag6 = 0;
    }
});
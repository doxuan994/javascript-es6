// window.onload = function() {
//     const pi = 3.142;
//
//     function calcArea(r) {
//         const pi = 10;
//         console.log("The area is: " + pi * r * r);
//     }
//
//     console.log(pi);
//     calcArea(5)
// }

// window.onload = function() {
//
//     var x = 10;
//
//     if (x > 5) {
//         let x = 5;
//         console.log("inside: " + x);
//     }
//
//     console.log("outside: " + x);
//
// }


window.onload = function() {
    var items = document.getElementsByTagName("li");

    for (let i = 0; i < items.length; i++) {
        items[i].onclick = function() {
            console.log(i);
        }
    }

    // console.log(i);
}

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


// window.onload = function() {
//     var items = document.getElementsByTagName("li");
//
//     for (let i = 0; i < items.length; i++) {
//         items[i].onclick = function() {
//             console.log(i);
//         }
//     }
//
//     // console.log(i);
// }


// window.onload = function() {
//
//     // function log(num=10) {
//     //     console.log(num);
//     // }
//     //
//     // log(4);
//
//
//     function logNinja(name = "Ryu", belt = "Red", age = 25) {
//         console.log("My name is " + name +
//                     " and my belt color us " + belt +
//                     " and my age is " + age);
//     }
//
//
//     logNinja("Shaun", "Pink", 40);
// }



// window.onload = function() {
//
//     // var meats = ["ham", "salami", "bacon"];
//     // console.log(...meats);
//
//     // var nums1 = [1,2,3];
//     // var nums2 = [...nums1,4,5,6];
//     //
//     // console.log(nums2);
//
//
//     var nums = [3, 5, 7];
//
//     function addNums(a, b, c) {
//         console.log(a + b + c);
//     }
//
//
//     addNums(...nums);
//
// }



// window.onload = function() {
//
//     // var temp = `Hello, my name is Ryu`;
//     // console.log(temp);
//
//
//     function logNinja(name, age) {
//         // console.log("My name is" + name +
//         //             " and my age is " + age);
//
//
//         console.log(`My name is ${name} and my age is ${age + 10}`);
//     }
//
//
//     logNinja("Ryu", 24);
//
// }


// window.onload = function() {
//
//     var name = "Crystal";
//     var belt = "Black";
//
//     var ninja = {
//         // name: name,
//         // belt: belt
//
//         name, belt,
//
//         chop(x) {
//             console.log(`You chopped the enemy ${x} times`);
//         }
//     };
//
//     console.log(ninja.name + " " + ninja.belt);
//     console.log(ninja.chop(5));
//
// }

// window.onload = function() {
//
//     // var str = "graaaaaaaaavy ";
//     // console.log(str.repeat(5));
//
//
//     // var str = "goodBye";
//     // console.log(str.startsWith("good"));
//     // console.log(str.startsWith("bye"));
//     // console.log(str.startsWith("Bye", 4));
//     //
//     //
//     // console.log(str.endsWith("Bye"));
//     // console.log(str.endsWith("good", str.length - 3));
//
//
//     // var youSay = "goodbye";
//     //
//     // if (youSay.startsWith("goodbye")) {
//     //     var iSay = "Hello";
//     // }
//     //
//     // console.log(`You say ${youSay}, I say ${iSay}`);
//
//     // var test = "My name is Ryu";
//     //
//     // console.log(test.includes("name"));
//
//
//
//
//
//     /* NEW STRING IN METHODS
//     - repeat
//     - startsWith
//     - endsWith
//     -includes
//
//     */
//
// }


// window.onload = function() {
//     // var ninjaGreeting = function() {
//     //     console.log("hiiiiiya");
//     // };
//
//     // var ninjaGreeting = (name) => console.log(`${name} says hiiiiiiya`);
//     // var ninjaGreeting = name => console.log(`${name} says hiiiiiiya`);
//
//     // ninjaGreeting("Mark");
//
//     // var ninja = {
//     //     name: "Ryu",
//     //     chop(x) {
//     //         var _this = this;
//     //         window.setInterval(function() {
//     //             if (x > 0) {
//     //                 console.log(_this.name + " chopped the enemy");
//     //                 x--;
//     //             }
//     //         }, 1000);
//     //     }
//     // };
//     // ninja.chop(5);
//
//
//     var ninja = {
//         name: "Ryu",
//         chop(x) {
//             window.setInterval(() => {
//                 if (x > 0) {
//                     console.log(this.name + " chopped the enemy");
//                     x--;
//                 }
//             }, 1000);
//         }
//     };
//     ninja.chop(5);
// }



// window.onload = function() {
//
//     // var names = new Set();
//     //
//     // names.add("Shaun").add("Ryu").add("Crystal");
//     // names.delete("Crystal");
//     //
//     // console.log(names.has("Ryu"));
//     // console.log(names.has("Crystal"));
//     //
//     // // console.log(names.delete("Ryu"));
//     //
//     //
//     // // names.clear();
//     //
//     // console.log(names.size);
//     //
//     //
//     // console.log(names);
//
//
//     var ninja = ["Shaun", "Crystal", "Ryu", "YoShi", "Ryu", "YoShi"];
//
//     var refinedNinja = new Set(ninja);
//
//     console.log(refinedNinja);
//
//     ninja = [...refinedNinja];
//
//     console.log(ninja);
//
// }


window.onload = function() {

    // // Generators.
    // function* gen() {
    //     // yield console.log("Pear");
    //     // yield console.log("Banana");
    //     // yield console.log("Apple");
    //     var x = yield "Pear";
    //     var y = yield "Banana";
    //     var z = yield "Apple";
    //
    //     return x + y + z;
    //
    // }
    //
    //
    // var myGen = gen();
    //
    // console.log(myGen.next());
    // console.log(myGen.next(10));
    // console.log(myGen.next(5));
    // console.log(myGen.next(3));



    // myGen.next();
    // myGen.next();
    // myGen.next();

    function genWrapper(generator) {
        var myGen = generator();

        function handle(yielded) {
            if (!yielded.done) {
                yielded.value.then(function(data) {
                    return handle(myGen.next(data));
                });
            }
        }

        return handle(myGen.next());
    }


    genWrapper(function* genegator() {
        var tweets = yield $.getJSON("data/tweets.json");
        console.log(tweets);
        var friends = yield $.getJSON("data/fb-friends.json");
        console.log(friends);
        var ytVids = yield $.getJSON("data/yt-vids.json");
        console.log(ytVids);
    });
}


















//



//hide an element
const hide = (Id) => {
    document.getElementById(Id).style.display = "none";
 }
 //show an element
 const show = (Id) => {
    document.getElementById(Id).style.display = "block";
 }

let airFry = document.getElementById("airFryRadio");
let bake = document.getElementById("bakeRadio");
let combo = document.getElementById("comboCB"); 
let vegan = document.getElementById("veganCB"); 

const logItem = (Id) => {
let buttonID = document.getElementById(Id);
    if (buttonID.value === 'submit1') {
        console.log(menuData[0])
        console.table(menuData[0])
    }


}

// let isFried = ()=> {
//     let deepFry = document.getElementsByClassName("deepFryRadio");

//     deepFry.checked === 'on' ? deepFry.value = true : deepFry.value = false;
// };
// let isAirFried = ()=>{
//         if(airFry === true){
//         return true;
//     }
//     return false;
// };
// let isBaked = ()=> {
//     if (bake.checked){
//         return true;
//     } else if (!bake.checked){
//         return false;
//     }
// };
// let isCombo = ()=> {
//     if (combo.checked){
//         return true;
//     }
//     return false;
// };
// let isVegan = ()=> {
//     if (vegan.checked){
//         return true;
//     }
//     return false;
// };


// shopping cart settings

let cartEmpty = document.getElementById("cart-empty");
cartEmpty.innerText = "Cart Is Empty";

let cartValue = 0;
let shoppingCartCounter = document.getElementById("shoppingCartCounter");

// When you click on the shopping cart
const showCart = ()=> show("cart-menu");

// When you click on the close button inside the shopping cart
const closeCart = ()=> hide("cart-menu");


const menuData = [
    
    {
        "id": "0",

        "title": "Cali Spesh (Special)",
        "ingredients": [ "Pepperoni" , "Bell Peppers" , "Onion" , "Sausage" , "Olives" , "Mushrooms"],
        "deepFry": false,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },
    {
        "id": "1",

        "title": "I Eat Cheese Though",
        "ingredients": ["Cheddar", "Mozzarella" , "Parmesan" , "Colby Jack" ],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "2",

        "title": "Mother Nature",
       "ingredients": [ "Spinach", "Artichoke Hearts", "Bell Peppers", "Onions", "Olives", "Mushrooms"],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "3",

        "title": "Meat Package",
        "ingredients": ["Pepperoni" , "Bacon" , "Sausage" ,"Ham"],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "4",

        "title": "One Of Those People",
        "ingredients": ["Pineapples" , "Olives" , "Mushrooms"],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "5",

        "title": "Quit Your Hawaiian'in",
        "ingredients": [ "Pineapples" , "Ham" , "Bacon" ],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "6",

        "title": "Indecisive | What Do You Think?",
        "ingredients": ["Pepperoni" ],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "7",

        "title": "Create Your Own",
        "ingredients": [],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 8.99
    },    
    {
        "id": "item9",

        "title": "Cheeseburger",
        "ingredients": ["Burger Patty", "Cheddar", "Ketchup", "Onion", "Pickles"],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 7.99
    },    
    {
        "id": "item10",

        "title": "Mac Attack",
        "ingredients": ["Cheddar", "Parmesan", "Colby Jack", "Macaroni Noodles"],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 7.99
    },    
    {
        "id": "item11",

        "title": "Samosas Style",
        "ingredients": [ "Potato", "Onion", "Peas" ],
        "deepFry": null,
        "airFry": null,
        "baked": null,
        "combo": null,
        "vegan": null,
        "price": 7.99
    }
];


document.getElementById("submit1").onclick = function(){

        // show("cart-menu");

        cartEmpty.innerText = "";

        cartValue++
        console.log(cartValue);
        shoppingCartCounter.innerText = cartValue;

        let addListItem = document.createElement("LI");
        let listItem = document.createTextNode( menuData[0].title + "\n" + menuData[0].price + "\n");
        addListItem.appendChild(listItem);
        document.getElementById("cart-item-list").appendChild(addListItem);

        if ( cartValue > 9) {
            window.alert("Orders of 10 or more items must order in person")
            cartValue--;
            shoppingCartCounter.innerText = cartValue;
            document.getElementById("cart-item-list").removeChild(addListItem)
        }

};
document.getElementById("submit2").onclick = function(){

    // show("cart-menu");
    cartEmpty.innerText = "";

    cartValue++
    console.log(cartValue);
    shoppingCartCounter.innerText = cartValue;

    let addListItem = document.createElement("LI");
    let listItem = document.createTextNode( menuData[1].title + " " + menuData[1].price);
    addListItem.appendChild(listItem);
    document.getElementById("cart-item-list").appendChild(addListItem);

    if ( cartValue > 9) {
        window.alert("Orders of 10 or more items must order in person")
        cartValue--;
        shoppingCartCounter.innerText = cartValue;
        document.getElementById("cart-item-list").removeChild(addListItem)
    }

};



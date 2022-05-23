//store the products array in localstorage as "products"

document.querySelector("form").addEventListener("submit",myFun);

var product= JSON.parse(localStorage.getItem("item"))||[];

function myFun(){
    event.preventDefault();
    var obj={
        type: document.querySelector("#type").value,
        desc: document.querySelector("#desc").value,
        price: document.querySelector("#price").value,
        image: document.querySelector("#image").value
        }
     product.push(obj);
    localStorage.setItem("item",JSON.stringify(product));
    console.log(product)
    
}

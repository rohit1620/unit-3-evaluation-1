var product= JSON.parse(localStorage.getItem("item"));

product.map(function(elem,index){
    var type =document.createElement("p");
    var desc =document.createElement("p");
    var price = document.createElement("p")
    var img =document.createElement("img");
    var div=document.createElement("div");
    div.setAttribute("class","set")
    type.setAttribute("class","type");
    desc.setAttribute("class","desc");
    price.setAttribute("class","price");
    // btn.setAttribute("class","btn2");

    var btn=document.createElement("button");

    img.src=elem.image;
    desc.innerText=elem.desc;
    price.innerText=elem.price;
    type.innerText=elem.type;
    btn.innerText="Remove";
    btn.addEventListener("click",function(){
        removeItem(elem,index);
    })

    div.append(img,desc,price,type,btn);
    document.querySelector("#all_products").append(div)

})
function removeItem(elem,index){
   product.splice(index,1);
   localStorage.setItem("item",JSON.stringify(product));
   window.location.reload();
}
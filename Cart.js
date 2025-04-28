let cartItems = JSON.parse(localStorage.getItem("cartItems"))
let cartsection = document.getElementById("cart-section")
let cartcount =document.getElementById("cartcount")
let pricevalue =document.getElementById("pricevalue")


function GetitemsfromLC() {
    let CartitemsFromLC = JSON.parse( localStorage.getItem("cartItems"))
    return CartitemsFromLC
 }
 let count = GetitemsfromLC().length
 cartcount.innerText = count



cartItems.map((item, i)=>{
        cartsection.innerHTML += `
          <div class="product-card" >
   
   <div class="image">
                            <img src=${item.Image}>
                        </div>
                        <div class="details">
                            <h3> ${item.name}
                            </h3>
                   
                           <h5> Rs ${item.price}</h5>
                            </div>
                            <button id ="Removebutton"  onclick = "Removecart(${i})">Remove from Cart</button> 
                        </div>
     </div>
        
        `
})

function Removecart(index){
    let cartItems = JSON.parse(localStorage.getItem("cartItems"))
    cartItems.splice(index ,1)
    localStorage.setItem("cartItems" , JSON.stringify(cartItems))
    location.reload()   
}


let price = cartItems.reduce((acc , item )=>{
  return  acc+item.price
},0)
pricevalue.innerHTML =price


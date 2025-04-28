let prod_id =location.search.split("=")[1];
let leftsidespecs = document.getElementById("left-side-specs")
let rightsidespecs = document.getElementById("right-side-specs")
let cartcount = document.getElementById("cartcount")
let productData ;


axios.get(`https://5d76bf96515d1a0014085cf9.mockapi.io/product/${prod_id}`).then((res)=>{
    console.log(res.data);
     productData = res.data

   leftsidespecs.innerHTML = `
    <img id="productImg" src="${res.data.preview}">
   
   `
   rightsidespecs.innerHTML =`
    <div class="product-description">
                    <h1 id="name">${res.data.name}</h1>
                    <h4 id="brand">${res.data.brand}</h4>
                    
                    <h3>Price: Rs <span id="price">${res.data.price}</span></h3>
                     <button  onclick ="addtoCart()"  >Add to Cart</button>
                    <div class="description">
                        <h3>Description</h3>
                        <p id="description">${res.data.description}</p>
                      </div>
                      <div class="product-preview">
                        <h3>Product Preview</h3>
                        <div class="previewImg"  >
                           ${res.data.photos.map((item)=>{
                            return `
                           
                              <div onclick = "Handleimageclick('${item}')"  class="image-wrapper">

                           <img id="img0" class="active" src="${item}">
                        </div>
                             
                            `
                           })}
                        </div>
                      </div>
                  </div> 
   `



   
})

function Handleimageclick(smallImg) {
    console.log(smallImg)
 let bigImg =   document.getElementById("productImg")
 bigImg.src = smallImg

    
}
function GetitemsfromLC() {
   let CartitemsFromLC = JSON.parse( localStorage.getItem("cartItems"))
   return CartitemsFromLC
}
let count = GetitemsfromLC().length

function addtoCart() {
       let CartitemsFromLC = GetitemsfromLC()
       if (CartitemsFromLC == null) {
          let cartItems =[]
          cartItems.push({name :productData.name ,price : productData.price,Image :productData.preview })
          localStorage.setItem( "cartItems" , JSON.stringify(cartItems))
          cartcount.innerText = count
       }else{
         CartitemsFromLC.push({name :productData.name ,price : productData.price,Image :productData.preview })
         localStorage.setItem( "cartItems" , JSON.stringify(CartitemsFromLC))
         let count = GetitemsfromLC().length
         cartcount.innerText = count
       }
}
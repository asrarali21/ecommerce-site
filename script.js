let clothescontainer = document.getElementById("clothescontainer")
let AccessoriesContainer = document.getElementById("Accessories-Container")


axios.get ("https://5d76bf96515d1a0014085cf9.mockapi.io/product")
.then((res)=>{
    res.data.map((item)=>{

       console.log(item);
if (item.isAccessory == true) {
    
    AccessoriesContainer.innerHTML +=  `
   <div onclick ="handleClick(${item.id})" class="product-card" >
   
   <div class="image">
                            <img src=${item.preview}>
                        </div>
                        <div class="details">
                            <h3> ${item.name}
                            </h3>
                           <h4>${item.brand}</h4>
                           <h5>${item.price}</h5>
                            </div>
                        </div>
     </div>
     `
    }else{
        clothescontainer.innerHTML +=      `
   <div onclick ="handleClick(${item.id})"  class="product-card">
   <div class="image">
                            <img src=${item.preview}>
                        </div>
                        <div class="details">
                            <h3> ${item.name}
                            </h3>
                           <h4>${item.brand}</h4>
                           <h5>${item.price}</h5>
                            </div>
                        </div>
     </div>
 `
    }
    })
})

function handleClick(id) {
    location.assign(`http://127.0.0.1:3000/Shoplane-Site/Productspec.html?prod_id=${id}`)
}
   


    
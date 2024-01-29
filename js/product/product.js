window.onload=init()
function init()
{
    mainDiv=document.getElementById('products')
    console.log(mainDiv)
    fetch("https://dummyjson.com/products")
    .then(function (p) {
        console.log(p)
        return p.json()
    })
    .then(function(x){
        console.log(x)
        displayData(x)
    })

}
//const mainDiv=document.getElementById('products')

/*fetch("https://dummyjson.com/products")
    .then(function (p) {
        console.log(p)
        return p.json()
    })
    .then(function(x){
        console.log(x)
        displayData(x)
    })*/
    function displayData (data)
    {
        data.products.forEach(function (pro)
        {
            const product=document.createElement('div')
            const title=document.createElement('p')
           // const image=document.createElement('img')
            const price=document.createElement('p')
            title.textContent=pro.title;
            price.textContent=pro.price;
          // image.src=pro.images[0];
            product.classList.add('product')
            product.append(title,price)
        
            mainDiv.appendChild(product)
        });

    }

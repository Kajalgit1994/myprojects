
 const mainDiv= document.getElementById('products')
    fetch("https://fakestoreapi.com/products")
	.then(function (p) {
		console.log(p)
		return p.json()
	})
    .then(function(x){
        console.log(x)
        displayData(x)
    })
    .catch(function(err){console.log(err)})
    function displayData (data)
    {
        data.forEach(function (pro)
        {
            const product=document.createElement('div')
            const title=document.createElement('p')
           const image=document.createElement('img')
            const price=document.createElement('p')
            title.textContent=pro.title;
            image.src=pro.image[0];
            price.textContent=pro.price;
           
            product.classList.add('product')
            product.append(title,image,price)
            mainDiv.appendChild(product)


           
        });

    }

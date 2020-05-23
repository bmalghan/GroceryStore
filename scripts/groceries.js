	
// Array of products, each product is an object with different fieldset
// A set of ingredients should be added to products		 

var products = [
	{
		name: "brocoli",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: false
	},
	{
		name: "apple",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "banana",
		vegetarian: true,
		glutenFree: true,
		price: 1.99,
		organic: true
	},
	{
		name: "bread",
		vegetarian: true,
		glutenFree: false,
		price: 2.35,
		organic: false
	},
	{
		name: "pasta",
		vegetarian: true,
		glutenFree: false,
		price: 4.00,
		organic: false
	},
	{
		name: "cheese",
		vegetarian: true,
		glutenFree: true,
		price: 4.50,
		organic: false
	},
	{
		name: "chocolate",
		vegetarian: true,
		glutenFree: false,
		price: 0.99,
		organic: false
	},
	{
		name: "chicken",
		vegetarian: false,
		glutenFree: true,
		price: 5.00,
		organic: true
	},
	{
		name: "milk",
		vegetarian: true,
		glutenFree: true,
		price: 3.00,
		organic: true
	},
	{
		name: "salmon",
		vegetarian: false,
		glutenFree: true,
		price: 10.00,
		organic: false
	}
];
	


// given restrictions provided, make a reduced list of products
// prices should be included in this list, as well as a sort based on price

function restrictListProducts(prods, restrictions) {
	let filteredProducts = filterProducts(restrictions);

	//sort by price
	filteredProducts.sort((a, b) => (a.price > b.price) ? 1 : -1);


	let product_names = [];
	let product_prices = [];
	for (let i=0; i<filteredProducts.length; i+=1) {
		product_names.push(filteredProducts[i].name);
		product_prices.push(filteredProducts[i].price);
	}
	return [product_names, product_prices];
}


//filters with all restrictions and returns array of filtered products
function filterProducts(restrictions) {
	let filteredProducts = [];
	let flag = true;

	for(let i = 0; i < products.length; i+=1){
		for(let j = 0; j < restrictions.length; j+=1){
			if(!products[i][restrictions[j]]){
				flag = false;
			}
		}

		if(flag){
			filteredProducts.push(products[i]);
		}

		flag = true;
	}

	return filteredProducts;
}
// Calculate the total price of items, with received parameter being a list of products
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}

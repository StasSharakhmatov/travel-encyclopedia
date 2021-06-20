if (localStorage.getItem("cart")) {								// проверка на наличие корзины в localStorage
	const cart = JSON.parse(localStorage.getItem("cart"));		// получение cart из localStorage
	let shop = new Cart(cart);
	document.querySelector('.info').innerHTML = '';
	document.querySelector(".info").append(shop.render());

	document.querySelector(".info").addEventListener('click', (event) => {
		let target = event.target;
		if (target.classList.contains('delete')) {
			shop.goodsDelete(target.dataset['articul']);
			document.querySelector(".info").innerHTML = '';
			document.querySelector(".info").append(shop.render());
			localStorage.setItem('cart', JSON.stringify(shop.items));
			return true;
		}
		else if (target.classList.contains('plus')) {
			shop.goodsPlus(target.dataset['articul']);
			document.querySelector(".info").innerHTML = '';
			document.querySelector(".info").append(shop.render());
			localStorage.setItem('cart', JSON.stringify(shop.items));
			return true;
		}
		else if (target.classList.contains('minus')) {
			shop.goodsMinus(target.dataset['articul']);
			document.querySelector(".info").innerHTML = '';
			document.querySelector(".info").append(shop.render());
			localStorage.setItem('cart', JSON.stringify(shop.items));
			return true;
		}
	});
}
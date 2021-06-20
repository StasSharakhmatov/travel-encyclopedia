class Cart {
	constructor(
		items, 
		cartClass = "cart", 
		plusClass = "plus", 
		minusClass = "minus", 
		deleteClass = "delete", 
		currency = ""
	) {
		this.items = items;
		this.cartClass = cartClass;
		this.plusClass = plusClass;
		this.minusClass = minusClass;
		this.deleteClass = deleteClass;
		this.currency = "EUR";
	}
	goodsPlus(art) {
		this.items[art]["count"]++;
	}
	goodsMinus(art) {
		if (this.items[art]["count"] - 1 == 0) {
			this.goodsDelete(art);
		} else {
			this.items[art]["count"]--;
		}
	}
	goodsDelete(art) {
		delete this.items[art];
	}
	getTotal() {
		let total = 0;
		for (let key in this.items) {
			total += this.items[key]["count"] * this.items[key]["price"];
		}
		return total;
	}
	render() {
		let table = document.createElement("table");		// создаётся таблица (корзина)
		table.classList.add(this.cartClass);				// в таблицу добавляется класс с конструктора

		let thead = document.createElement("thead");

		let header = document.createElement("tr");			// шапка таблицы
		header.classList.add("topic");

		let h1 = document.createElement("td");
		h1.innerHTML = "Удалить";
		header.append(h1);
		
		let h2 = document.createElement("td");
		h2.innerHTML = "Тур";
		header.append(h2);

		let h3 = document.createElement("td");
		h3.innerHTML = "Отнять";
		header.append(h3);

		let h4 = document.createElement("td");
		h4.innerHTML = "Количество";
		header.append(h4);

		let h5 = document.createElement("td");
		h5.innerHTML = "Добавить";
		header.append(h5);

		let h6 = document.createElement("td");
		h6.innerHTML = "Сумма";
		header.append(h6);

		thead.append(header);

		table.append(thead);

		let tbody = document.createElement("tbody");

		for (let key in this.items) {
			let goods = this.items[key];

			const tr = document.createElement("tr");		// создаётся строка

			let td = document.createElement("td");			// создаётся ячейка, в которой кнопка "удалить" (для удаления товара с корзины)
			let button = document.createElement("button");
			button.classList.add(this.deleteClass);
			button.innerHTML = "x";
			button.setAttribute("data-articul", key);
			td.append(button);
			tr.append(td);

			td = document.createElement("td");				// создаётся ячейка с названием выбранного тура данного вида
			let h3 = document.createElement("h3");
			h3.innerHTML = goods.name;
			td.append(h3);
			tr.append(td);

			td = document.createElement("td");				// создаётся ячейка, в которой кнопка "минус один тур" данного вида
			button = document.createElement("button");
			button.classList.add(this.minusClass);
			button.innerHTML = "-";
			button.setAttribute("data-articul", key);
			td.append(button);
			tr.append(td);

			td = document.createElement("td");				// создаётся подсчёт общего количества товаров одного вида в корзине
			let p = document.createElement("p");
			p.innerHTML = goods.count;
			td.append(p);
			tr.append(td);

			td = document.createElement("td");				// создаётся ячейка, в которой кнопка "плюс один тур" данного вида
			button = document.createElement("button");
			button.classList.add(this.plusClass);
			button.innerHTML = "+";
			button.setAttribute("data-articul", key);
			td.append(button);
			tr.append(td);

			td = document.createElement("td");				// создаётся ячейка, в которой общая сумма товара (товаров) данного вида
			p = document.createElement("p");
			p.innerHTML = goods.count * goods.price + " " + this.currency;
			td.append(p);
			tr.append(td);

			tbody.append(tr);

			table.append(tbody); 
		}

		let tbody2 = document.createElement("tbody");

		let tr = document.createElement("tr");				// создаётся строка, в которой будет ячейка с общей суммой всех туров в корзине

		let but = document.createElement("button");
		but.classList.add("order");
		but.innerHTML = "Оформить заказ";
		tr.append(but);

		let td = document.createElement("td");
		td.setAttribute("colspan", 6);
		td.style.textAlign = "right";
		td.innerHTML = "<span>Total: </span>" + this.getTotal() + " " + this.currency;
		tr.append(td);

		tbody2.append(tr);

		table.append(tr);

		return table;
	}
}
const cart = {
	"madeira": {
		"name": "Мадейра",
		"image": "images/tours/madeira.jpg",
		"description": "Путешествие, в котором вы сможете побывать на самом высоком в Европе утесе, искупаться в лавовых бассейнах, взойти на одну из вершин Мадейры, увидеть Фуншал с высоты канатной дороги и продегустировать пунш у двоюродного дяди Криштиану Роналду.",
		"price": 500
	},
	"jordan": {
		"name": "Иордания",
		"image": "images/tours/jordan.jpg",
		"description": "Тур в это потрясающее королевство подарит вам возможность посетить древний город Петра, отправиться в джип-тур по пустыне Вади-Рам, поснорклить в Красном море, расслабиться в горячих источниках Маин и отдохнуть на курорте Мертвого моря.",
		"price": 420
	},
	"nepal": {
		"name": "Непал",
		"image": "images/tours/nepal.jpg",
		"description": "Вас ждет невероятное приключение! В Непале вы сможете отправиться на сафари на слонах, пройтись по знаменитым подвесным мостам, искупаться в горячих источниках в Джину-Данда, совершить треккинг в Гималаях а также олучить благословение от ламы.",
		"price": 650
	},
	"kenya": {
		"name": "Кения",
		"image": "images/tours/kenya.jpg",
		"description": "Отпраляйтесь вместе с нами в сногсшибательную, наполненную впечатлениями, Кению! Величественная панорама Килиманджаро, сафари в лучших парках Африки, ущелья Великой Рифтовой долины, берег Индийского океана. Всё это вы сможете увидеть в этом туре!",
		"price": 700
	},
	"tanzania": {
		"name": "Танзания",
		"image": "images/tours/tanzania.jpg",
		"description": "Отправившись в Тазанию вас ждёт невероятно насыщенная программа! Вы отправиться на необитаемый остров на корабле, займетесь снорклингом в Индийском океане, побываете в гостях у племени масаи, проведете ночь в сафари кемпинге в Серенгети и устроете пикник в буше.",
		"price": 690
	},
	"antarctica": {
		"name": "Антарктида",
		"image": "images/tours/antarctica.jpg",
		"description": "Путешествие пробирающее до мурашек, которое вы запомните на всю жизнь! Вы сможете преодолеть пролив Дрейка, исследовать берега Южных Шетландских островов, отправиться в хайкинг по острову Винке и пожить на борту антарктического экспедиционного судна!",
		"price": 2000
	},
}

let tours = `<div class="pages wow bounceInUp" data-wow-duration = "2s">`;			// создаём класс в котором отрисовываем массив туров
tours += `<h1 class="notice">У вас есть уникальная возможность воспользоваться подборкой туров от нашей редакции и отправиться в умопомрачительное путешествие в разные уголки планеты! Солнечная Мадейра, таинственная Иордания, загадочная Танзания, и даже суровая Антарктида, где вы сможете почувствовать себя в роли участника экспедиций!</h1>`;
for (let key in cart) {																// перебираем массив (обьект)
	tours += `<div class="bar">`;
	tours += `<h2>${cart[key]["name"]}</h2>`;
	tours += `<img src="${cart[key]["image"]}" class="img">`;
	tours += `<p>${cart[key]["description"]}</p>`;
	tours += `<p class="price">${cart[key]["price"]} EUR</p>`
	tours += `<button class="toCart" data-articul="${key}">ДОБАВИТЬ В КОРЗИНУ</button>`;// добавляем атрибут articul к кнопке, чтобы по ..
	tours += `</div>`;																// .. нажатию этот товар добавлялся событием в корзину
}
tours += `</div>`;
document.querySelector(".content").innerHTML = tours;

const data = {};

document.querySelector('.content').addEventListener('click', event => {
	if (event.target.classList.contains('toCart')) {								// если класс содержит toCart, то..
		let articul = event.target.dataset['articul'];								// получаем в переменную артикул (товар)
		if (data[articul] !== undefined) {											// если этот товар уже содержится, то прибавляем 1
			data[articul]['count']++;
		} else {				
			data[articul] = cart[articul];												// если нет, то назначаем количество вручную, то есть 1
			data[articul]['count'] = 1;
		}
		localStorage.setItem('cart', JSON.stringify(data));							// сохранение корзины в localStorage
	}
})
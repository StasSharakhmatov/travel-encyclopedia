const questionsAnswers = [
["Каспийское море - это:", "Море", "Океан", "Залив", "Озеро", 4],
["Самая длинная река в мире?", "Амазонка", "Дунай", "Нил", "Днепр", 1],
["Какое самое мелкое море в мире?", "Японское", "Азовское", "Мраморное", "Мертвое", 2],
["В Мексиканском заливе развита добыча:", "Золота", "Газа", "Нефти", "Алмазов", 3],
["Сколько человек за всю истории переплыло пролив Ла-Манш?", "1", "100", "Около 1000", "Около 10000", 3],
["Страна с найбольшим количеством лесов?", "Бразилия", "Китай", "Канада", "Россия", 4],
["Самая высокая вершина на Земле:", "Джомолунгма", "Килиманджаро", "Эльбрус", "Монблан", 1],
["Степи распространены на всех континентах, за исключением:", "Евразии", "Антарктиды", "Северной Америки", "Африки", 2],
["Каких пустынь не существует?", "Глинистых", "Каменистых", "Морских", "Арктических", 3],
["Гренландия - это:", "Континент", "Остров", "Архипелаг", "Перешеек", 2],
["Сколько планет в Солнечной системе?", "7", "8", "9", "10", 2],
["Какая по счету от Солнца планета Земля?", "1", "2", "3", "4", 3],
["Свет доходит от Солнца до Земли за:", "5 минут", "8 минут", "20 минут", "23 минуты", 2],
["Сутки на Меркурии длятся:", "1 день", "220 дней", "356 дней", "176 дней", 4],
["Самая крупная планета в Солнечной системе?", "Юпитер", "Сатурн", "Земля", "Уран", 1],
];

let rightAnswers = 0;
let numberOfQuestion = 0;
let calculateAnswers = questionsAnswers.length;

function quiz(play) {

	if (play == 0) {
		document.querySelector("#choice1").style.display = "block";
		document.querySelector("#choice2").style.display = "block";
		document.querySelector("#choice3").style.display = "block";
		document.querySelector("#choice4").style.display = "block";
		document.querySelector("#question").style.display = "block";

		document.querySelector("#choice1").innerHTML = questionsAnswers[numberOfQuestion][1];
		document.querySelector("#choice2").innerHTML = questionsAnswers[numberOfQuestion][2];
		document.querySelector("#choice3").innerHTML = questionsAnswers[numberOfQuestion][3];
		document.querySelector("#choice4").innerHTML = questionsAnswers[numberOfQuestion][4];
		document.querySelector("#question").innerHTML = questionsAnswers[numberOfQuestion][0];

		document.querySelector("#greeting").style.display = "none";
		document.querySelector("#start").style.display = "none";
		document.querySelector("#restart").style.display = "inline";


	} else {
		if (play == questionsAnswers[numberOfQuestion][5]) {
			rightAnswers++;
			document.querySelector("#result").innerHTML = "Правильно!";

		} else {
			document.querySelector("#result").innerHTML = "Не верно! Правильный ответ: " + 
			questionsAnswers[numberOfQuestion][questionsAnswers[numberOfQuestion][5]];
		}

		numberOfQuestion++;


		if (numberOfQuestion < calculateAnswers) {
			document.querySelector("#choice1").innerHTML = questionsAnswers[numberOfQuestion][1];
			document.querySelector("#choice2").innerHTML = questionsAnswers[numberOfQuestion][2];
			document.querySelector("#choice3").innerHTML = questionsAnswers[numberOfQuestion][3];
			document.querySelector("#choice4").innerHTML = questionsAnswers[numberOfQuestion][4];
			document.querySelector("#question").innerHTML = questionsAnswers[numberOfQuestion][0];

		} else {
			document.querySelector("#choice1").style.display = "none";
			document.querySelector("#choice2").style.display = "none";
			document.querySelector("#choice3").style.display = "none";
			document.querySelector("#choice4").style.display = "none";
			document.querySelector("#question").style.display = "none";
			document.querySelector("#restart").style.display = "inline";

			let percentRightAnswers = Math.round(rightAnswers / calculateAnswers * 100);

			let grade = "Плохо";

			if(percentRightAnswers > 70) {
				grade = "Хорошо!";
			};
			
			if(percentRightAnswers == 100) {
				grade = "Отлично!";
			};

			document.querySelector("#result").innerHTML = "Правильных ответов: " + rightAnswers + " из " + calculateAnswers + " (" + 
			+ percentRightAnswers + "%)<br>" + grade;

		}

	}

}
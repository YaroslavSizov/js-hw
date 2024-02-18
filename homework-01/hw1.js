// Задание 1

//     - Объяви две переменные хранящие название и цену товара: `name` и`price`
//         - Присвой переменным следующие характеристики товара(сразу при объявлении)
//             - название: Генератор защитного поля
//                 - цена: 1000
//                     - Используя шаблонную строку выведи в консоль информацию о товаре, получится:
// `'Выбран «Генератор защитного поля», цена за штуку 1000 кредитов'`.
// - Присвой товару новую цену - 2000
//     - Используя шаблонную строку выведи в консоль информацию о товаре, получится:
// `'Выбран «Генератор защитного поля», цена за штуку 2000 кредитов'`.

// const name = "Генератор защиитного поля";
// let price = 1000;
// const messageName = `'Выбран "${name}", цена за штуку ${price}'`;
// // console.log(messageName);

// price = 2000;
// const priceMessage = `'Выбран "${name}", цена за штуку ${price}'`;
// // console.log(priceMessage);


// //  Задание 2

// // Напиши скрипт проверки количества товаров на складе.Есть переменные`total`
// //     (количество товаров на складе) и`ordered`(единиц товара в заказе).

// // Сравни эти значения и по результатам выведи:

// // - Если в заказе указано число, превышающее количество товаров на складе, то
// //   выведи сообщение`"На складе недостаточно твоаров!"`.
// // - В другом случае выводи сообщение`"Заказ оформлен, с вами свяжется менеджер"`.

// // Проверь работоспособность кода с разными значениями переменной`ordered`,
// //     например`20`, `80` и`130`.


// const total = 100;
// const ordered = 200;
// const orderedMessage = ordered <= total ? `"Заказ оформлен, с вами свяжется менеджер"` : `"На складе недостаточно твоаров!"`;
// // console.log(orderedMessage);


// // # Задание 3

// // Напиши скрипт имитирующий авторизацию администратора в панели управления.

// // Есть переменная `message` в которую будет записано сообщение о результате.При
// // загрузке страницы у посетителя запрашивается пароль через `prompt`:

// // - Если нажали`Cancel`, записать в `message` строку`'Отменено пользователем!'`
// //     - В протовном случае, если введен пароль который совпадает со значением
// // константы`ADMIN_PASSWORD`, записать в `message` строку`'Добро пожаловать!'`
// //     - В противном случае, то есть если ни одно из предыдущих условий не выполнилось,
// //         записать в `message` строку`'Доступ запрещен, неверный пароль!'`
// //             - После всех проверок вывести в `alert` значение переменной`message`.


// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;


// const result = prompt("Введите пароль")
// console.log(result);

// if (result === null) {
//     message = "Отменено пользователем!";
// } else if (result === ADMIN_PASSWORD) {
//     message = "Добро пожаловать!";
// } else {
//     message = "Доступ запрещён!";
// }
// console.log(message);
// alert(message)



// # Задание 4

// На счету пользователя есть `23580` кредитов, значение хранится в переменной
//     `credits`(создай и присвой).Пользователь решает купить ремонтных дроидов,
//         которые стоят по `3000` кредитов за штуку.Цена одного дроида хранится в
// переменной`pricePerDroid`(создай и присвой).

// При посещении страницы, используя`prompt`, необходимо спросить количество
// дроидов которые пользователь хочет купить и сохранить в переменную.

// Напиши скрипт который:

// - Если в `prompt` была нажата кнопка`Cancel`, выводит в консоль сообщение
//     `'Отменено пользователем!'`.
// - В противном случае, рассчитывает общую цену заказа и сохраняет в переменной
//     `totalPrice`.
// - Проверяет сможет ли пользователь оплатить заказ:
// - если сумма к оплате превышает количество кредитов на счету, выводи в консоль
// сообщение`'Недостаточно средств на счету!'`.
//   - в противном случае необходимо посчитать остаток кредитов на счету и вывести
// сообщение
//     `'Вы купили [число] дроидов, на счету осталось [число] кредитов.'`.


// const credits = 23580;
// const pricePerDroid = 3000;
// let totalPrice;
// let messagePay;

// const result = prompt("Введите кличество дроидов")
// console.log(result);

// if (typeof result !== NaN) {
//     console.log(`yes`);
//     messagePay = "Введите кличество дроидов";
// } else
//     if (result === null) {
//     messagePay = "Отменено пользователем!";
// } else if (result * pricePerDroid > credits) {
//     messagePay = "Недостаточно средств на счету!";
// } else {
//     let rem = credits - (result * pricePerDroid);
//     messagePay = `"Вы купили ${result} дроидов, на счету осталось ${rem} кредитов"`;
// }
// // console.log(messagePay);
// alert(messagePay)




// # Задание 5

// Пользователь может оформить доставку товара к себе в страну, указав ее при
// посещении страницы в`prompt`.Учти, пользователь может ввести имя страны не
// только буквами нижнего регистра, а к примеру`'кИтАЙ'`.

// Напиши скрипт который выводит сообщение о стоимости доставки в указанную страну.
// Обязательно используй`switch`.Формат сообщения:
// `'Доставка в [страна] будет стоить [цена] кредитов'`.

// Но доставка есть не везде, если указанной страны нет в списке, то выводи в
// `alert` сообщение`'В вашей стране доставка не доступна'`.

// Ниже приведен список стран и стоимость доставки.

// - Китай - 100 кредитов
//     - Чили - 250 кредитов
//         - Австралия - 170 кредитов
//             - Индия - 80 кредитов
//                 - Ямайка - 120 кредитов


// const china = 100;
// const chili = 250;
// const aust = 170;
// const ind = 80;
// const jam = 120;

// const result = prompt("Введите свою страну")
// console.log(result);

// let message;

// switch (result.toLowerCase()) {
//     case 'китай':
//         message = `'Доставка в Китай будет стоить ${china} кредитов'` ;
//         break;
//     case 'чили':
// message = `'Доставка в Чили будет стоить ${chili} кредитов'` ;
//         break;
//     case 'австралия':
// message =  `'Доставка в Австралию будет стоить ${aust} кредитов'`;
//         break;
//     case 'индия':
// message =  `'Доставка в Индию будет стоить ${ind} кредитов'`;
//         break;
//     case 'ямайка':
// message =  `'Доставка в Ямайку будет стоить ${jam} кредитов'`;
//         break;
//     default:
//         message = `'В вашей стране доставка не доступна'`;
// }


// alert(message);


// # Задание 6

// Напиши скрипт который просит посетителя ввести число в `prompt` до тех пор, пока
// посетитель на нажмет `Cancel` и каждый раз добавляет введенное значение к общей сумме.

// - При загрузке страницы пользователю предлагается в `prompt` ввести число.Ввод
//   добавляется к значению переменной`total`.
// - Операция ввода числа продолжается до тех пор, пока пользователь не нажмет
// кнопку `Cancel` в`prompt`.
// - После того как пользователь прекратил ввод нажав кнопку`Cancel`, показать
//     `alert` со строкой`'Общая сумма чисел равна [сумма]'`.

// > 🔔 Делать проверку того, что пользователь ввел именно число, а не произвольный
//     > набор символов, не нужно.Если хочешь, в случае некорректного ввода, показывай
//         > `alert` с текстом`'Было введено не число, попробуйте еще раз'`, при этом
//             > результат`prompt` плюсовать к общей сумме не нужно, после чего снова
//                 > пользователю предлагается ввести число в prompt.


let input;
let total = 0;

do {
    input = prompt('Введите число');
    total += Number(input);
} while (input !== null)

let message = `'Общая сумма чисел равна ${total}'`

alert(message);
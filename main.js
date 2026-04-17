// В этом небольшом приложении реализован интерфейс отправки сообщения. Пока сообщение никуда не отправляется, но оно уже отображается под блоком ввода. При отправке сообщения происходит проверка текста на наличие ссылок (на наличие слова http), если пользователь добавил в текст ссылку, отображается сообщение с ошибкой "В тексте не должно быть ссылок!".

// 1) Добавьте автоматическое удаления всех слов http в тексте при отправке сообщения. Это действие сделает ссылки нерабочими.

// 2) Добавьте проверку наличия ссылок (слова http) при вводе текста, что бы пользователь приложения сразу понял, что ввел недопустимое слово.

// Функция, возвращающая новую кнопку
function getButton(text) {
  let buttonEl = document.createElement("button");
  buttonEl.textContent = text;
  return buttonEl;
}

// Обёртка для текстового поля и ошибки
let wrapperEl = document.createElement("div");
wrapperEl.classList.add("wrapper");

let errorEl; // Переменная для элемента ошибки

// Создание ошибки
function createError(text) {
  errorEl = document.createElement("span");
  errorEl.classList.add("error");
  errorEl.textContent = text;
  wrapperEl.append(errorEl);
}

// Заголовок
let titleEl = document.createElement("h1");
titleEl.textContent = "Message";

// Создание текстового поля
let msgTextEl = document.createElement("textarea");
msgTextEl.placeholder = "Message text";

let textValue = msgTextEl.value.trim();

wrapperEl.append(msgTextEl);

let sendBtnEl = getButton("Send message"); // Кнопка отправки сообщения

let resultTextEl = document.createElement("p"); // Текст отправленного сообщения
resultTextEl.classList.add("result");


msgTextEl.oninput = function () {
  let inputValue = msgTextEl.value.trim()

  if (errorEl) {
    errorEl.remove()
  }
  if (inputValue.includes("http")) {
    createError("There should be no links in the text!");
    return
  }
}




sendBtnEl.onclick = function () {
  let textValue = msgTextEl.value.trim();
  let textValueWithoutLink = ""

  // Удаление ошибки, если она уже существует
  if (errorEl) {
    errorEl.remove();
  }

  // Создание ошибки, если в тексте есть ссылка
  if (textValue.includes("http")) {
    createError("There should be no links in the text!");
    textValueWithoutLink = textValue.replace("http", "")
    resultTextEl.textContent = textValueWithoutLink = textValue.replaceAll("http", "")
  } else {
    resultTextEl.textContent = textValue;

  }

};
document.body.append(titleEl, wrapperEl, sendBtnEl, resultTextEl);

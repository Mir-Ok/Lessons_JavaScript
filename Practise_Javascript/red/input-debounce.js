(() => {
    const WAIT_TIME_MS = 500;

    // создадим место для ввода пользователем
    const textInput = document.createElement('input');
    const display = document.createElement('div');

    let timeout;

    // обработчик поля для ввода
    textInput.addEventListener('input', () => {
        clearTimeout(timeout);
        // задаем отложенное выполнение функции
        timeout = setTimeout(() => {
            // функция реагирует на любой ввод в поле
            display.textContent = textInput.value;
        }, WAIT_TIME_MS)
    });
 
    document.addEventListener('DOMContentLoaded', () => {
        // добавляем элементы страницы
        document.body.append(textInput);
        document.body.append(display);
    });

})();
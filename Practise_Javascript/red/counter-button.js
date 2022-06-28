// так вызывать скрипт правильно, это не зависи от правильности продключения
document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');

    let count = 0;

    function increment() {
        // постфиксное
        button.textContent = count++
    }

    // вызовем для фиксации нулевого значения
    increment();
    
    // зарегиструем функцию как обработчик клика 
    button.addEventListener('click', increment);

    // добавим кнопку на страницу
    document.body.append(button)

});
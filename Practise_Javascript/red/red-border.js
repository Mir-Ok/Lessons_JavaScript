// Добавим IIFE чтобы не засорять код, стрелочная
(() => {
    // выберем все теги div
    const divElements = document.querySelectorAll('div');
    // переберем элементы и каждый покрасим
    for (const el of divElements) {el.style.border = '1px solid red'};
})();

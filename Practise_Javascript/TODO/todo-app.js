(function() {   
    // создаем и возвращаем заголовок приложения
    // поместим название в аргумент для легкости замены
    function createAppTitle(title) {    
        // в переменную помещаем DOM-элемент 
        let appTitle = document.createElement('h2');
        // помещаем значение аргумента в тег
        appTitle.innerHTML = title;
        // возврат обязателен, иначе езультат не вынуть
        return appTitle;
    }

    // создаем и возвращаем форму для создания дела
    function createTodoItemForm() {
        let form = document.createElement('form');
        let input = document.createElement('input');
        let button = document.createElement('button');
        let buttonWrapper = document.createElement('div');

        // дополним наши элементы атрибутами, присвоим классы и свойства
        // чтобы связать с заданными настрйоками из bootstrap
        form.classList.add('input-group', 'mb-3');
        input.classList.add('form-control');
        input.placeholder = 'Введите название нового дела';
        buttonWrapper.classList.add('input-group-append');
        button.classList.add('btn','btn-primary');
        button.textContent = 'Добавить дело';

        // объединяем элементы в единую структуру, вкладываем
        buttonWrapper.append(button);
        form.append(input);
        form.append(buttonWrapper);

        // как это выглядело бы в виде html
        // <form class='input-group', 'mb-3'>
        //    <input class='form-control' placeholder='Введите название нового дела'>
        //    <div class='input-group-append'>
        //        <button class='btn btn-primary'>Добавить дело</button>
        //    </div>
        // </form>
        
        return {form, 
            input,  // если не вернуть отдельно, неоткуда получить данные от юзера
            button,};
    }

    // создаем и возвращаем список элементов
    function createTodoList() {
        // помещаем в переменную список
        let list = document.createElement('ul');
        list.classList.add('list-group');
        return list;
    }

    function createTodoItem(name) {
        
        // создаем кнопки и наполняем
        let item = document.createElement('li');
        item.textContent = name;

        let doneButtton = document.createElement('button');
        doneButtton.textContent = 'Готово';
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        
        // создаем контейнер для единого офрмления
        let buttonGroup = document.createElement('div');

        // устанавливаем стили
        item.classList.add('list-group-item', 'd-flex', 'justify-content-between','align-items-center');
        doneButtton.classList.add('btn','btn-success');
        deleteButton.classList.add('btn','btn-danger')
        buttonGroup.classList.add('btn-group','btn-group-sm');
        
        // кнопки собираем в элемент с единым стилем          
        buttonGroup.append(doneButtton);
        buttonGroup.append(deleteButton);
        item.append(buttonGroup);

        // приложению нужен доступ к самому элементу и кнопкам
        // для обработки события нажатия
        return {
            item,
            doneButtton,
            deleteButton,
        };

    } 
    
    // соберем обработчик в функцию? в аргументы изменяемые параметры
    function createTodoApp(container, title = 'Список дел') {
        // создаем контейнерб теперь передается аргументом
        // let container = document.getElementById('todo-app');
                
        // создаем переменные при помощи функций
        let todoAppTitle = createAppTitle(title);
        let todoItemForm = createTodoItemForm();
        let todoList = createTodoList();

        // для демонстрации
        // let todoItems = [createTodoItem('Сходить за хлебом'), createTodoItem('Купить молоко'),]

        // размещаем переменные в контейнере
        container.append(todoAppTitle);
        container.append(todoItemForm.form);
        container.append(todoList);

        // для демонстрации
        // todoList.append(todoItems[0].item);
        // todoList.append(todoItems[1].item);

        // браузер создает событие submit на форме по нажатию Enter 
        todoItemForm.form.addEventListener('submit', function(e){
            // предотвратим обновление страницы при отправке формы
            e.preventDefault();

            // не создаем элемент, если поле для ввода пустое
            if (!todoItemForm.input.value) {
                return;
            }

            // создаем и добавляем новое дело с названием поля для ввода
            // для предварительного просмотра добавления
            // todoList.append(createTodoItem(todoItemForm.input.value).item);
            
            // добавим код с обработчиками событий
            let todoItem = createTodoItem(todoItemForm.input.value);

            // добавляем обработчики на кнопки
            todoItem.doneButtton.addEventListener('click', function() {
                todoItem.item.classList.toggle('list-group-item-success');
            });
            todoItem.deleteButton.addEventListener('click', function() {
                if (confirm('Вы уверены?')) {
                    todoItem.item.remove();
                }
            });
            
            // добавление в список
            todoList.append(todoItem.item);

            // обнуляем значение в поле, чтобы не удалять вручную
            todoItemForm.input.value = '';
        });
    }

    // Поместим элементы в DOM страницы 
    // Создадим обработчик Loaded, чтобы получить доступ в DOM загрузив html
    // document.addEventListener('DOMContentLoaded', function() {

    //    // вызываем функцию создания контейнера
    //    createTodoApp(document.getElementById('my-todos'), 'Мои дела');
    //    createTodoApp(document.getElementById('mom-todos'), 'Дела мамы');
    //    createTodoApp(document.getElementById('dad-todos'), 'Дела папы');
    //    
    //    // Закомментили, чтобы создать скрипт из файла, переимeновали в todo-app.js
    // });   
    
    // поместим в глобальную область видимости
    window.createTodoApp = createTodoApp;
})();
# Задача

Сделать анимацию переключения между экранами стека экранов мобильного сайта, эмулирующую iOS-анимацию. Есть корневая страница Library, из которого можно пойти на один из трех дочерних экранов: Artists, Albums, Songs, у каждого из которых еще по 3 дочерних экрана со сгенеренными названиями. То есть глубина стэка — 3 экрана максимум.

При этом заголовок Library/Artists/Albums/Songs уезжает/приезжает как показано на видео https://youtu.be/2eBsRsFzfdQ?t=2m39s из своего положения заголовка экрана на место рядом со стрелкой назад. А новый экран приезжает справа.

Каждый экран должен находиться по отдельному URL.

Ссылка для вдохновения: [page-transitions.com](https://page-transitions.com/)

Итогом выполнения задачи считается этот репозиторий с кодом, а также публичная ссылка с работающием в последних iOS/Android-браузерах решением.

# Обязательные технологии

* react
* typescript

# Опциональные/рекомендуемые технологии

* [react-slot-fill](https://github.com/camwest/react-slot-fill)
* [popmotion](https://github.com/Popmotion/popmotion)/[popmotion-pose](https://github.com/Popmotion/popmotion/tree/master/packages/popmotion-pose)
* [history](https://github.com/ReactTraining/history)
* [react-router 4](https://github.com/ReactTraining/react-router)

# toxin-hotel

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

###Про проект
Макет: https://www.figma.com/file/MumYcKVk9RkKZEG6dR5E3A/MetaLamp-(former-FSD)-frontend-education-program.-The-2nd-task?node-id=18370%3A2
UI-kit этого отеля: https://github.com/alimsadetov/hotel
Посмотреть сайт можно по ссылке https://toxin-hotel-lemon.vercel.app/

На данный момент реализовано: 

1. Vue router. Переход между компонентами происходит без обновления страницы.
2. Возможность входа в аккаунт. Выполняется валидация введённых данных. После успешного введения данных кнопка войти исчезает со всех страниц и отображается введённый username. https://toxin-hotel-lemon.vercel.app/signin
3. Реализована рандомная генерация выбора комнат (https://toxin-hotel-lemon.vercel.app/rooms). Рандомно выбирается картинка, номер комнаты и цена в сутки. При клике на любую их них происходит динамическая навигация на страницу, в которой отображаются все параметры комнаты, по которой кликнули (фото, номер и цена).
4. Реализован виджет бронирования комнаты с автоматическим подсчётом цены в зависимости от выбранной даты.
5. Возможность авторизованным пользователям оставлять комментарии. В случае неавторизованности, происходит переход на страницу входа

Планируется:
1. Добавить возможность регистрации.
2. Хранения комментариев.
3. Фильтра комнат.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

ДЗ-8
применить createSelector, где необходима мемоизация (например, селектор корзины)
добавить RRD - https://reactrouter.com/start/library/installation
сделать страницу HomePage (контент на ваше усмотрение)
сделать страницу /restaurants. На ней рисуем табы ресторанов
по клику на таб открываем подстраницу restaurants/:restaurantId с названием ресторана и двумя табами - меню и отзывы. Дефолтно открыт таб меню
по клику на табы меню, отзывы открываем подстраницу с меню или отзывами. restaurants/:restaurantId/menu и restaurants/:restaurantId/reviews
по клику на блюдо открываем отдельную страницу блюда. На ней отображаем инфу о блюде и количество с кнопками. Страница блюда не является подстраницей ресторана. ее путь dish/:dishId

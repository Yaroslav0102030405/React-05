import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'modern-normalize/modern-normalize.css';
import './styles.css';

// ReactDOM.render(<App />, document.getElementById("root"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// содаем ссылку (пропсы - свойства компонента) тут мы создали вертуальную ссылку
// const link = React.createElement("a", { href: "reactjs.org" }, "Ссылка");

// console.log(link);

// const jsxLink = <a href="reactls.org">Ссылка</a>
// console.log(jsxLink)

// // ссылку повесили в дом
// ReactDOM.render(jsxLink, document.getElementById("root"));

// синтаксис JSX
// JSX - выражение это переменная (динамическое значение) {}

// // повесили в дом элемент
// ReactDOM.render(template, document.getElementById("root"));

// Для рендера по условию используеться тернарный оператор

// Картинки ставяться в реакте как переменные

// pro=types - это описание типа для компонентов
// Для каждого комппонента где-есть пропсы мы

// реэкспорт

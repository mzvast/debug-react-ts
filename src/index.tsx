import * as React from 'react';
import * as ReactDOM from 'react-dom';

// import React from "./kreact/";
// import ReactDOM from "./kreact/react-dom";
// import Component from "./kreact/Component";

import './index.css';

function FunctionComponent(props) {
    return <div className="border">FunctionComponent-{props.name}</div>;
}

const jsx = (
    <div className="border">
        <h1>bbq</h1>
        <p>bbq</p>
        <a href="https://github.com/mzvast">bbq</a>
        <FunctionComponent name="函数组件" />
    </div>
);

// 经过babel-loader编译，jsx就是React.createElement(...)函数执行
ReactDOM.render(jsx, document.getElementById('root'));
console.log('version-sy-log', React.version);

// 原生标签节点
// 文本节点
// 函数组件节点

// *
// !
// ?
// todo 这里不是要做的事情 只是大家对黄色敏感而已
// todo React.createElement什么时候调用了？
// * 因为react里我写的jsx， jsx经过babel-loader编译，会变成React.createElement(...)函数的执行

// todo 函数组件和类组件区别?
//

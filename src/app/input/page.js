// // import React from 'react'
"use client"

import { useState } from "react"

const page = () => {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [value, setValue] = useState("");
    let items = [];
    items.push(name,select,value);

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('myItems', JSON.stringify(items));
    // var itemsData = JSON.parse(localStorage.getItem('myItems'));
    // console.log("items data---->",itemsData);
    }
    var itemsData = JSON.parse(localStorage.getItem('myItems'));
    console.log("items data---->",itemsData);

    return (
        <div>
            <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            {name == "Ram" && <select
                value={select}
                onChange={(e) => {
                    setSelect(e.target.value);
                }}
            >
                <option value="a">a</option>
                <option value="b">b</option>
                <option value="c">c</option>
                <option value="d">d</option>
            </select>}
            {select && <input value={value} type="text" placeholder="enter the value" onChange={(e) => {
                setValue(e.target.value);
            }} />}

            <button type="submit" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default page

// import React, { useState, useCallback } from "react";

// const Page = () => {
//     const [name, setName] = useState("");
//     const [select, setSelect] = useState("");
//     const [value, setValue] = useState("");

//     let items = [name, select, value];

//     const debouncedHandleSubmit = useCallback(debounce(() => {
//         localStorage.setItem('myItems', JSON.stringify(items));
//         console.log("items data---->", JSON.parse(localStorage.getItem('myItems')));
//     }, 300), [items]);

//     return (
//         <div>
//             <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} required />
//             {name === "Ram" && (
//                 <select
//                     value={select}
//                     onChange={(e) => {
//                         setSelect(e.target.value);
//                     }}
//                 >
//                     <option value="a">a</option>
//                     <option value="b">b</option>
//                     <option value="c">c</option>
//                     <option value="d">d</option>
//                 </select>
//             )}
//             {select && (
//                 <input
//                     value={value}
//                     type="text"
//                     placeholder="enter the value"
//                     onChange={(e) => {
//                         setValue(e.target.value);
//                     }}
//                 />
//             )}
//             <button type="submit" onClick={debouncedHandleSubmit}>Submit</button>
//         </div>
//     );
// };

// export default Page;

// // Debounce function implementation
// const debounce = (func, delay) => {
//     let debounceTimer;
//     return function (...args) {
//         clearTimeout(debounceTimer);
//         debounceTimer = setTimeout(() => func.apply(this, args), delay);
//     };
// };


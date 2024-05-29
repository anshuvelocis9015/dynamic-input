// // import React from 'react'
"use client"

import React, { useState, useCallback } from "react";
const Page = () => {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [value, setValue] = useState("");
    
    const handleSubmit = useCallback(() => {
        const newItems = [name, select, value];
        localStorage.setItem('myItems', JSON.stringify(newItems));
        var itemsData = JSON.parse(localStorage.getItem('myItems'));
        console.log("items data---->", itemsData);
    }, [name, select, value]);

    const debounce = (func, timeout = 2000) => {
        let timer;
        return (...args) => {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, timeout);
        };
    };

    const debouncedHandleSubmit = useCallback(debounce(handleSubmit, 2000), [handleSubmit]);

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     debouncedHandleSubmit();
    // };
    
    const submitField=(e)=>{
        setValue(e.target.value);
        debouncedHandleSubmit();

    }

    return (
        <div>
            <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
            {name === "Ram" && (
                <select
                    value={select}
                    onChange={(e) => setSelect(e.target.value)}
                >
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d" >d</option>
                </select>
            )}
            {select && (
                <input
                    value={value}
                    type="text"
                    placeholder="enter the value"
                    onChange={submitField}
                />
            )}
            {/* <button type="submit" onClick={handleClick}>Submit</button> */}
        </div>
    );
};

export default Page;


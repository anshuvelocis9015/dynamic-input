// // // import React from 'react'
// "use client"

// import React, { useState, useEffect } from "react";
// const Page = () => {
//     const [name, setName] = useState("");
//     const [select, setSelect] = useState("");
//     const [value, setValue] = useState("");

//     const handleSubmit = () => {
//         const newItems = [name, select, value];
//         localStorage.setItem('myItems', JSON.stringify(newItems));
//         var itemsData = JSON.parse(localStorage.getItem('myItems'));
//         // console.log("items data---->", itemsData);
//         return itemsData
//     };

//     const Debounce = (handleSubmit, delay) => {
//         const [debouncedValue, setDebouncedValue] = useState();
//         useEffect(() => {
//           const time = setTimeout(() => {
//             setDebouncedValue(handleSubmit());
//           }, delay);
//           return () => {
//             clearTimeout(time);
//           };
//         }, [delay]);
//         return { debouncedValue };
//       };

//     const {debouncedValue} = Debounce(handleSubmit, 2000);
//     const arr=[debouncedValue,select,name]
//     console.log(arr);

//     // const handleClick = (e) => {
//     //     e.preventDefault();
//     //     debouncedHandleSubmit();
//     // };

//     const submitField=(e)=>{
//         setValue(e.target.value);
//         // debouncedHandleSubmit();

//     }

//     return (
//         <div>
//             <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
//             {name === "Ram" && (
//                 <select
//                     value={select}
//                     onChange={(e) => setSelect(e.target.value)}
//                 >
//                     <option value="a">a</option>
//                     <option value="b">b</option>
//                     <option value="c">c</option>
//                     <option value="d" >d</option>
//                 </select>
//             )}
//             {select && (
//                 <input
//                     value={value}
//                     type="text"
//                     placeholder="enter the value"
//                     onChange={submitField}
//                 />
//             )}
//             {/* <button type="submit" onClick={handleClick}>Submit</button> */}
//         </div>
//     );
// };

// export default Page;

// // import React from 'react'
"use client"

import React, { useState, useEffect } from "react";

const Page = () => {
    const [name, setName] = useState("");
    const [select, setSelect] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = () => {
        const newItems = [name, select, value];
        localStorage.setItem('myItems', JSON.stringify(newItems));
        var itemsData = JSON.parse(localStorage.getItem('myItems'));
        // console.log(itemsData);
        return itemsData;
    };

    const Debounce = (fn, delay) => {
        const [debouncedValue, setDebouncedValue] = useState(null);
        useEffect(() => {
            const handler = setTimeout(() => {
                setDebouncedValue(fn());
            }, delay);
            return () => {
                clearTimeout(handler);
            };
        }, [fn, delay]);
        return debouncedValue;
    };

    const debouncedName = Debounce(() => name, 2000);
    const debouncedSelect = Debounce(() => select, 2000);
    const debouncedValue = Debounce(() => value, 2000);

    useEffect(() => {
        if (debouncedName !== null && debouncedSelect !== null && debouncedValue !== null) {
            handleSubmit();
        }
        const arr = [debouncedName, debouncedSelect, debouncedValue];
        console.log(arr);
    }, [debouncedName, debouncedSelect, debouncedValue]);
    // const arr = [debouncedName,debouncedSelect,debouncedValue];
    // console.log(arr);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSelectChange = (e) => {
        setSelect(e.target.value);
    };

    const handleValueChange = (e) => {
        setValue(e.target.value);
    };

    return (
        <div>
            <input
                value={name}
                type="text"
                placeholder="name"
                onChange={handleNameChange}
            />
            {name === "Ram" && (
                <select
                    value={select}
                    onChange={handleSelectChange}
                >
                    <option value="a">a</option>
                    <option value="b">b</option>
                    <option value="c">c</option>
                    <option value="d">d</option>
                </select>
            )}
            {select && (
                <input
                    value={value}
                    type="text"
                    placeholder="enter the value"
                    onChange={handleValueChange}
                />
            )}
        </div>
    );
};

export default Page;



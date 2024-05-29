// import Image from "next/image";
import styles from "./page.module.css";
// import input from "./input"

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Input Box</h1>
      {/* <input />       */}
    </main>
  );
}

// import React, { useState, useCallback } from "react";
// const Page = () => {
//     const [name, setName] = useState("");
//     const [select, setSelect] = useState("");
//     const [value, setValue] = useState("");
    
//     const handleSubmit = useCallback(() => {
//         const newItems = [name, select, value];
//         localStorage.setItem('myItems', JSON.stringify(newItems));
//         var itemsData = JSON.parse(localStorage.getItem('myItems'));
//         console.log("items data---->", itemsData);
//     }, [name, select, value]);

//     const debounce = (func, timeout = 500) => {
//         let timer;
//         return (...args) => {
//             clearTimeout(timer);
//             timer = setTimeout(() => {
//                 func(...args);
//             }, timeout);
//         };
//     };

//     const debouncedHandleSubmit = useCallback(debounce(handleSubmit, 500), [handleSubmit]);

//     const handleClick = (e) => {
//         e.preventDefault();
//         debouncedHandleSubmit();
//     };

//     return (
//         <div>
//             <input value={name} type="text" {...register }placeholder="name" onChange={(e) => setName(e.target.value)} />
//             {name === "Ram" && (
//                 <select
//                     value={select}
//                     onChange={(e) => setSelect(e.target.value)}
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
//                     onChange={(e) => setValue(e.target.value)}
//                 />
//             )}
//             <button type="submit" onClick={handleClick}>Submit</button>
//         </div>
//     );
// };

// export default Page;


// import { useState } from "react"

// const page = () => {
//     const [name, setName] = useState("");
//     const [select, setSelect] = useState("");
//     const [value, setValue] = useState("");
   
//     const handleSubmit = () => {
//         if(value){
//             let items = [name,select,value];
//     localStorage.setItem('myItems', JSON.stringify(items));
//     var itemsData = JSON.parse(localStorage.getItem('myItems'));
//     console.log("items data---->",itemsData);
//         }
//     else{
//         alert("please select an option");
//     }
//     }
//     const debounceInput = (func,delay = 500) => {
//         let timeoutId;
//         return (...args) => {
//             timeoutId = setTimeout(() => {
//                 func.apply(this,args);
//             },delay)
//         }
//     }
//     const debounce = debounceInput(handleSubmit,500);
//     const handleClick = (e) => {
//         e.preventDefault();//kabhi bhi event, eventhandler pe hi lagta hai
//         debounce();
//     }


//     return (
//         <div>
//             <input value={name} type="text" placeholder="name" onChange={(e) => setName(e.target.value)} />
//             {name == "Ram" && <select
//                 value={select}
//                 onChange={(e) => {
//                     setSelect(e.target.value);
//                 }}
//             >
//                 <option value="a">a</option>
//                 <option value="b">b</option>
//                 <option value="c">c</option>
//                 <option value="d">d</option>
//             </select>}
//             {select && <input value={value} type="text" placeholder="enter the value" onChange={(e) => {
//                 setValue(e.target.value);
//             }} />}

//             <button type="submit" onClick={handleClick}>Submit</button>
//         </div>
//     )
// }

// export default page

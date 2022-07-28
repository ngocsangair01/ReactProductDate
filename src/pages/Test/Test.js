import React, { useEffect, useState } from 'react';
let aa = 0;
const Test = () => {
    const [a, setA] = useState(0);
    const [c, setC] = useState({ name: "quan" });
    // const b = "quan"
    // useEffect(() => {
    //     console.log("a change ")
    // }, [b])
    // const onClick = () => {
    //     setA(b);
    //     console.log("call to set A")
    // }
    // useEffect(() => {
    //     console.log("Component is re-render")
    // })
    // console.log("Bổ trợ")
    // const [a, setA] = useState(0);
    // useEffect(() => {
    //     const handle = () => {
    //         setA("true")
    //         console.log("call to set A")
    //     }
    //     console.log("useEffect is running")
    //     window.addEventListener("scroll", handle)
    // }, [])
    console.log({ a, c })
    useEffect(() => {
        console.log("Component is re-render")
    })
    useEffect(() => {
        const div = document.querySelector('.hello');
        div.onclick = () => {
            setA(aa + 1);
            console.log("call to set A")
            setC({ name: "quadfdfdfdn" });
            console.log("call to set C")
        }

    }, [])
    console.log({ a, c })
    return (
        <>
            <div  >
                <div>{a}</div>
                <div>{c.name}</div>
                <button onClick={() => {
                }}>
                    test
                </button>
            </div>
            <div className="hello">
                dsds
            </div>
        </>
    );
};

export default Test;
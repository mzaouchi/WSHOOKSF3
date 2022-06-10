import { useEffect, useState } from "react"

// const Counter=({show,setShow})=>{
    const Counter=()=>{
    const [count,setCount] = useState(0)
    const [text,setText] = useState('')
    const increment=()=> setCount(count+1)
    // const decrement=()=> setCount(count >0 ? count-1 : 0)
    const decrement=()=> count>0 && setCount(count-1)
    // const handleShow=()=>   setShow(!show)

    // componentDidMount
    useEffect(()=>{
        console.log('Mount')
    },[])
    // componentDidUpdate
    // useEffect(()=>{
    //     console.log('Update')
    // })
    useEffect(()=>{
        console.log('Update spec')
    },[count])
    // componentWillUnmount
    useEffect(()=>{
        return ()=> console.log('Unmount')
    })
    return(
        <div>
            {/* <button onClick={handleShow}>{show ? 'Hide' : 'Show'}</button>
            {
                show && 
                <>
                <h2>Counter Component</h2>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
                <input type='text' onChange={(e)=>setText(e.target.value)}/>
                <h3>{text}</h3>
                </>
            } */}
                <h2>Counter Component</h2>
                <button onClick={decrement}>-</button>
                <span>{count}</span>
                <button onClick={increment}>+</button>
                <input type='text' onChange={(e)=>setText(e.target.value)}/>
                <h3>{text}</h3>
            

        </div>
        
    )
}

export default Counter
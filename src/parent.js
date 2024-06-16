import Child from "./child"

function Parent(){
    return(
        <div>
            <h1>I am Parent</h1>
            <Child name="mike"></Child>
        </div>
    )
}

export default Parent
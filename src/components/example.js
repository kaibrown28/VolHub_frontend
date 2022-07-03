import React, {useState} from "react";

const Example = () =>{
const [showHeader, setshowHeader] = useState(false)


    return(
        <div>
            <button onClick={() => setshowHeader(true)}>Click me to change</button>
            {showHeader ? <h1>Hello</h1> : <h1>Sup?</h1>}
            
        </div>
    )
}

export default Example; 
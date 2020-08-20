import React, {createElement} from 'react'

const Hello= (props)=>{
    return (
        <div>
            <h1>Greeting {props.name} {props.heroName}</h1>
            {props.children}
        </div>
    )
}

export default Hello;

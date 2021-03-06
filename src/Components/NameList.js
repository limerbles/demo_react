
import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList =  names.map(name => <h2>{name}</h2>)
    // return (
    //     <div>
    //        {
    //           nameList
    //        }
    //     </div>
    // )
    const persons = [
        {
            id:1,
            name:'Bruce',
            age:30,
            skill:'React'
        },
        {
            id:2,
            name:'Diana',
            age:40,
            skill:'Angular'
        },
        {
            id:3,
            name:'Clark',
            age:30,
            skill:'Mongo'
        }
    ]
    const personList = persons.map((person, index) => (
        <Person key={index} person={person}></Person>
    ))
     
    return <div>{personList}</div>
}

export default NameList
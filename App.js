import { useState } from "react"
import {data} from "./Sample"


function App(){
    const [people,setPeople]=useState(data)
    const removePerson=(id)=>{
      let newPerson =people.filter((person) => person.id!=id)
      setPeople(newPerson)
    }
    return(
      <>
      <h2
      style={{backgroundColor:"yelloow", color:"yellow", textAlign:"center", fontFamily:"math", fontSize:"50px"}}
      >YOU HAVE {people.length} BIRTHDAT'S TODAY!</h2>
      {people.map((person) => {const {id,name,age,country,image,contact_no}=person
      return(
        <div className="container">
          <img src={image} alt={name} />
          <ul>
            <li><span>Id No.</span> :{id}</li>
            <li><span id="n">Name</span> :{name}</li>
            <li><span id="a">Age</span> :{age}</li>
            <li><span id="c">Country</span> :{country}</li>
            <li>contact_no :{contact_no}</li>

          </ul>
          
          <button className="btn" onClick={() => removePerson(id)}>DISMISS</button>
          
        </div>
      )
      })}
      </>
    )
}
export default App
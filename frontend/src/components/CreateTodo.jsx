import { useState } from "react"

export function CreateTodo(){

    const [title,setTitle] = useState("");
    const [description, setDescription] = useState("");

    return <div>

        <input type="text" placeholder="title" id="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value)
        }}/> <br /><br />

        <input type="text" placeholder="description" id="description" onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value)
        }}/><br /><br /> 


        <button onClick={function(){
            fetch("http://localhost:3000/todo", {
                method: "POST",
                body: JSON.stringify({
                    title: title,
                    description: description,
                }),
                headers: {
                    "Content-Type": "application/JSON"
                }
            })
                .then(async function(res){
                    const json = await res.json();
                    alert('Todo Added')
                })
        }}>Add a todo</button>

    </div>
}
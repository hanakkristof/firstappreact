import axios from "axios";


const baseUrl="http://localhost:8000/data"

//összes adat lekérése:
export const getTodos=async(setTodos)=>{
    const resp=await axios.get(baseUrl)

    setTodos(resp.data)


} 

//todo törlése

export const deleteTodo=async (id)=>{
    await axios.delete(`${baseUrl}/${id}`)
}

//új hozzáadása
export const addTodo= async (descr)=>{
        await axios.post(baseUrl,{descr})
}

export const haveCompleted = async (id)=>{
    await axios.patch(`${baseUrl}/${id}`)
}

export const removeEverything = async ()=>{
    console.log(baseUrl);
    await axios.delete(baseUrl)

    
}
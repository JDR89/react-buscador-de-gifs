import { useState } from "react"



export const AddCategory = ({nuevaCategoria}) => {

    const [inputValue, setInputValue] = useState("Buscar gif...")

    const onInputChange=(event)=>{
        setInputValue(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        if(inputValue.trim().length<=1)return

        nuevaCategoria(inputValue.trim())
        setInputValue("")
    }



  return (

    <form onSubmit={onSubmit}>
        <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
        />
    </form>

  )
}

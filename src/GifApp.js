import { AddCategory } from "./components/AddCategory"
import {useState} from "react"
import { GifGrid } from "./components/GifGrid"

function GifApp(){

    const [categoria, setCategoria] = useState([])

    const onAddCategoria=(nuevaCategoria)=>{
        if(categoria.includes(nuevaCategoria))return

        setCategoria([nuevaCategoria])
    }

return(
    <>
    <h1>GifApp</h1>
    
    <AddCategory nuevaCategoria={onAddCategoria}/>

    
        {
        categoria.map((e)=>{
            return(
                <GifGrid key={e} categoria={categoria}/>
            )
        })
        }
  
    </>
)

}

export default GifApp
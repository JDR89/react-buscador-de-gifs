
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifItem from "./GifItem"


export const GifGrid = ({categoria}) => {

  const {images,isLoading} = useFetchGifs(categoria)

  return (
    <>

    <h4 style={{display:"flex",justifyContent:"center"}}>{categoria}</h4>
    <div className="card-grid">
      {
        isLoading && <h3>Cargando...</h3>
      }
      {images.map((image)=>{
       return <GifItem key={image.id} {...image}/>
      })}
    </div>

    </>

  )
}


import { useState, useEffect } from "react"
import { getGifs } from "../helpers/GetGifs"



export const useFetchGifs = (categoria) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages=async()=>{
     const newImage = await getGifs(categoria)
      setImages(newImage)
      setIsLoading(false)
    }
  
    useEffect(()=>{
      getImages()
    }, [])


    return{
            images,
            isLoading
        }
    
}

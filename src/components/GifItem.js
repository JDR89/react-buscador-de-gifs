
import "./GifItem.css"

export default function GifItem({id,title,url}) {
    
  return (
    <div className="card">
      
        <img alt={title} src={url}/>
        <p>{title}</p>
        
    </div>
  )
}

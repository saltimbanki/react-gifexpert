export const GifItem = ({url, title})=>{
    return (
      <div className="card">
        <img src={url} alt="" />
        <p>{title}</p>
      </div>
    );
    
}
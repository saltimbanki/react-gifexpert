import { GifItem } from "./GifItem";
import {useFetchGifs} from '../hooks/useFetchGifs';
import { LoadingMessage } from "./LoadingMessage";

export const GifGrid = ({ category }) => {
 
  const {images, isLoading } = useFetchGifs( category );
  console.log({images, isLoading});
  
 

  return (
    <>
      <h3>{category}</h3>
      {
        /* isLoading 
        ? (<h2>Cargando...</h2>)
        : <h2>Cargoo.....</h2> */

        isLoading && (<h2>Cargando....</h2>)
      }
      <LoadingMessage isLoading={isLoading} />
      
      
      {/* {gifs.map(gif => (<li>hola</li>))} */}
      <div className="card-grid">
        
        { images.map( (image) => (
            <GifItem
                key={image.id} 
                {...image}
                >
                
            </GifItem>
        )
        )}
      </div>
    </>
  );
};

export const getGifs = async(category) => {
    /** Poner la funcion fuera del componente hace que la gestion de memoria sea mas eficiente
     *  - Al redibujar el componente no vuelve a asignar un espacio en memoria para la funcion
     */
        const url = `https://api.giphy.com/v1/gifs/search?api_key=A23fV2UXIXBsfk98nEVLNaWHvyZ062gT&q=${category}&limit=10`;
        // console.log(url);
        const resp = await fetch (url);
        const {data} = await resp.json();
        // console.log(data)
        const gifs = data.map( img => ({
            id: img.id,
            title : img.title,
            url: img.images.downsized_medium.url
    
        })
        )
        // console.log(gifs);
        return gifs;
    }
    
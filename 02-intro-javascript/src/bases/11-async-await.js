const getImagen = async () =>{
    try {
        const apiKey = "4oyDv00oxjB9GC0w15qkW0q87a7RHNhJ";
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
    
        const {url}= data.images.original;
    
        const img =document.createElement('img');
        img.src = url;
        document.body.append(img);
    
    } catch (error) {
        console.error(error)
    }
}
getImagen();
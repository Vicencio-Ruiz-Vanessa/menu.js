fetch(menu.json)
 //que hace esta linea?Esta linea inicia la carga del archivo menu.json, fetch es una funcion de javascript que facilita la realizacion de solicitudes de red como obtener datos de un archivo o un endpoint de API.
    //como funciona? fetch devuelve una promesa que, cuando se resuelve, te da acceso a la respuesta de la solicitud. Esta respuesta no es dirrectamene los datos en formato JSON, si no un objjeto de respuesta que incluye varios detalles sobre la resouesta misma.
 
.then(response=> response.json)
//que hace?esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo.json()para convertir el cuerpo de la respuesta en un objeto javascript (esto asume el cuerpo de la respuesta esta  en formato)
//como funciona? el metodo.json() tambien debuelve una promesa, la cual seresuelve  con el contenido del cuerpo en formato JSON

.then(date=>{
    const menuConstainer=document.getElementById('menu-container');
    // que hacen?Aqui se procesan los datos json ya convertidos se obtienen una referencia el contenedor del menu en el HTML mediante getElementbyid ('menu-container')
   
    Data.items.array.forEach(category => {
        const categoryTitle=document.createElement('h2');
        //que hace?aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenedor de texto, y luego se anade este titulo
        categoryTitle.textContent=category.category;
        menuConstainer.appendchild(categoryTitle);

        const table= document.createElement('table');
        //que hace?se crea un elemeno table para una categoria. ademas, se prepara el encabezado (tablehead)con las columnas pertinentes.tablebody se inicializa vacio y s llama con los elementos de la categoria.
        const tablehead=<tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;
        let tableBody='';
    });
})
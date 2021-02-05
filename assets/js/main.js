let selectOption = document.querySelector('.form-select');
let btnInput = document.querySelector('.btn-input');
let btnPesquisar = document.querySelector('.btn-primary');
var content = document.getElementById('div-main');


btnPesquisar.addEventListener('click', ()=> {

    fetch(`https://www.googleapis.com/books/v1/volumes?q=+${selectOption.value}:${btnInput.value}&key=AIzaSyByRTlliIKCn19yuOCQOdRZUjhz1gGYBa4`)
    .then((response)=> {
        response.json().then((info)=> {

            

            

            for(let i=0; i<= info.items.length; i++) { 

                content.innertHTML += `<div class="col">
                <div class="card shadow-sm">
                <img id="thumbnail" src="${info.items[i].volumeInfo.imageLinks.thumbnail}">
                
                <div class="card-body">
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">API do Livro</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Mais Informações</button>
                        <button type="button" class="btn btn-sm btn-outline-secondary">Link de compra</button>
      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              `
            }

        })
    })

//     const xhr1 = new XMLHttpRequest();



//     xhr1.open("GET",
//     `https://www.googleapis.com/books/v1/volumes?q=+${selectOption.value}:${btnInput.value}&key=AIzaSyByRTlliIKCn19yuOCQOdRZUjhz1gGYBa4`
// );

// xhr1.onreadystatechange = function () {
//     if (xhr1.status = 200 && xhr1.readyState == 4) {

//         let dadosJSONText = xhr1.responseText
//         let info = JSON.parse(dadosJSONText)

//         for (let i = 0; i <= info.items.length; i++) {
//             content.innerHTML +=
//                 `<div class="demo-card-wide mdl-card mdl-shadow--2dp" align="center" style="width:49%; justify-content:center; align-items:center">
//                 <img id="thumbnail" src="${info.items[i].volumeInfo.imageLinks.thumbnail}" style="width:200px;">
//                 <p id="title" class="hi">
//                     Titulo: ${info.items[i].volumeInfo.title}
//                 </p>
//                 <p id="subt" class="hi">
//                     Subtitulo: ${info.items[i].volumeInfo.subtitle}
//                 </p>
//                 <p>
//                     Categoria: ${info.items[i].volumeInfo.categories}
//                 </p>
//                 <p id="autor" class="hi">
//                     Autor: ${info.items[i].volumeInfo.authors}
//                 </p>
//                 <p id="date" class="hi">
//                     Data de Publicação: ${info.items[i].volumeInfo.publishedDate}
//                 </p>
//                 <p id="desc" style="text-align:justify">
//                     Descrição: ${info.items[i].volumeInfo.description}
//                 </p>
//                 <div id="moreinfo">
//                 <a id="apilivro" target="_blank" class="link" href="${info.items[i].selfLink}">
//                     API do Livro
//                 </a>
//                 <a href="${info.items[i].volumeInfo.infoLink}" class="link" target="_blank">
//                     Mais Informações
//                 </a>
//                 <a href="${info.items[i].saleInfo.buyLink}" class="link" target="_blank">
//                     Link de Compra
//                 </a>
//                 </div>
//                 </>`
//         }
//     }
// }
// xhr1.send();

})


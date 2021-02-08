const selectOption = document.querySelector('.form-select');
const btnInput = document.querySelector('.btn-input');
const btnPesquisar = document.querySelector('.btn-primary');
const content = document.getElementById('div-main');

const xhr1 = new XMLHttpRequest();

btnPesquisar.addEventListener('click', ()=> {


  xhr1.open("GET",`https://www.googleapis.com/books/v1/volumes?q=+${selectOption.value}:${btnInput.value}&key=AIzaSyByRTlliIKCn19yuOCQOdRZUjhz1gGYBa4`
    );

    xhr1.onreadystatechange = function () {
        if (xhr1.status = 200 && xhr1.readyState == 4) {

            let dadosJSONText = xhr1.responseText
            let info = JSON.parse(dadosJSONText)

            for (let i = 0; i <= info.items.length; i++) {
                content.innerHTML +=
                    `<div class="col">
                    <div class="card shadow-sm">
                    <img id="thumbnail" src="${info.items[i].volumeInfo.imageLinks.thumbnail}" style="width:200px;">
                    <div class="card-body">
                    <p id="title" class="card-text">
                        Titulo: ${info.items[i].volumeInfo.title}
                    </p>
                    <p id="subt" class="card-text">
                        Subtitulo: ${info.items[i].volumeInfo.subtitle}
                    </p>
                    <p>
                        Categoria: ${info.items[i].volumeInfo.categories}
                    </p>
                    <p id="autor" class="card-text">
                        Autor: ${info.items[i].volumeInfo.authors}
                    </p>
                    <p id="date" class="card-text">
                        Data de Publicação: ${info.items[i].volumeInfo.publishedDate}
                    </p>
                    <p id="desc" class="card-text">
                        Descrição: ${info.items[i].volumeInfo.description}
                    </p>
                    </div>
                    <div id="moreinfo">
                    <a id="apilivro" target="_blank" class="link" href="${info.items[i].selfLink}">
                        API do Livro
                    </a>
                    <a href="${info.items[i].volumeInfo.infoLink}" class="link" target="_blank">
                        Mais Informações
                    </a>
                    <a href="${info.items[i].saleInfo.buyLink}" class="link" target="_blank">
                        Link de Compra
                    </a>
                    </div>
                    </>`
            }
        }
    }
    clearInput();
    content.innerHTML = '';
    xhr1.send();
})


document.querySelector('.btn-input').addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
      e.preventDefault();
      document.querySelector('.btn-primary').click();

  }
});

function clearInput() {
    btnInput.value = '';
    btnInput.focus();
}

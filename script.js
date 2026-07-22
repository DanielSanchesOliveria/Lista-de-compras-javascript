var arr = []

function add_new_item(){
    if (localStorage.getItem("lista_compra")){
        arr = JSON.parse(localStorage.getItem("lista_compra"))
    }
    const item = document.getElementById('item').value
    if(document.getElementById('item').value === ''){
        alert('não pode se colocar um item vazio')
    }
    else{
    arr.push(item)

    localStorage.setItem("lista_compra",JSON.stringify(arr))

    document.getElementById('item').value = ''

    show_list()
    }

}

function delete_item(i){
    arr = JSON.parse(localStorage.getItem('lista_compra'))
    arr.splice(i,1)
    localStorage.setItem('lista_compra', JSON.stringify(arr))
    show_list()

}

function edit_item(i){
    arr = JSON.parse(localStorage.getItem('lista_compra'))
    const novo_item = prompt("digite seu novo item")
    arr.splice(i,1,novo_item)
    localStorage.setItem('lista_compra',JSON.stringify(arr))
    show_list()
}

function show_list(){
    let resultDIV = document.getElementById('d')
    resultDIV.innerHTML = ''
    if (localStorage.getItem("lista_compra")){
        arr = JSON.parse(localStorage.getItem("lista_compra"))
    }


    for (let i in arr){
        //div para os dois bobtões
        let div = document.createElement("div")
        div.classList.add("item")
        //item da lista
        let p = document.createElement("p")
        p.innerHTML = arr[i]

        //botão de deletar
        let button_delete = document.createElement("button")
        button_delete.classList.add("delete-button")
        button_delete.innerHTML = ('excluir')
        button_delete.onclick = function(){
            delete_item(i)
        }
        
        let button_edit = document.createElement('button')
        button_edit.classList.add("edit_button")
        button_edit.innerHTML = ("editar")
        button_edit.onclick = function(){
            edit_item()
        }

        //"commita" o item na array
        div.append(p)
        div.append(button_edit)
        div.append(button_delete)
        resultDIV.append(div)

        

    }
}
show_list()

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
        let button = document.createElement("button")
        button.classList.add("delete-button")
        button.innerHTML = ('excluir')

        button.onclick = function(){
            delete_item(i)
        }
        
        //"commita" o item na array
        div.append(p)
        div.append(button)
        resultDIV.append(div)

        

    }
}
show_list()

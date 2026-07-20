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


function show_list(){
    let resultDIV = document.getElementById('d')
    resultDIV.innerHTML = ''
    if (localStorage.getItem("lista_compra")){
        arr = JSON.parse(localStorage.getItem("lista_compra"))
    }


    for (let i in arr){
        let p = document.createElement("p")
        p.innerHTML = arr[i]

        resultDIV.append(p)
    }
}
show_list()
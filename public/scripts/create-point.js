function getInformation(url, select){
    fetch(url)
    .then(res => res.json())
    .then(vetor => {
        for(v of vetor){
            select.innerHTML += `<option value=${v.id}>${v.nome}</option>`
        }
    })
    }


function populateUFs(){
    const stateSelect = document.querySelector("select[name=state]")
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    stateSelect.innerHTML = ""
    stateSelect.innerHTML = "<option value>Selecione o estado</option>"
    getInformation(url, stateSelect)
}

populateUFs()

function getCities(event){
    const citySelect = document.querySelector("select[name=city]")
    const stateInput = document.querySelector("input[name=uf]")
    const indexofSelectedState = event.target.selectedIndex
    const ufValue =event.target.value

    stateInput.value = event.target.options[indexofSelectedState].text

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    citySelect.innerHTML = ""
    citySelect.innerHTML = "<option value>Selecione a cidade</option>"
    citySelect.disabled = true

    getInformation(url, citySelect)
    
   
    citySelect.disabled = false
}

document.querySelector("select[name=state]").addEventListener("change", getCities)
document.querySelector("select[name=city]").addEventListener("change", event => {
    const cityInput = document.querySelector("input[name=ct]")
    const indexofSelectedCity = event.target.selectedIndex

    cityInput.value = event.target.options[indexofSelectedCity].text
})

//Items de coleta

const itemsToCollect = document.querySelectorAll(".items-grid li")

for(const item of itemsToCollect){
    item.addEventListener("click", handleSelectedItem)
}

const collectedItems = document.querySelector("input[name=items]")

let selectedItems= []

function handleSelectedItem(event){
    const itemLi = event.target
    itemLi.classList.toggle("selected") //toggle remove ou adiciona a class
    const itemId = itemLi.dataset.id

    const alreadySelected = selectedItems.findIndex( item => item == itemId)

    if(alreadySelected >= 0){
        selectedItems = selectedItems.filter(item => item != itemId)
        
    } else{
        selectedItems.push(itemId)
    }
     collectedItems.value = selectedItems
}


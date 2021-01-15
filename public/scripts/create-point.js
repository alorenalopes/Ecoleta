const ufSelect = document.querySelector("select[name=state]")
const citySelect = document.querySelector("select[name=city]")
const nomeUfSelect = document.querySelector("input[name=uf]")
const nomeCitySelect = document.querySelector("input[name=cidade]")
const itemsToColect = document.querySelectorAll(".items-grid li")
const colectedItems = document.querySelector("input[name=items]")
var url
console.log(colectedItems)
let selectedItems = []


function populateUFs() {
    url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"
    completaSelect(ufSelect)
}

function populateCity(event) {
    url = (`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${event.target.value}/municipios`)
    nomeUfSelect.value = event.target.options[event.target.selectedIndex].text
    completaSelect(citySelect)
}

function completaSelect(componente) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            componente.innerHTML = ""
            if(componente === citySelect){
                citySelect.innerHTML = "<option>Selecione uma Cidade</option>"
                componente.disabled = true
            }else{
                ufSelect.innerHTML = "<option>Selecione um Estado</option>"
            }
            for (iten of data) {
                    componente.innerHTML += `<option value = ${iten.id}>${iten.nome}</option>`
            }
            componente.disabled = false
        });
}

ufSelect.addEventListener("change", populateCity)
citySelect.addEventListener("change",
    event => nomeCitySelect.value = event.target.options[event.target.selectedIndex].text)

populateUFs();

for(item of itemsToColect){
    item.addEventListener("click", event =>{
        const itemLi = event.target
        const itemId = event.target.dataset.id
        // O toggle intercala a class se tem tira se não tem coloca
        itemLi.classList.toggle("selected")

        const alreadySelected = selectedItems.findIndex(item => item === itemId)

        if(alreadySelected >= 0){
            selectedItems = selectedItems.filter(item => item != itemId )
        }else{
            selectedItems.push(itemId)
        }
        colectedItems.value = selectedItems
        console.log(colectedItems)

    })
}



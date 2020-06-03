function getInformation(url, select){
    fetch(url)
    .then(res => res.json())
    .then(vetor => {
        for(const v of vetor){
            select.innerHTML += `<option value=${v.id}>${v.nome}</option>`
        }
    })
    }


function populateUFs(){
    const stateSelect = document.querySelector("select[name=state]")
    const url = "https://servicodados.ibge.gov.br/api/v1/localidades/estados"

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

    getInformation(url, citySelect)
    
   
    citySelect.disabled = false
}

function getCity(event){
    const cityInput = document.querySelector("input[name=ct]")
    const indexofSelectedCity = event.target.selectedIndex

    cityInput.value = event.target.options[indexofSelectedCity].text
}

document.querySelector("select[name=state]").addEventListener("change", getCities)
document.querySelector("select[name=city]").addEventListener("change", getCity)


const cardBody = document.querySelector('.cardBody')

async function getTasks() {
    const response = await fetch('https://api.vitorfigueiredo.com/controllers/list-tasks.php')
    const data = await response.json()

    const results = data.tasks
    console.log(results)

    if(results.length <= 0 ) {
        const paragrafoSemTarefas = document.createElement('p')
        paragrafoSemTarefas.innerText = 'Nenhuma tarefa foi encontrada'
        paragrafoSemTarefas.style.textAlign = 'center'
        cardBody.appendChild(paragrafoSemTarefas)
    }

    for(const item of results) {
        const nameTask = item.name
        const descriptionTask = item.description

        const divLinhaCard = document.createElement('div')
        divLinhaCard.setAttribute('class', 'linhaCard')
        cardBody.appendChild(divLinhaCard)

        const divNameAndDescription = document.createElement('div')
        divNameAndDescription.setAttribute('class', 'nameAndDescription')
        divLinhaCard.appendChild(divNameAndDescription)

        const paragrafoName = document.createElement('p')
        paragrafoName.innerText = nameTask
        paragrafoName.style.fontWeight = '700'
        divNameAndDescription.appendChild(paragrafoName)

        const paragrafoDescription = document.createElement('p')
        paragrafoDescription.innerText = descriptionTask
        divNameAndDescription.appendChild(paragrafoDescription)

        const divButtons = document.createElement('div')
        divButtons.setAttribute('class', 'buttons')
        divLinhaCard.appendChild(divButtons)

        const buttonEdit = document.createElement('button')
        buttonEdit.innerText = 'Editar'
        divButtons.appendChild(buttonEdit)

        const buttonDelete = document.createElement('button')
        buttonDelete.innerText = 'Apagar'
        divButtons.appendChild(buttonDelete)
    }
}
getTasks()
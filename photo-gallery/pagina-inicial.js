const baseURL = 'https://api.pexels.com/v1/'
const containerPhoto = document.querySelector('.content-images')

let index = 1

async function getAllPhotos() {
    containerPhoto.innerHTML = ''
    const response = await fetch(`${baseURL}/curated?page=${index}&per_page=18`, {
        headers: {
            Authorization: "563492ad6f91700001000001d90fd8687e0b4081b11bd2d3bf59a041"
          },
    })
    const data = await response.json()

    const results = data.photos

    for(const item of results) {
        const image = document.createElement('img')
        image.style.cursor = 'pointer'
        image.setAttribute('src', item.src.medium)
        image.addEventListener('click', () => {
            window.location.href = `./foto-especifica.html?id=${item.id}`;
        })
        containerPhoto.appendChild(image)
    }

}
getAllPhotos()


async function getSearchPhotos() {
    containerPhoto.innerHTML = ''
    const inputSearch = document.getElementById('inputSearch').value

    const response = await fetch(`${baseURL}/search?page=1&per_page=18&query=${inputSearch}`, {
        headers: {
            Authorization: "563492ad6f91700001000001d90fd8687e0b4081b11bd2d3bf59a041"
          },
    })
    const data = await response.json()
    const results = data.photos

    for(const item of results) {
        const image = document.createElement('img')
        image.setAttribute('src', item.src.small)
        containerPhoto.appendChild(image)
    }
}

function mudaPagina(pagina) {
    if(pagina == 'proxima') {
        index = index + 1
    }

    if(pagina == 'anterior' && index > 1) {
        index = index - 1
    }
    getAllPhotos()
}

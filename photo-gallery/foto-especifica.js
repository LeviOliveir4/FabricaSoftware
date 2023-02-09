const baseURL = 'https://api.pexels.com/v1/'

const containerPhoto = document.querySelector('.image')
const containerDescricao = document.querySelector('.descricao')

async function getSearchPhotos() {
    const urlParams = new URLSearchParams(window.location.search);
    const id =  urlParams.get("id")

    const response = await fetch(`${baseURL}/photos/${id}`, {
        headers: {
            Authorization: "563492ad6f91700001000001d90fd8687e0b4081b11bd2d3bf59a041"
          },
    })
    const data = await response.json()

    const image = document.createElement('img')
    image.setAttribute('src', data.src.large)
    containerPhoto.appendChild(image)

    const titleNamePhotographer = document.createElement('a')
    titleNamePhotographer.innerText = data.photographer
    titleNamePhotographer.setAttribute('href', data.photographer_url)
    titleNamePhotographer.setAttribute('target', '_blank')
    containerDescricao.appendChild(titleNamePhotographer)
}
getSearchPhotos()



const baseUrl = process.env.REACT_APP_BASE_URL

export const getPhotos = () => {
    return fetch(baseUrl)
        .then(function (res) {
            return res.json()
        })
}

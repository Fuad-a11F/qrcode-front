const input = document.querySelector('.input')
const loader_wrapper = document.querySelector('.loader_wrapper')

if (input) {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            loader_wrapper.style.display = 'block'

            fetch(`https://qr-code-for-mobile.herokuapp.com/api/get_qrcode?location=${input.value}`).then(async (data) => {
                data.json().then(data => {
                    const image = document.querySelector('.qr_code img')
                    image.src = data.code
                    image.width = 177
                    image.height = 177
                    loader_wrapper.style.display = 'none'
                })

            })
        }
    })
}

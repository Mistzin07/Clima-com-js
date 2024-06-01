window.addEventListener('load', () => {

    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const getWheather = async () => {
            const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=069d1a9000c54416ac8121423240106&q=${latitude},${longitude}&lang=pt`)
            const res = await getData.json()

            console.log(res.current.condition.text)//condição
            console.log(res.location.name) //cidade
            console.log(res.current.temp_c)//temperadtura
            console.log(res.current.feelslike_c)//sensação termica
            console.log(res.current.condition.wind_kph)//velcidade do vento

            const condicao = document.createElement('p')
            condicao.innerHTML=res.current.condition.text
            
            document.querySelector('.dados').appendChild(condicao)
        }


        getWheather()
    })

})



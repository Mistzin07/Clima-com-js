
window.addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude

        const getWeather = async () => {
            const getData = await fetch(`http://api.weatherapi.com/v1/current.json?key=069d1a9000c54416ac8121423240106&q=${latitude},${longitude}&lang=pt`)


            const res = await getData.json()
            
            const condicaoContainer = document.querySelector('.condicao')
            const localAtualContainer = document.querySelector('.local-atual')

            console.log(res.current.condition.text) //Condição

            console.log(res.location.name) //Cidade
            console.log(res.current.temp_c) //Temperatura
            console.log(res.current.feelslike_c) //Sensação térmica
            console.log(res.current.condition.wind_kph) //Velocidade do vento                   

            
            const icone = document.createElement('img')
            const condicao = document.createElement('p')

            const cidade = document.createElement('p')
            const Temperatura = document.createElement('p')
            const sensacaoTermica = document.createElement('p')
            const velocidadeDoVento = document.createElement('p')
            
            condicao.innerHTML = res.current.condition.text
            icone.setAttribute('src','https:'+res.current.condition.icon)

            
            cidade.innerHTML = res.location.name
            Temperatura.innerHTML = res.current.temp_c + '°C'
            sensacaoTermica.innerHTML =  res.current.feelslike_c + ''
            velocidadeDoVento.innerHTML = res.current.wind_kph + 'Kh'
            
            

            condicaoContainer.appendChild(icone)
            condicaoContainer.appendChild(Temperatura)
            condicaoContainer.appendChild(condicao)

            
            localAtualContainer.appendChild(sensacaoTermica)
            localAtualContainer.appendChild(cidade)
            localAtualContainer.appendChild(velocidadeDoVento)
            


        }

        getWeather()
    })
})



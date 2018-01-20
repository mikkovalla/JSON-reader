
const url = "http://fasttrack.herokuapp.com"
let numb = 0
let datapoint = ""

//Rekursiivinen funktio käymään läpi kaikki APIn palauttamat vihjeet kunnes loppuvat
let clueSearcher = (uri) => {
  fetch(uri, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })
  .then((resp) => resp.json())
    .then(function(data){
      datapoint = data.next
      console.log(datapoint)

      if(datapoint !== "/auth")
      document.getElementById("nextOne").innerHTML = numb++
      clueSearcher(url + datapoint)

    })
    //Seuraavaksi /auth polun tunnistautuminen
}


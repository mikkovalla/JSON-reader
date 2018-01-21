
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
      if(datapoint === "/auth"){
        //document.getElementById("vika").innerHTML = url + datapoint
        //console.log(url + datapoint)
        fetch(url + datapoint, {
          headers: {
            'Authorization': 'Basic QVRSUjpQT1JS'
          }
        })
        .then((resp)=> resp.json())
          .then(function(data){
            console.log(data)
          })
        return
      }
      console.log(datapoint)

      document.getElementById("nextOne").innerHTML = numb++
      clueSearcher(url + datapoint)

    })
    
}


//Seuraavaksi /auth polun tunnistautuminen --> ATRR/PORR -> /challenge *as HTML*


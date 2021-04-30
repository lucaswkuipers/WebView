console.log("Script loaded");

function toggleFavorite(element) {
  if (element.innerText == "REMOVER") {
    element.innerText = "ADICIONAR"
    document.getElementById("star").src = ""
  } else {
    element.innerText = "REMOVER"
    document.getElementById("star").src = "img/star.png"
  }
}

function getDataFromAPI() {
  
}

getDataFromAPI();

// api url
const api_url =
  "https://rest.coinapi.io/v1/assets/BTC?apikey=50F5E142-F260-4CCE-95F6-713F18D30FC3";
// Defining async function
async function getapi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
        hideloader();
    }
    show(data);
}
// Calling that async function
getapi(api_url);
  
// Function to hide the loader
function hideloader() {
    // document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  console.log(data[0].asset_id)
  document.getElementById("sigla").innerHTML = data[0].asset_id
  document.getElementById("hora").innerHTML = "$" + ` ${new Intl.NumberFormat().format(data[0].volume_1hrs_usd)}`
  document.getElementById("dia").innerHTML = "$" + ` ${new Intl.NumberFormat().format(data[0].volume_1day_usd)}` 
  document.getElementById("mes").innerHTML = "$" + ` ${new Intl.NumberFormat().format(data[0].volume_1mth_usd)}`
  document.getElementById("value").innerHTML = "$" + ` ${new Intl.NumberFormat().format(data[0].price_usd)}`

  let idIcon = data[0].id_icon.replaceAll("-", "")
    // "4caf2b16-a017-4e26-a348-2cea69c34cba"

  document.getElementById("coinIcon").src = `https://s3.eu-central-1.amazonaws.com/bbxt-static-icons/type-id/png_128/${idIcon}.png`
}
/*price_usd: 54108.33339431906
type_is_crypto: 1
volume_1day_usd: 1118109353865732
volume_1hrs_usd: 19322158702456.57
volume_1mth_usd: 34168550464340444
*/

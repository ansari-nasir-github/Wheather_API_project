// 4c8e5fe2e56f232a00ed92923aa50e78

async function fetchData() {
    let access_key = document.getElementById("access_token").value
    let location = document.getElementById("location").value
    
    if(access_key ==='' || location===''){
    
        return false
    }
    const url =  `http://api.weatherstack.com/current?access_key=${access_key}&query=${location}`
    
    let data = await fetch(url)
    data = await data.json();    
    // console.log(data.success);
    return data;
    
}

async function displayData() {
    
    let data = await fetchData()
    // console.log(data.location);

    let details = '';
    if(data === false){
        document.getElementById("wheather_details").innerHTML = "location and API key cannot be empty!";
        document.getElementById("wheather_details").style.paddingLeft = "50px";
    }
    else if(data.success===false){
        document.getElementById("wheather_details").innerHTML = "no result found";
        document.getElementById("wheather_details").style.paddingLeft = "50px";
        
    }
    else{
    details = `
                <div>Location: ${data.location.name}</div>
                <div style = "">
                    <div> Lat: ${data.location.lat}</div>
                    <div> Long: ${data.location.lon}</div>
            
                </div>
                <div>TimeZone: ${data.location.utc_offset}</div>
                <div>Wind Speed: ${data.current.wind_speed}</div>
                <div>Pressure: ${data.current.pressure}</div>
                <div>Humidity: ${data.current.humidity}</div>
                <div>Wind Direction: ${data.current.wind_dir}</div>
                <div>UV Index: ${data.current.uv_index}</div>
                <div>Feels Like: ${data.current.feelslike}</div>
                `

    document.getElementById("wheather_details").innerHTML = details;
                
}
}

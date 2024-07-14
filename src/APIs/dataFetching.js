const xxx = "key=HF339RHWAHZDW3PPCZCEKS8L9";

export async function fetchData(location) {
    try{
        const link = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + location + "?unitGroup=metric&" + xxx
        const data = await fetch(link)
        const json = await data.json();
        return json;
    } catch(error){
        console.log(error)
    }
}
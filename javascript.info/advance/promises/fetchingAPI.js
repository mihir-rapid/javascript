
const API_LINK = `https://api.github.com/users/mihirxtc`

fetch(API_LINK)
 .then((res) => {
    return res.json()
 })
 .then((data) => {
    console.log(data)
 })


async function fetchApi() {
    try {
        const res = await fetch(API_LINK)    
        const data = await res.json()
        console.log(data);
    } catch(e) {
        console.log(e)
        
    }
}

fetchApi();

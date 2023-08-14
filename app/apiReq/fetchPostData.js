export default async function sniglePost(id){
    let res = await fetch(`http://localhost:3000/data/blogdata.json/${id}`)
    let data = await res.json()
    return data
}
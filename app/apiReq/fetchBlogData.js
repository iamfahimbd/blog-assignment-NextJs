export default async function blogPosts(){

        const res = await fetch('http://localhost:3000/data/blogData.json');
        const data = await res.json()
        return data

}
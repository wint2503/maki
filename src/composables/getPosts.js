import { ref } from '@vue/reactivity'
let getPosts = () => {
    let posts = ref([])
    let error = ref("")
    let load = async () => {
        try {
            let response = await fetch("http://localhost:3000/post")
            // console.log(response)
            if (response.status === 404) {
                throw new Error('Not Found URL')
            }
            let datas = await response.json()
            posts.value = datas;
        } catch (err) {
            // console.log(err.message);
            error.value = err.message
        }

    }
    return { posts, error, load }
}
export default getPosts;
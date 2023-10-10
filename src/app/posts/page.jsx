import Link from "next/link"

const Posts = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', { next: { revalidate: 60, }, })
    const posts = await response.json();
    
    await new Promise((resolve)=>{
        setTimeout(()=>{
            resolve()
        },2000)
    })

    const postsJSX = posts.map((post) => {

        return (
            <>
                <Link href={`/posts/${post.id}`} className="w-full">
                    <div href={`/posts/${post.id}`} className="m-3 p-3 bg-stone-100 rounded-lg cursor-pointer hover:translate-y-2 hover:transition-all">
                        <h1>{post.title}</h1>
                        <p>{post.body}</p>
                    </div>
                </Link>


            </>

        )
    })

    return (
        <div > <h1 className="flex w-full items-center justify-center bg-red-200 mb-8">posts page</h1>

            <div> {postsJSX}</div>

        </div>

    )
}

export default Posts
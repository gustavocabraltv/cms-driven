import Link from 'next/link'

const BlogList = ({allBlogs}) => {
    function Summary(content) {
        return content.slice(0,100).trimEnd()
    }


    function formatDate(fullDate){
        const date   = new Date(fullDate)
        return date.toDateString().slice(4)
    }

    return (<>
        <div>{allBlogs.data.map( post => (
            <div key={post.attributes.slug}> 
                <h2>
                    <Link href={{pathname: `/blog/${post.attributes.slug}`}}> {post.attributes.title}
                    </Link>
                    <p>
                        by {post.attributes.author}
                        on {formatDate(post.attributes.date)}
                    </p>
                </h2>
                <p>
                    {`${Summary(post.attributes.body)}`+ '... (more)'}
                </p>
            </div>
        ))}</div>
    </>)
}

export default BlogList;
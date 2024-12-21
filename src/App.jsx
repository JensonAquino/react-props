import PostCard from "./components/PostCard"
import posts from "./data/posts"
function App() {

  const printCards = () => {
    return posts.map((curPost) => {
      return (
        curPost.published && (
          <div className="col" key={curPost.id}>
            <PostCard id={curPost.id}
              title={curPost.title}
              image={curPost.image}
              content={curPost.content}
              tags={curPost.tags}
            />
          </div>
        ))
    })
  }

  return (
    <>
      <section className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {printCards()}
        </div>
      </section>
    </>
  )
}

export default App

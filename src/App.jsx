import PostCard from "./components/PostCard"
import posts from "./data/posts"
function App(id, title,image, content, tags) {
  return (
    <>
     <section className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
        {posts.map((curPost) => (
        <div className="col" key={curPost.id}>
          <PostCard />
        </div>
        ))}
      </div>
     </section>
    </>
  )
}

export default App

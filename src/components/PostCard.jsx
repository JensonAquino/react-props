function PostCard({ id, title, image, content, tags }) {

    return (
        <div className="card">
            <img src={image ?`/images/${image}` : `https://placehold.co/600x400`} alt="" />
            <div className="card-body">
                <h4>{title}</h4>
                <p>{content.slice(0, 50) + "..."}</p>
                <div>
                    {tags.map((curTag, index) => (
                        <span key={index} className={`badge rounded-pill text-bg-primary me-1 ${curTag}`}>{curTag}</span>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default PostCard;
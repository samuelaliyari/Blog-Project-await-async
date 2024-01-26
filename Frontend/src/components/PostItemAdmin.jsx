const PostItem = ({ post, user, setPosts }) => {
	const localServer = "https://simple-blog-1p5a.onrender.com/";

	const deletePost = () => {
		fetch(`${localServer}api/posts/${post.id}/delete`, { method: "DELETE" })
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			})
			.catch((err) => console.log(err));
	};

	const showTags = (tag) => {
		console.log(tag);
		fetch(
			`https://simple-blog-1p5a.onrender.com/api/posts/query?tag=${tag}`,
		)
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			});
	};

	const showUsersPosts = () => {
		console.log(user.id);
		fetch(
			`https://simple-blog-1p5a.onrender.com/api/posts/query?userId=${user.id}`,
		)
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			});
	};
	return (
		<section className='postItemWrapper'>
			<article className='postItem'>
				<img
					src={
						user?.image ||
						"https://simple-blog-1p5a.onrender.com/" + post.img
					}
					alt={post.title}
				/>
				<div>
					<h2>{post.title}</h2>
					<h5 onClick={showUsersPosts}>{user?.username}</h5>
					<div className='tags'>
						{post.tags?.map((tag, index) => (
							<p
								key={index}
								onClick={(e) => showTags(e.target.innerText)}>
								{tag}
							</p>
						))}
					</div>
					<p>{post.body}</p>
					<span>❤️ {post.reactions}</span>
				</div>
				<span onClick={deletePost}>🗑️</span>
			</article>
		</section>
	);
};

export default PostItem;

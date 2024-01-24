const PostItem = ({ post, user, setPosts }) => {
	const localServer = "http://localhost:3000/";

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
		fetch(`http://localhost:3000/api/posts/query?tag=${tag}`)
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			});
	};

	const showUsersPosts = () => {
		console.log(user.id);
		fetch(`http://localhost:3000/api/posts/query?userId=${user.id}`)
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
					src={user?.image || "http://localhost:3000/" + post.img}
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

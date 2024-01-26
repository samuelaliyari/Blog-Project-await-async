import { useState } from "react";
import { backendUrl } from "../api/api";

const PostItem = ({ post, user, setPosts }) => {
	const [showComments, setShowComments] = useState(false);
	const showUsersPosts = () => {
		console.log(user.id);
		fetch(`http://localhost:3000/api/posts/query?userId=${user.id}`)
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			});
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

	const addLike = (id) => {
		fetch(`http://localhost:3000/api/posts/${id}/like`, {
			method: "PATCH",
		})
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
					src={user?.image || backendUrl + "/" + post.img}
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
					<span onClick={() => addLike(post.id)}>
						❤️ {post.reactions}
					</span>
				</div>
			</article>
			<article className='commentsWrapper'>
				<p
					className='commentsIcon'
					onClick={() => setShowComments(!showComments)}>
					💬 {post.comments?.length}
				</p>
				{/* <section
					className='commentsBox'
					style={{ display: showComments ? "block" : "none" }}>
					<input
						type='text'
						placeholder='Write a Comment'
					/>
					{post.comments?.length !== 0
						? post.comments?.map((comment) => <p>{comment}</p>)
						: null}
					<p>
						a.dfhgladsfhglasudfhglasuidhfalsiughalsiufhalsiduhflasiudghlasiu
					</p>
				</section> */}
			</article>
		</section>
	);
};

export default PostItem;

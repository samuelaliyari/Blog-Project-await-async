import { useEffect, useState } from "react";
import PostsAdmin from "./PostsAdmin";
import Navbar from "../components/Navbar";
import { backendUrl } from "../api/api";

const Admin = () => {
	const [posts, setPosts] = useState([]);
	const [newPost, setNewPost] = useState({
		postTitle: "",
		postContent: "",
		img: File,
	});
	useEffect(() => {
		fetch(`${backendUrl}/api/posts`)
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			})
			.catch((err) => console.log(err));
	}, []);
	const addpost = () => {
		event.preventDefault();
		const fd = new FormData();
		fd.append("postContent", newPost.postContent);
		fd.append("postTitle", newPost.postTitle);
		fd.append("postImg", newPost.img, newPost.img.name);
		fetch(`${backendUrl}/api/posts/uploadimg`, {
			method: "POST",
			body: fd,
		})
			.then((res) => res.json())
			.then((success, result, error) => {
				if (!success) console.log(error);
				else setPosts(result);
				setTimeout(() => window.location.reload(), 200);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		console.log(newPost);
	}, [newPost]);

	return (
		<section className='admin'>
			<Navbar />
			<main>
				<form>
					<input
						type='text'
						placeholder='title'
						name='postTitle'
						value={newPost.postTitle}
						onChange={(e) =>
							setNewPost({
								...newPost,
								postTitle: e.target.value,
							})
						}
					/>
					<input
						type='text'
						placeholder='description'
						name='postContent'
						value={newPost.postContent}
						onChange={(e) =>
							setNewPost({
								...newPost,
								postContent: e.target.value,
							})
						}
					/>
					<input
						type='file'
						name='postImg'
						id=''
						onChange={(e) =>
							setNewPost({ ...newPost, img: e.target.files[0] })
						}
					/>
					<button onClick={() => addpost()}>post</button>
				</form>
			</main>
			<PostsAdmin
				posts={posts}
				setPosts={setPosts}
			/>
		</section>
	);
};

export default Admin;

import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import Navbar from "../components/Navbar";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch("https://simple-blog-1p5a.onrender.com/api/posts")
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			})
			.then();
	}, []);
	useEffect(() => {
		fetch("https://simple-blog-1p5a.onrender.com/api/users")
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				console.log(users);
				if (!success) console.log(error);
				else setUsers(result);
			});
	}, []);
	return (
		<section className='posts'>
			<Navbar />
			<main>
				{posts.map((post) => (
					<PostItem
						post={post}
						key={post.id}
						user={users.find((user) => user.id === post.userId)}
						setPosts={setPosts}
					/>
				))}
			</main>
		</section>
	);
};

export default Posts;

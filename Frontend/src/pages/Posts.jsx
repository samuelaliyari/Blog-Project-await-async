import { useEffect, useState } from "react";
import PostItem from "../components/PostItem";
import Navbar from "../components/Navbar";
import { backendUrl } from "../api/api";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [users, setUsers] = useState([]);
	console.log(backendUrl);
	useEffect(() => {
		fetch(backendUrl + "/api/posts")
			.then((res) => res.json())
			.then(({ success, result, error }) => {
				if (!success) console.log(error);
				else setPosts(result);
			})
			.then();
	}, []);
	useEffect(() => {
		fetch(backendUrl + "/api/users")
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

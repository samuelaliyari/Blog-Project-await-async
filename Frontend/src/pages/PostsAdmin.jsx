import { useEffect, useState } from "react";
import PostItemAdmin from "../components/PostItemAdmin";
import { backendUrl } from "../api/api";

const PostsAdmin = ({ posts, setPosts }) => {
	const [users, setUsers] = useState([]);
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
			<main>
				{posts?.map((post) => (
					<PostItemAdmin
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

export default PostsAdmin;

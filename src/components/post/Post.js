import "./Post.css"
export default function Post({item, search}) {
	return (
		<div>
			<span>Title:</span> {item.title}<br/>
			<span>ID of post:</span> {item.id}<br/>
			<span>ID of user:</span> {item.userId}<br/>

			------------------------
			<button onClick={() => search(item.id)}>show content of post</button>

		</div>
	);
}
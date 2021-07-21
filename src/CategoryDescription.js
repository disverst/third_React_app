import { useParams } from 'react-router-dom';

function CategoryDescription() {
	let {description} = useParams()
	return (
		<>
			<a href="/cat">Назад</a>
			<h1>
				Category: {description}
			</h1>
		</>
	);
}

export default CategoryDescription;
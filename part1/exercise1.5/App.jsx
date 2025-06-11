const App = () => {
	const course = {
		name: 'Desenvolvimento de aplicação Half Stack',
		parts: [
			{
				name: 'Fundamentos da biblioteca React',
				exercises: 10,
			},
			{
				name: 'Usando props para passar dados',
				exercises: 7,
			},
			{
				name: 'Estado de um componente',
				exercises: 14,
			},
		],
	};

	return (
		<div>
			<h1>{course.name}</h1>
			<ul>
				<li>{course.parts[0].name}</li>
				<li>{course.parts[1].name}</li>
				<li>{course.parts[2].name}</li>
			</ul>
			<h2>
				Total dos results:{' '}
				{course.parts[0].exercises +
					course.parts[1].exercises +
					course.parts[2].exercises}{' '}
			</h2>
		</div>
	);
};

export default App;

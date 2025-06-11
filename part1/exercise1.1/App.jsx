const App = () => {
	return (
		<div>
			<Header />
			<Content />
			<Total />
		</div>
	);
};

// Header cuida da renderização do nome do curso
const Header = () => {
	const course = 'Desenvolvimento de aplicação Half Stack';
	return <h1>{course}</h1>;
};

// Content renderiza as partes e o número de exercícios
const Content = () => {
	const part1 = 'Fundamentos da biblioteca React';
	const part2 = 'Usando props para passar dados';
	const part3 = 'Estado de um componente';

	return (
		<ul>
			<li>{part1}</li>
			<li>{part2}</li>
			<li>{part3}</li>
		</ul>
	);
};

// Total renderiza o número total de exercícios.
const Total = () => {
	const exercises1 = 10;
	const exercises2 = 7;
	const exercises3 = 14;

	function sum() {
		return exercises1 + exercises2 + exercises3;
	}

	return <h2>Exercises total: {sum()}</h2>;
};



export default App;



const App = () => {

  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = {
    name: 'Fundamentos da biblioteca React',
    exercises: 10
  }
  const part2 = {
    name: 'Usando props para passar dados',
    exercises: 7
  }
  const part3 = {
    name: 'Estado de um componente',
    exercises: 14
  }

  return (
    <div>
      <h1>{course}</h1>
      <ul>
        <li>{part1.name}</li>
        <li>{part2.name}</li>
        <li>{part3.name}</li>
      </ul>
      <h2>Total dos exercises: {part1.exercises + part2.exercises + part3.exercises}</h2>
    </div>
  )
}


export default App;

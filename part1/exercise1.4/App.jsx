const App = () => {

  const course = 'Desenvolvimento de aplicação Half Stack'

  const parts = [
    {
      name: 'Fundamentos da biblioteca React',
      exercises: 10
    },
    {
      name: 'Usando props para passar dados',
      exercises: 7
    },
    {
      name: 'Estado de um componente',
      exercises: 14
    }
  ]


  return (
    <div>
      <h1>{course}</h1>
      <ul>
        <li>{parts[0].name}</li>
        <li>{parts[1].name}</li>
        <li>{parts[2].name}</li>
      </ul>
      <h2>Total dos exercises: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h2>
    </div>
  )
}


export default App;



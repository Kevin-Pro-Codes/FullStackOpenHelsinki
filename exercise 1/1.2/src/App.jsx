const Header = ({course}) => {
return <h1>{course}</h1>
}

const Part = ({name, exercises}) => {
  return <p>{name} {exercises}</p>
}

const Content = ({content}) => {
  const {part1, exercises1, part2, exercises2, part3, exercises3} = content
  return (
  <div>
  <Part name={part1} exercises={exercises1}/>
  <Part name={part2} exercises={exercises2}/>
  <Part name={part3} exercises={exercises3}/>
  </div>
  )
}

const Total = ({total}) => {
return (
<p>Total number of exercises is {total} </p>
)
}

const App = () => {
  const course = 'Half Stack application development' + " "
  const part1 = 'Fundamentals of React' + " "
  const exercises1 = 10
  const part2 = 'Using props to pass data' + " "
  const exercises2 = 7
  const part3 = 'State of a component' + " " 
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content content={{part1, exercises1, part2, exercises2, part3, exercises3}} />
      <Total total= {exercises1 + exercises2 + exercises3}/>
    </div>
  )
}

export default App
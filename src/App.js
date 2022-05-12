import React from 'react';
import CourseCard from './Components/CourseCard'
import CourseCardClosed from './Components/CourseCardCLosed'





class App extends React.Component {
  

  render(){
  return (
    <div>
      <header className='header'>
        <h1 className='title'>Главная</h1>
        <div className='burger'></div>
      </header>
      <main className='main__block'>
        <h2 className='sub__title'>Рекомендуемые курсы</h2>
        <ul className='course__list'>
          <CourseCard  />
          <CourseCardClosed />
        </ul>
      </main>
    </div>
  )
  }
}

export default App;

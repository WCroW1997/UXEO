import React from 'react'
import Header from './Header'
import LessonCardClosed from './LessonCardClosed'
import LessonCard from './LessonCard'

class Course extends React.Component{
    render(){
        return(
            <div>   
                <Header/>
                <div className='progres'>
                    <div className='progres__text'>
                        <p>Пройдено</p>
                        <p><span>0</span>%</p>
                    </div>
                    <div className='progres__line'>

                    </div>
                </div>
                <main className='main__course'>
                    <h2 className='sub__title'>Уроки</h2>
                    <ul>
                        <LessonCard/>
                        <LessonCardClosed/>
                        <LessonCardClosed/>
                        <LessonCardClosed/>
                        <LessonCardClosed/>

                    </ul>
                </main>
            </div>
        )
    }
}


export default Course
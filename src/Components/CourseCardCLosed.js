import React from "react";
import cardImg from '../img/ux-design1.svg'
import lessonBook from '../img/lessonBook.svg'
import lock from '../img/lock-21.svg'

class CourseCard extends React.Component{
    render(){
        return(
            <div className="card card__closed">
                <div className="main__content">
                    <div className="card__content">
                        <h2 className="card__title">UI компоненты. Базовый</h2>
                        <p className="card__text">
                        На курсе мы изучим фундаментальные знаниях UI дизайна... 
                        </p>
                    </div>
                    <div className="card__img">
                        <img src={cardImg} alt=""/>
                        <div className="card__lock">
                            <img src={lock} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="card__footer">
                    <div className="card__info">
                        <div className="card__progress">Пройдено 0%</div>
                        <div className="card__tag">UI</div>
                    </div>
                   
                    <div className="card__lesson">
                        <img src={lessonBook} alt=""/>
                        <p className="card__lesson--text">6 уроков</p>
                    </div>
                </div>
                
                
            </div>
        )
    }
}


export default CourseCard
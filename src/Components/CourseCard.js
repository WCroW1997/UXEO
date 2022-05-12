import React from "react";
import cardImg from '../img/ux-design1.svg'
import lessonBook from '../img/lessonBook.svg'
import { Link } from "react-router-dom";


class CourseCard extends React.Component{
    goToCourse = () =>{
        this.props.history.push('./course')
      }
    


    render(){
        return(
            <div className="card" onClick={this.goToCourse}>
                <div className="main__content">
                    <div className="card__content">
                        <h2 className="card__title">UI компоненты. Базовый</h2>
                        <p className="card__text">
                        На курсе мы изучим фундаментальные знаниях UI дизайна... 
                        </p>
                        <Link to={'./course'}> Click</Link>
                    </div>
                    <div className="card__img">
                        <img src={cardImg} alt=""/>
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
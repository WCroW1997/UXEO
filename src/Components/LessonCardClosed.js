import React from "react";
import lessonIcon from '../img/uiItem.svg'
import locked from '../img/lock-21.svg'

class LessonCardClosed extends React.Component{
    render(){
        return(
            <div className="lesson__card--closed">
                <div className="lesson__text">
                    <div className="card__lock">
                        <img src={locked} alt=""/>
                    </div>
                    <h3 className="lesson__title">Цвет</h3>
                </div>
                
                <img src={lessonIcon} alt=''/>
            </div>
        )
    }
}


export default LessonCardClosed
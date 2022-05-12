import React from "react";
import lessonIcon from '../img/uiItem.svg'

class LessonCard extends React.Component{
    render(){
        return(
            <div className="lesson__card">   
                <h3 className="lesson__title">UI дизайн. Элементы</h3>
                <img src={lessonIcon} alt=''/>
            </div>
        )
    }
}


export default LessonCard
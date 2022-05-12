import React from "react";
import arrow from '../img/arrow.svg'

class Header extends React.Component{
    render(){
        return(
            <div>   
                <header className='header__app'>
                    <img src={arrow} alt='' />
                    <h1 className='header__title'>UI компоненты. Базовый курс</h1>
                </header>
            </div>
        )
    }
}


export default Header
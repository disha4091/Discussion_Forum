import React from 'react'
import ML from './Images/ML.jpg' ;
const Cards = () => {
    return (
        <div class="ui card">
            <div class="content">
                <div class="header">Machine Learning</div>
            </div>
        <img src = {ML} />
        <div class="extra content">
            <button class="ui button">Explore</button>
        </div>
</div>
    )
}

export default Cards

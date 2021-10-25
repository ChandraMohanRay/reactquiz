import React, { Component } from 'react'

 class QuizComponent extends Component {
    render() {
        return (
            
            <div className='quizcomp'>
            
            <div className='box'>
                <h1>Questions</h1>
                <span className='ques'><h1>Which is the only mamal that can't jump</h1> </span>
                <span className='no'>4 of 15 </span>
                <div className ='qbtn'>
                    <button>Dog</button>
                    <button>Goat</button>
                    
                    <button>Elephant</button>
                    <button>Lion</button>
                </div>
                <div className='footer'>
                    <button className='btn1'>Previous</button>
                    <button className='btn2'>Next</button>
                    <button className='btn3'>Quit</button>
                </div>
                </div>
                </div>
            
        )
    }
}
export default QuizComponent
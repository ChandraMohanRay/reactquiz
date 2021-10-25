import React, { Component } from 'react'

 class ResultComponent extends Component {
    render() {
        return (
            <div className='result-container'>
            <div className="icon">
            <i class="far fa-check-circle"></i>
             </div>
             <div className='result-box'>
             <h1>You need more paractice ! </h1>
             <h1 class='score'>Your Score :20% </h1>
             <div className='score-table'>
             <tr>
                 <td>
                     Total No of question
                 </td>
                 <td>15</td>
                
             </tr>
             <tr>
             <td>No of attempted questions:  </td>
            
             <td>9</td>

             </tr>
             <tr>
             <td>No of Correct Option:</td>
             <td>3</td>
                 
             </tr>
             <tr>
                 <td>
                     Number of Wronng Answers:
                 </td>
                 <td>
                     6
                 </td>
             </tr>


             </div>




             </div>
             <div className='actionbtn'>
                 <button className="abtn1">Play Again</button>
                 <button className="abtn2">Back to Home</button>
             </div>
                
            </div>
        )
    }
}
export default ResultComponent
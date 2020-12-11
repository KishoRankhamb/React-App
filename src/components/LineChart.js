import React from 'react'
import { Line } from 'react-chartjs-2'

function LineChart() {


    const data={
        labels:['jan','feb','mar','apr','may'],
       datasets:[
           {
               label:'Sales for 2020 (M)',
               data:[3,2,2,5,1],
               borderColor:['rgba(255,206,80,0.2)'],
               backgroundColor:['rgba(255,206,80,0.2)'],
               pointBackgroundColor:'rgba(255,206,80,0.2)',
               pointBorderColor:'rgba(255,206,80,0.2)'
           },

           {
            label:'Sales for 2021(M)',
            data:[5,4,3,2,1]
        }
       ]
    }
    return(
        <div>
            <Line data={data}  width={600} height={250}/>
           
        </div>


    )



}
export default LineChart
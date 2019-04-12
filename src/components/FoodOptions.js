
import React from 'react'
import { Typography } from '@material-ui/core';

export default function FoodOptions({options}) {
  
  return (
    <div>
      
        {options.map(option => 
      <div>
        <Typography variant="subtitle1"><b>Options:</b></Typography>
        <ul>
          <Typography variant="subtitle2"><b>{option["section_name"]}</b></Typography>
            <Typography variant="body1">
            <li>{option["choices"][0]["name"]}</li>
            <li>{option["choices"][1]["name"]}</li>
            </Typography>
         </ul>
         
      </div>
        )
    }
    </div>
  )
}












// export default class FoodOptions extends Component {

// componentDidMount() {

// }
      
// renderStuff()
//  {
//     let options = this.props
//     let list; 
//         options.forEach((section)=> {
//             // console.log('Section Name: ', section["section_name"])
//             // console.log('Choice Array: ', section["choices"])
//             list = section["choices"].map((choice)=> {
//                 return choice["name"]
//             })
//         })
//         console.log(list)
//         return list
//  }
//     //    option.forEach((selection) => {
//     //        console.log(selection)
//     //    })
    
   
//     //    console.log(option["choices"][0]["name"])})



// //    let choiceArray = choices.map(choice => choice)
// //    console.log(choiceArray)

// render(){


// let other = this.renderStuff()
//   return (
    
//     <div>
//  {
//      other.map(thing=> {
//          return <p>{thing}</p>
//      })
//     }
//     </div>
//   )
// }


// }
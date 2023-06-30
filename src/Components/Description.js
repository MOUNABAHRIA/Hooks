import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import {useNavigate, useParams } from'react-router-dom'

const Description = ({movie}) => {
    let x = useParams();
    console.log('x=',x);
    let filteredArray = movie.filter((el)=>el.name === x.name);
    console.log('filteredArray=',filteredArray);
    const navigate=useNavigate(); 
    const adem="20"
   console.log('adem=',adem);
return (     
<div>
     {filteredArray.map((movie)=>{return (<div> 
       <Card>
        <Card.Header as="h5">{movie.name}</Card.Header>
          <Card.Body>
            
            <Card.Title style={{color:"red"}}>{movie.rating}</Card.Title>

            <Card.Text>
            {movie.id} 
            {movie.description}
            {movie.raiter}
         
            </Card.Text>
           
             <Button variant="primary" onClick={()=>navigate('/')} >Go Back</Button> 
          </Card.Body>
        
          </Card>
          </div>)
})}
</div>
)
     }
export default Description
import React,{Fragment} from 'react';
import styled from "styled-components"


const ErrorContainer = styled.div`

display:flex;
background-color:black;
color:white;
height:100vh;
margin-top:-130px;
justify-content:center;
    align-items:center; 
    flex-flow:column;
 h1{
     font-size:73px;
 }
 h2{
     font-size:50px;
 }

`

const Error = (props) => {
    
    setTimeout(() => {
        props.setNav(false)
    }, 20);

    return ( 
        <Fragment>
            <ErrorContainer>
            <h1>Error 404</h1>
            <h2>Pagina no encontrada</h2>
            </ErrorContainer>
        </Fragment>
     );
}
 
export default Error;
import styled from "styled-components"

export const Container =styled.div`
width:100%;
height:100vh;
display:flex;
flex-direction:column ;
justify-content:center ;
align-items:center ;
background-color:#DDDD ;

`
export const Card =styled.div`
background-color:#fff ;
width:500px;
display:flex ;
flex-direction:column ;

h2{
  margin: 30px ;
}
`

export const FormContainer =styled.form`
display:flex ;
flex-direction:column ;
margin:10px 30px;
input{
  border:1px solid #dadada ;
  border-radius:4px ;
  outline:none ;
  padding:5px 10px ;
  margin-top:10px ;
}
`
export const CardButton =styled.div`
display:flex ;
justify-content:flex-end;
margin-top:10px;
width:100% ;


`
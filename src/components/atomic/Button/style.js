import styled from 'styled-components';

export const ButtonStyle = styled.div`
  padding:5px ;
  font-size:15px ;
  text-align:center ;
  border:none ;
  background:${(props)=>props.background ? "#6a6a6a42" : "#000"} ;
  color:${(props) =>props.color ? "#000" : "#fff"};
  cursor:pointer;
`

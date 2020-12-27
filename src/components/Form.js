import React, { Component } from 'react';
import styled from 'styled-components';

async function post(data){

    const da = new FormData()
    da.append('name', 'janoski');

    const response = await fetch('http://localhost:5001/blog-61d64/us-central1/sendMail',{
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
})
return response
};   

const StyledForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`
const InputWrapper = styled.div`
width: 90%;
display: flex;
justify-content: space-between;
margin-bottom: 20px;
&:first-of-type{
margin-top: 20px;
}
`
const StyledInput = styled.input`
width: 70%;

`
const StyledTextArea = styled.textarea`
width: 70%;
height: 80px;
resize: none;
`

const StyledButton = styled.button`
border: none;
border-radius: 10px;
padding: 10px 30px;
box-shadow: 2px 2px 3px rgb(100, 100, 100);
background-color: rgb(${({theme})=>theme.colors.buttonBgColor});
color: rgb(${({theme})=>theme.colors.buttonTextColor});
`

class Form extends Component {
    state = {
        name: '',
        email: '',
        message: ''
    }


    handleChange = (e) =>{
        const field = e.target.name
        this.setState({
            [field]: e.target.value
        }
        )
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state);
        post(this.state).then(data=>{
            console.log(data);
        })
    }
    
    
    render() {
        return (
            <StyledForm onSubmit={this.handleSubmit}>
                <InputWrapper>
                <label htmlFor="name">Name:</label>
                <StyledInput name="name" id="name" type="text" value={this.state.name} onChange={this.handleChange}/>
                </InputWrapper>
                <InputWrapper>
                <label htmlFor="email">E-mail:</label>
                <StyledInput name="email" id="email" type="email" value={this.state.email} onChange={this.handleChange}/>
                </InputWrapper>
                <InputWrapper>
                <label htmlFor="message">Message:</label>
                <StyledTextArea name="message" id="message" type="textarea" value={this.state.message} onChange={this.handleChange}/>
                </InputWrapper>
                <StyledButton type="submit">Send</StyledButton>
            </StyledForm>
        );
    }
}

export default Form;

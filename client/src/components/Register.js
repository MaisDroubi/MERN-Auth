import React, {useState} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn , Selector } from '../styles/Styles';

export default props => {
    const {onSubmitProp} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    const onSubmitHandler = (e) => {
        e.preventDefault();
       onSubmitProp({
            firstName,
            lastName,          
            email,
            password
        });
    }

    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel>First Name:</FillLabel>
                    <MainInput type="text" onChange={(e) => setFirstName(e.target.value)}/>
                </FormGroup>
                <FormGroup> 
                    <FillLabel>Last Name:</FillLabel>
                    <MainInput type="text" onChange={(e) => setLastName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                <FillLabel>Email</FillLabel>
                    <MainInput type="email" onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                <FillLabel>Password</FillLabel>
                    <MainInput type="password" onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <RoundedBtn type="submit">Register</RoundedBtn>
            </TheForm>
        </div>
    )
}
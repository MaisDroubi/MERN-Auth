import React, {useState} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn  } from '../styles/Styles';

export default props => {
    const {onSubmitProp} = props;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            email,
            password
            
            
        })
    }

    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel>Email:</FillLabel>
                    <MainInput type="email" onChange={(e) => setEmail(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Password:</FillLabel>
                    <MainInput type="password" onChange={(e) => setPassword(e.target.value)}/>
                </FormGroup>
                <RoundedBtn type="submit">Login</RoundedBtn>
            </TheForm>
        </div>
    )
}
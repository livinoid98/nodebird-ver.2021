import React, {useState} from 'react'
import {Form, Input, Checkbox, Button} from 'antd'

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();
        if(password !== passwordCheck) {
            return setPasswordError(true);
        }
        if(!term) {
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        setTermError(true);
        setTerm(e.target.checked);
    };
    return (
        <>
            <Form onSubmit={onSubmit} style={{padding: 10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">패스워드</label>
                    <br/>
                    <Input name="user-password" type="password" required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-pass-check">패스워드체크</label>
                    <br/>
                    <Input name="user-pass-check" type="password" required onChange={onChangePasswordCheck}/>
                    {passwordError && <div style={{color: 'red'}}>비밀번호가 일치하지 않습니다.</div>}
                </div>
                <div>
                    <Checkbox name="user-term" onChange={onChangeTerm}>위 약관에 동의합니다.</Checkbox>
                    {!termError && <div style={{color: 'red'}}>약관에 동의하셔야 합니다.</div>}
                </div>
                <div style={{marginTop:10}}>
                    <Button type="primary">가입하기</Button>
                </div>
            </Form>
        </>
    )
}

export default Signup;

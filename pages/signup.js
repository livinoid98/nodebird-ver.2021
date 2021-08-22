import React, {useState} from 'react'
import AppLayout from '../components/AppLayout'
import {Form, Input, Checkbox, Button} from 'antd'

const Signup = () => {
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();
        console.log({
            id,
            nick,
            password,
            passwordCheck,
            term
        });
    };
    const onChangeId = () => {
        setId(e.target.value);
    };
    const onChangeNick = () => {
        setNick(e.target.value);
    };
    const onChangePassword = () => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = () => {
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = () => {
        setTerm(e.target.checked);
    };
    return (
        <AppLayout>
            <Form onSubmit={onSubmit} style={{padding: 10}}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br/>
                    <Input name="user-id" value={id} required onChange={onChangeId}/>
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br/>
                    <Input name="user-nick" value={nick} required onChange={onChangeNick}/>
                </div>
                <div>
                    <label htmlFor="user-password">패스워드</label>
                    <br/>
                    <Input name="user-password" value={password} type="password" required onChange={onChangePassword}/>
                </div>
                <div>
                    <label htmlFor="user-pass-check">패스워드체크</label>
                    <br/>
                    <Input name="user-pass-check" value={passwordCheck} type="password" required onChange={onChangePasswordCheck}/>
                </div>
                <div>
                    <Checkbox name="user-term" value={term} onChange={onChangeTerm}>위 약관에 동의합니다.</Checkbox>
                </div>
                <div>
                    <Button type="primary">가입하기</Button>
                </div>
            </Form>
        </AppLayout>
    )
}

export default Signup;

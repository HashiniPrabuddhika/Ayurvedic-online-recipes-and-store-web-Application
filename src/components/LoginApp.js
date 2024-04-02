import React, { useState } from 'react'
import * as Components from './screens/Login';
import { Login_back } from './Login_back';
import { useNavigate } from "react-router-dom";
import axios from "axios";


export default function LoginApp() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleLogin = async () => {

        try {
            console.log('Sending login request with email:', email);
            const response = await axios.post("http://localhost:3010/api/v1/customers/login", {
                email: email,
                password: password,
            });

            if (response.status === 200) {
                console.log("Login!");
                const userData = response.data;
                console.log(userData)
                navigate('/home');
            } else {
                console.log("Login failed. Response status:", response.status);
                console.log("Response data:", response.data);
            }
        } catch (error) {
            alert("Error. Please try again.");
            console.error('Login failed:', error);
        }
    };


    const handleRegister = async () => {
        try {

            const response = await axios.post("http://localhost:3010/api/v1/customers", {
                name: name,
                email: email,
                password: password,
            });

            const userData = response.data;

            navigate('/');
        } catch (error) {
            alert("Error Try Again");
            console.error('Registration failed:', error);
        }
    };
    
    const [signIn, toggle] = React.useState(true);

    return (
        <div>
            <Login_back />
            <Components.Container>

                <Components.SignUpContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title style={{ color: 'black' }}>Create Account</Components.Title>
                        <Components.Input type='text' placeholder='Name' value={name}
                            onChange={(e) => setName(e.target.value)} />
                        <Components.Input type='email' placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input type='password' placeholder='Password' value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Button onClick={handleRegister}>Sign Up</Components.Button>
                    </Components.Form>
                </Components.SignUpContainer>

                <Components.SignInContainer signinIn={signIn}>
                    <Components.Form>
                        <Components.Title style={{ color: 'black' }}>Sign in</Components.Title>
                        <Components.Input type='email' placeholder='Email' value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Components.Input type='password' placeholder='Password' value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <Components.Anchor href='#'>Forgot your password?</Components.Anchor>
                        <Components.Button onClick={(e) => {
                            e.preventDefault()
                            handleLogin()
                        }}>Sigin In</Components.Button>
                    </Components.Form>
                </Components.SignInContainer>

                <Components.OverlayContainer signinIn={signIn}>
                    <Components.Overlay signinIn={signIn}>

                        <Components.LeftOverlayPanel signinIn={signIn}>
                            <Components.Title>Welcome Back!</Components.Title>
                            <Components.Paragraph>
                                To keep connected with us please login with your personal info
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(true)}>
                                Sign In
                            </Components.GhostButton>
                        </Components.LeftOverlayPanel>

                        <Components.RightOverlayPanel signinIn={signIn}>
                            <Components.Title>Hello!</Components.Title>
                            <Components.Paragraph>
                                Enter Your personal details and start Ayurvedic journey with us
                            </Components.Paragraph>
                            <Components.GhostButton onClick={() => toggle(false)}>
                                Sigin Up
                            </Components.GhostButton>
                        </Components.RightOverlayPanel>

                    </Components.Overlay>
                </Components.OverlayContainer>

            </Components.Container>
        </div>
    )
}
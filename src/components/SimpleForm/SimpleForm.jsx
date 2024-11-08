import { useState, useRef } from "react";
const SimpleForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        console.log(nameRef.current.value, emailRef.current.value, passwordRef.current.value);
        
        if(password.length < 6){
            setError('Password must be at least 6 characters long');
        }else{
            setError('');
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={nameRef} type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <input ref={emailRef} type="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <input ref={passwordRef} type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                <br />
                <input type="submit" value="Submit" />
            </form>
            {error && <p>{error}</p>}
        </div>
    );
};

export default SimpleForm;
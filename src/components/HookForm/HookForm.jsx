import useInputState from "../hooks/useInputState";

const HookForm = () => {
    const [name, handleNameChange] = useInputState();
    const [email, handleEmailChange] = useInputState();
    const [password, handlePasswordChange] = useInputState();
    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email, password);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input  type="text" name="name" onChange={handleNameChange} />
                <br />
                <input  type="email" name="email" onChange={handleEmailChange} />
                <br />
                <input  type="password" name="password" onChange={handlePasswordChange} />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;
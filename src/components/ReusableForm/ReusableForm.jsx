import { useContext } from "react";
import { AssetContext, MoneyContext } from "../../App";

const ReusableForm = ({formTitle,submitButtonText, handleSubmit}) => {

    const handleLocalSubmit = e => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        handleSubmit(data);
    }
    const gift = useContext(AssetContext);
    const [money, setMoney] = useContext(MoneyContext)
    return (
        <div>
            <h2>{formTitle}</h2>
            <p>Gift: {gift}</p>
            <p>Moeny: {money}</p>
            <button onClick={() => setMoney(money + 1000)}> Add Money</button>
            <form onSubmit={handleLocalSubmit}>
                <input  type="text" name="name"  />
                <br />
                <input  type="email" name="email"  />
                <br />
                <input  type="password" name="password"  />
                <br />
                <input type="submit" value={submitButtonText} />
            </form>
        </div>
    );
};

export default ReusableForm;
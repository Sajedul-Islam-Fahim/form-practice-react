import './App.css'
import HookForm from './components/HookForm/HookForm'
import SimpleForm from './components/SimpleForm/SimpleForm'
import ReusableForm from './components/ReusableForm/ReusableForm'
import { createContext, useState } from 'react'
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(500);
function App() {
 
  const handleSignUpSubmit = data => {
    console.log('Sign Up data',data);
  }
  const handleLoginSubmit = data => {
    console.log('Login data',data);
  }
  const [money, setMoney] = useState(500);
  return (
    <>
      <SimpleForm />
      <HookForm />
      <p>Money: {money}</p>
     <MoneyContext.Provider value ={[money, setMoney]}>
        <AssetContext.Provider value="gold">
        <ReusableForm formTitle="Sign Up" submitButtonText="Sign Up" handleSubmit={handleSignUpSubmit} />
        <ReusableForm formTitle="Login" submitButtonText="Login" handleSubmit={handleLoginSubmit} />
        </AssetContext.Provider>
     </MoneyContext.Provider>
    </>
  )
}

export default App

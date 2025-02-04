import Reflectpage from './Reflectpage'
import SignIn from './SignIn'
import './App.css'

import { EthosConnectStatus, SignInButton, ethos} from 'ethos-connect'

function App() {

  const {status} = ethos.useWallet()

  if(status == EthosConnectStatus.Connected){
    return (
      // <Reflectpage/>
      <SignIn/>
    )
  }
  else if (status == EthosConnectStatus.Loading){
    return(
      <div style={{display:"flex", justifyContent:"center"}}>
      <h1 style={{marginTop:"16rem"}}> Loading Wallet.....</h1>
      </div>
    )
  }
  else{
    
    return(
      <div style={{display:"flex", justifyContent:"center", marginTop:"5rem"}}>
        <SignInButton></SignInButton>
      </div>
    )
  }

}

export default App

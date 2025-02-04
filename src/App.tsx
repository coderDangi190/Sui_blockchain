import { CompactPicker } from 'react-color'
import './App.css'
import { useState } from 'react'
import { EthosConnectStatus, SignInButton, ethos} from 'ethos-connect'

function App() {
  const [color, setColor] = useState("#000000")
  const {status} = ethos.useWallet()

  if(status == EthosConnectStatus.Connected){
    return (
      <>
        <div style={{display:"flex", justifyContent:"center" , marginTop:"4rem"}}>
          <div style={{border:"1px solid black", width:"400px", height:"400px", backgroundColor:`${color}`}}>

          </div>
          <div style={{
            margin:"4rem", width:"512px", lineHeight:"2rem", display:"flex", 
            flexDirection:"column", justifyContent:"center"}}>
            <h1>Sui Places</h1>
            <p style={{marginTop:"4rem", marginBottom:"4rem"}}>
              Are you ready to join the Sui community in placing a  title on the board? Select 
              a color then ctrl+click (win) or cmd+click(mac) to place.
            </p>
            <div style={{marginBottom:"3rem", }}>
              <CompactPicker color={color} onChangeComplete={new_color => setColor(new_color.hex)}/>
            </div>
          </div>
  
        </div>
      </>
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

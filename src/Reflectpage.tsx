import { CompactPicker } from 'react-color'
import { useState } from 'react'
const Reflectpage = ()=>{
    const [color, setColor] = useState("#000000")
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
export default Reflectpage
import { useState } from "react"
const SignIn = ()=>{

        const [Connected, setConnected] = useState(false);
        const [message, setMessage] = useState("");

        const SignIn = ()=>{
            setConnected(true);
            alert("Connected successfull");
        }
        const signOut  = ()=>{
            setConnected(false);
        }

        const handleUpload = ()=>{
            if(!Connected){
                alert('You Cannot Message UPload before LogIn');
                setMessage('');
                return;
            }
            if(message.trim() === ''&& FormData){
                alert('Please fillup the  before uploading.');
                return;
            }
            alert(`Form Submitted to walrus`);

            setMessage('');
        }

    return(
        <div style={{  textAlign:"center", margin:"20% 20%",}}>
            <button onClick={Connected ? signOut : SignIn} 
                style={{backgroundColor:"brown", color:"White",}}>
                {Connected? 'Sign Out':'Sign In'}
            </button>
            <br /><br />
            <form>
                <label>Name:- <input type="text" /> </label><br /><br />
                <label>Address:- <input type="text" /> </label><br /><br />
                <label>Phone:- <input type="text" /> </label><br /><br />
                <label>Email:- <input type="email" /> </label><br /><br />
            <textarea placeholder="Enter Message" value={message} onChange={(e) =>setMessage(e.target.value)}></textarea> <br />
            <button  type="reset" onClick={handleUpload} style={{backgroundColor:"black", color:"White"}}>Upload to walrus</button>
            </form>
        </div>
        
        
    )
}
export default SignIn
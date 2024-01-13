import { Outlet, Link } from "react-router-dom";


const Layout = ({signedin,  setSignedIn}) => {
  const logout = async ()=>{
    console.log("i ran :)")
    const response = await fetch(`/logout`,{
      method:"POST"
    })
    
    const data = await response.text();
    
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, 'text/html');
    const textContent = doc.body.textContent;
    console.log(textContent);
    
    if (textContent.includes("You need to enable JavaScript to run this app.")){
      setSignedIn(false)
      alert("logged out successfully");
    } else {
      alert("log out failed");
    }
    
  }

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Products">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          
          <li>
            {signedin ? <><button onClick={()=>logout()}>Sign out</button><p>logged in</p></> : <p>not logged in</p>}
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;
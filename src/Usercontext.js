import { Children, createContext,useState } from "react";

let UserContext = createContext();

// const userProvider=userContext.Provider;
// export {userProvider};

export const UserProvider = ({children})=>{
    const [items, setItems] = useState([]);
    //  let [user,setUser]=useState();
    // const[cartitems,setCartItems]=useState([]);
    // const [total,setTotal]=useState(0);

    return <UserContext.Provider value={{items,setItems}}>
        {children}
    </UserContext.Provider>
}

export default UserContext;
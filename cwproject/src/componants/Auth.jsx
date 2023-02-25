import { createContext, useState} from "react";
export let AuthContext = createContext();

export default function Auth({children}){
    let [authData,setAuthData] = useState({name:"",token:"", isAuth:false});
    let arr = JSON.parse(window.localStorage.getItem("signupdata")) || [];
    let [signupData,setSignup] = useState(arr)

    let loginUser = (name,token) =>{
        setAuthData({name:name,token:token,isAuth:true})
    }

    let logoutUser = () => {
        setAuthData({name:"",token:"",isAuth:false})
    }

    let signUp = (data) => {
        setSignup([...signupData,data])
    }
    window.localStorage.setItem("signupdata", JSON.stringify(signupData))
    return <AuthContext.Provider value={{signupData, authData, loginUser, logoutUser, signUp}}>
        {
            children
        }
    </AuthContext.Provider>
}
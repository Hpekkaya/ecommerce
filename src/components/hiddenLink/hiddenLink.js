
// Here, when the person logs in, login and logout components will be created that will show their name, myorders section and logout link in the header section and will restore them when they exit.

import { useSelector } from "react-redux";
import  { selectIsLoggedIn } from "../../redux/slice/authSlice"

export const ShowOnLogin =({children}) =>{
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(isLoggedIn) {
        return children
    } else return null
}

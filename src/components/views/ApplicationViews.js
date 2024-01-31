import { UserViews } from "./UserViews"


export const ApplicationViews = () => {

    const localActiveUser = localStorage.getItem("active_user")
    const activeUserObject = JSON.parse(localActiveUser)
       
        if (activeUserObject) {
            return <UserViews />
        }
}
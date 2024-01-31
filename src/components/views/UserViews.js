import { Outlet, Route, Routes } from "react-router-dom"
import { RestaurantList } from "../restaurants/RestaurantList"
import { MessageList } from "../messages/MessageList"
import { MessageEdit } from "../messages/MessageEdit"
import { MessageForm } from "../messages/MessageForm"
import { Reviews } from "../reviews/Reviews"
import { RequestList } from "../reviews/RequestList"
import { RequestForm } from "../reviews/RequestForm"
import { Comments } from "../comments/Comments"



export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1></h1>
                    <div></div>

                    <Outlet />
                </>
            }>
            <Route path="requests" element={<RequestList />} />
            <Route path="requestForm" element={<RequestForm />} />
            <Route path="restaurants" element={<RestaurantList />} />
            {/* <Route path="restaurants" element={ <ReviewList />} /> */}
            <Route path="review/:restaurantId" element={ <Reviews />} />
           
            

            <Route path="comments/:restaurantId" element={ <Comments />} />
            <Route path="messageForm" element={<MessageForm />} />
            <Route path="messages/:messageId/edit" element={<MessageEdit />}/>
            <Route path="messages" element={ <MessageList />} /> 
            </Route>
        </Routes>
    )
}
import { Outlet } from "react-router-dom"
import Header from "../Components/Header"
import JumboPreview from "../Components/JumboPreview"


export default function GuestLayout(){

return (
<>

<Header />
<JumboPreview />
<Outlet />

</>



)


}
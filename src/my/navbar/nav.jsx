import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'
import Window from '../windowpage/windowpage'
import SportPage from '../Sportspage/Sportpage'
import SlotBook from '../Slotbooking/Slotbooking'
import ContactUs from '../Contact/Contactarea'

export default function Navigation() {
    return (
        <div>
            <div>

                <BrowserRouter>
                    <div className='header'>
                        <nav class="navbar navbar-expand-md navbar-light">
                            <div class="container-fluid">
                                <button style={{backgroundColor:'whitesmoke'}} class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse show" id="navbarNavAltMarkup">
                                    <div class="navbar-nav mx-auto" style={{fontSize:'20px'}}>
                                        <a class="nav-link me-3" href="#"><Link className='link' to={"/"}>Home</Link></a>
                                        <a class="nav-link me-3" href="#"><Link className='link' to={"/sportsarea"}>Sports</Link></a>
                                        <a class="nav-link me-3" href="#"><Link className='link' to={"/slotbooking"}>Book Your Slot</Link></a>
                                        <a class="nav-link me-3" href='#'><Link className='link' to={"/contactarea"}>Contact Us</Link></a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <Routes>
                        <Route path='/' element={<Window />}></Route>
                        <Route path='/sportsarea' element={<SportPage />}></Route>
                        <Route path='/slotbooking' element={<SlotBook />}></Route>
                        <Route path='/contactarea' element={<ContactUs />}></Route>
                    </Routes>

                    <Outlet />
                </BrowserRouter>

            </div>
        </div>
    )
}
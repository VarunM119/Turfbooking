import "../Slotbooking/slotbooking.css"
export default function SlotBook() {
    return (

        <div>
            <div className="slot-book"></div>
            <form>
                <div class="row mb-2">
                    <label for="inputname" class="col-sm-2 col-form-label">Name</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputname" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputplace" class="col-sm-2 col-form-label">Place</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" id="inputplace" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputnumber" class="col-sm-2 col-form-label">Ph.no</label>
                    <div class="col-sm-10">
                        <input type="number" class="form-control" id="inputnumber" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputEmail" class="col-sm-2 col-form-label">Email</label>
                    <div class="col-sm-10">
                        <input type="email" class="form-control" id="inputEmail" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputstart" class="col-sm-2 col-form-label">Start-time</label>
                    <div class="col-sm-10">
                        <input type="time" class="form-control" id="inputstart" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputend" class="col-sm-2 col-form-label">End-time</label>
                    <div class="col-sm-10">
                        <input type="time" class="form-control" id="inputend" />
                    </div>
                </div>
                <div class="row mb-2">
                    <label for="inputdate" class="col-sm-2 col-form-label">Date</label>
                    <div class="col-sm-10">
                        <input type="date" class="form-control" id="inputdate" />
                    </div>
                </div>
                <span style={{ display: 'inline', marginRight: '20px' }}>Type of event</span>
                <div class="dropdown d-inline">
                    <button class="btn btn-primary dropdown-toggle text-dark" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                        Select
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <li><a class="dropdown-item" href="#">Cricket</a></li>
                        <li><a class="dropdown-item" href="#">Football</a></li>
                        <li><a class="dropdown-item" href="#">Volleyball</a></li>
                        <li><a class="dropdown-item" href="#">Badminton</a></li>
                    </ul>
                </div>
                <div className="mt-2">
                    <button type="submit" class="btn" id="submit-btn">Submit...</button>
                </div>
            </form>
        </div>

    )
}
// {/* <form class="book-form">
//                 <p>Name:<input type="text" style={{ marginLeft: '60px' }} required></input></p>
//                 <p>Place:<input type="text" style={{ marginLeft: '65px' }} required></input></p>
//                 <p>Mobile:<input type="phno" style={{ marginLeft: '53px' }} required></input></p>
//                 <p>Email:<input type="email" style={{ marginLeft: '65px' }} required></input></p>
//                 <p>Start Time: <input type="time" style={{ marginLeft: '40px' }} required></input></p>
//                 <p>End Time:<input type="time" style={{ marginLeft: '60px' }} required></input></p>
//                 <p>Date:<input type="date" style={{ marginLeft: '90px' }} required></input></p>
//                 <p>Type of sport:
//                     <select style={{ marginLeft: '10px' }}>
//                         <option>Event</option>
//                         <option>Cricket</option>
//                         <option>Football</option>
//                         <option>Volleyball</option>
//                         <option>Badminton</option>
//                     </select>
//                 </p>
//                 <br></br>
//                 <button className="btn" type="submit">Submit....</button>
//             </form> */}
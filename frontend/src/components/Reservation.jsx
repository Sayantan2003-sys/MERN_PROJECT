import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";


const Reservation = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [phone, setPhone] = useState(0);
    const navigate = useNavigate();

    const handleReservation = async (e) => {
        e.preventDefault();
        const data = { firstName, lastName, email, date, time, phone }

        try{
            const res = await fetch("http://localhost:5000/api/reservations", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data)
            });
            if (!res.ok) throw new Error("Failed to Submit");
            toast.success("Reservation Submitted!");
            setFirstName("");
            setLastName("");
            setEmail("");
            setDate("");
            setTime("");
            setPhone(0);
            navigate("/Success");
        } catch(err) {
            toast.error("Error: " + err.message);
        }
    };


    return (
        <section className="reservation" id="reservation">
            <div className="container">
                <div className="banner">
                    <img src="/reservation.png" alt="res" />
                </div>
                <div className="banner">
                    <div className="reservation_form_box">
                        <h1>MAKE A RESERVATION</h1>
                        <p>For Further Question, Please Call</p>
                        <form>
                            <div>
                                <input type="text"
                                    placeholder="First Name"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                                <input type="text"
                                    placeholder="Last Name"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="date"
                                    placeholder="Date"
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                />
                                <input type="time"
                                    placeholder="Time"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                />
                            </div>
                            <div>
                                <input type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input type="number"
                                    placeholder="Phone"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />
                            </div>
                            <button type="submit" onClick={handleReservation}>RESERVE NOW{" "}
                                <span><HiOutlineArrowNarrowRight /></span></button>

                        </form>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Reservation
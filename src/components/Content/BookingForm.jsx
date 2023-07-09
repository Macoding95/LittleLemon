import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function BookingForm() {

  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(new Date(date).getTime());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };
  const submitAPI = function (formData) {
    return true;
  };

  const [form, setForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    seating: '',
    occasion: ''
  });

  const [availableTimes, setAvailableTimes] = useState([]);

  const [popup, updatePopup] = useState(false);

  const fetchingDate = async (date) => {
    try {
      const dates = fetchAPI(date);
      setAvailableTimes(dates)
    } catch (error) {
      console.error(error)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAvailableTimes(availableTimes.filter(time => time.time !== form.time));
    submitAPI(form) ? updatePopup(true) : updatePopup(false);
  };

  const showPopup = () => {
    const handleBtnClick = () => {
      updatePopup(false);
    };
    return (
      <>
        <div className="popup" role="popup">
          <div className="popup__bg"></div>
          <div className="popup__container">
            <h2>¡Reservation Confirmed!</h2>
            <p>We will send you the information about the reservation</p>
            <a onClick={handleBtnClick}>Take me home</a>
          </div>
        </div>
      </>
    )
  }

  useEffect(() => {
    fetchingDate(form.date);
  }, [form.date]);

  return (
    <>
      {popup && showPopup()}
      <form className="reserveform" onSubmit={handleSubmit}>
        <div className="item">
          <label htmlFor="name">Full name</label>
          <input
            type="text"
            placeholder="Write your full name..."
            id="name"
            autoComplete="off"
            onChange={e => setForm({ ...form, name: e.target.value.toLocaleLowerCase() })} />
        </div>
        <div className="item">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder="Write your e-mail..."
            id="email"
            onChange={e => setForm({ ...form, email: e.target.value.toLocaleLowerCase() })} />
        </div>
        <div className="item">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            placeholder=""
            onChange={e => setForm({ ...form, date: e.target.value })} />
        </div>
        <div className="item">
          <label htmlFor="time">Time</label>
          <select
            id="time"
            onChange={e => setForm({ ...form, time: e.target.value })}>
            <option value="">Select an occasion</option>
            {availableTimes.map(time => <option value={time} key={time}>{time}</option>)}
          </select>
        </div>
        <div className="item">
          <label htmlFor="guests">Guests</label>
          <input
            type="number"
            placeholder="1"
            min={1}
            max={10}
            id="guests"
            onChange={e => setForm({ ...form, guests: e.target.value })} />
        </div>
        <div className="item">
          <label htmlFor="seating">Seating preferences</label>
          <select
            id="seating"
            onChange={e => setForm({ ...form, seating: e.target.value })}>
            <option value="">None</option>
            <option value="indoors">Indoors</option>
            <option value="outdoors">Outdoors</option>
          </select>
        </div>
        <div className="item">
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" onChange={e => setForm({ ...form, occasion: e.target.value })}>
            <option value="">Select an occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
        </div>
        <input type="submit" value="Make a reservation" />
      </form>
    </>
  )
}

export default BookingForm;
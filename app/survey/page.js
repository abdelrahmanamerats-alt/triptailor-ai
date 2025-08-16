'use client';

import { useState } from 'react';

export default function Survey() {
  const [form, setForm] = useState({
    city: '',
    dates: '',
    weather: '',
    hotel: '',
    flight: '',
    group: '',
    interests: ''
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  return (
    <main style={{fontFamily: 'sans-serif', padding: '2rem'}}>
      <h1 style={{fontSize: '2rem', fontWeight: 'bold'}}>Plan Your Luxury Trip</h1>
      <form style={{display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: '1.5rem'}}>
        <input type="text" name="city" placeholder="Departure City" value={form.city} onChange={handleChange} />
        <input type="text" name="dates" placeholder="Travel Dates" value={form.dates} onChange={handleChange} />
        <input type="text" name="weather" placeholder="Preferred Weather" value={form.weather} onChange={handleChange} />
        <input type="text" name="hotel" placeholder="Hotel Standard (4,5 stars)" value={form.hotel} onChange={handleChange} />
        <input type="text" name="flight" placeholder="Flight Class" value={form.flight} onChange={handleChange} />
        <input type="text" name="group" placeholder="Group Size" value={form.group} onChange={handleChange} />
        <input type="text" name="interests" placeholder="Special Interests" value={form.interests} onChange={handleChange} />
        <button type="button" style={{padding: '0.75rem', backgroundColor: 'black', color: 'white', borderRadius: '6px'}}>Generate Trip Plan</button>
      </form>
    </main>
  );
}
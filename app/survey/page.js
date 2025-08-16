'use client';
import { useState } from 'react';

export default function Survey() {
  const [form, setForm] = useState({
    city: '', dates: '', weather: '', hotel: '', flight: '', group: '', interests: ''
  });

  function handleChange(e) {
    setForm({...form, [e.target.name]: e.target.value});
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Survey submitted! We'll generate your trip plan soon.");
  }

  return (
    <main style={{padding: '2rem', fontFamily: 'sans-serif'}}>
      <h1>Travel Survey</h1>
      <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px'}}>
        <input name="city" placeholder="Departure City" value={form.city} onChange={handleChange} />
        <input name="dates" placeholder="Travel Dates" value={form.dates} onChange={handleChange} />
        <input name="weather" placeholder="Weather Preference" value={form.weather} onChange={handleChange} />
        <input name="hotel" placeholder="Hotel Standard" value={form.hotel} onChange={handleChange} />
        <input name="flight" placeholder="Flight Class" value={form.flight} onChange={handleChange} />
        <input name="group" placeholder="Group Size" value={form.group} onChange={handleChange} />
        <input name="interests" placeholder="Special Interests" value={form.interests} onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

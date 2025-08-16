export default function Home() {
  return (
    <main style={{fontFamily: 'sans-serif', textAlign: 'center', padding: '4rem'}}>
      <h1 style={{fontSize: '3rem', fontWeight: 'bold'}}>TripTailor AI</h1>
      <p style={{marginTop: '1rem', fontSize: '1.25rem'}}>Your Luxury Smart Trip Matchmaker</p>
      <a href="/survey" style={{display: 'inline-block', marginTop: '2rem', padding: '1rem 2rem', backgroundColor: 'black', color: 'white', borderRadius: '8px', textDecoration: 'none'}}>Start Planning</a>
    </main>
  )
}
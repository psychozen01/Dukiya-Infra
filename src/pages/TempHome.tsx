// Temporary component for unpaid project
// This will render nothing on the homepage until payment is received
export default function TempHome() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h1 style={{ fontSize: '24px', marginBottom: '10px', color: '#b4956a' }}></h1>
        <p style={{ fontSize: '16px', color: '#666' }}>This site is temporarily unavailable.</p>
      </div>
    </div>
  );
}
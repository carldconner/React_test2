import './App.css'

function About() {
  return (
    <section id="center">
      <div>
        <h5>About Page</h5>
        <p>
          Welcome to the About Page.
        </p>
        
        <table style={{ borderCollapse: 'collapse', width: '100%', marginTop: '20px' }}>
          <thead>
            <tr>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>First Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Last Name</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Age</th>
              <th style={{ border: '1px solid #ddd', padding: '10px' }}>Favorite Food</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Carl</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Conner</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>57</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Chinese</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Sherri</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Conner</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>56</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Italian</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Sylvia</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Conner</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>21</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Thai</td>
            </tr>
            <tr>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>David</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>Conner</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>19</td>
              <td style={{ border: '1px solid #ddd', padding: '10px' }}>American</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default About
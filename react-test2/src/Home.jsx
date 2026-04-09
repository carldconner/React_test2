import { useState } from 'react'
import './App.css'

function Home() {
  const [inputValue, setInputValue] = useState('')
  const [submittedValue, setSubmittedValue] = useState('')

  const buttonStyle = {
    marginRight: '1rem',
    padding: '0.65rem 1rem',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    fontSize: '1rem',
  }

  const handleInputChange = (event) => {
    const nextValue = event.target.value
    if (/^\d*\.?\d*$/.test(nextValue)) {
      setInputValue(nextValue)
    }
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!inputValue) {
      setSubmittedValue('Please enter a BTC amount.')
      return
    }

    setSubmittedValue('Loading current BTC price...')

    try {
      const response = await fetch(
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'
      )
      const data = await response.json()
      const priceUsd = data.bitcoin?.usd
      if (typeof priceUsd !== 'number') {
        throw new Error('Unable to read BTC price from API response.')
      }

      const totalUsd = Number(inputValue) * priceUsd
      setSubmittedValue(
        `${inputValue} BTC = $${totalUsd.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}`
      )
    } catch (error) {
      console.error(error)
      setSubmittedValue('Could not fetch BTC price. Try again later.')
    }
  }

  return (
    <>
      <section id="center">
        <div>
          <h5>Home Page</h5>
          <p>
            Welcome to the Home Page.
          </p>
        </div>
      </section>

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            width: '100%',
            maxWidth: '400px',
            padding: '1.25rem',
            borderRadius: '1rem',
            backgroundColor: '#ffffff',
            boxShadow: '0 16px 40px rgba(15, 23, 42, 0.08)',
          }}
        >
          <label style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '0.5rem', fontWeight: 600 }}>
            BTC
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              inputMode="decimal"
              pattern="^\d*\.?\d*$"
              required
              style={{
                padding: '0.9rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid #cbd5e1',
                fontSize: '1rem',
              }}
            />
          </label>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button type="submit" style={{ ...buttonStyle, marginRight: 0 }}>
              Submit
            </button>
            <button
              type="button"
              style={{
                ...buttonStyle,
                backgroundColor: '#475569',
              }}
              onClick={() => {
                setInputValue('')
                setSubmittedValue('')
              }}
            >
              Clear
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'left', gap: '0.5rem' }}>
            <label style={{ fontWeight: 600 }}>Submitted Value</label>
            <input
              type="text"
              value={submittedValue}
              readOnly
              style={{
                padding: '0.9rem 1rem',
                borderRadius: '0.75rem',
                border: '1px solid #cbd5e1',
                backgroundColor: '#f8fafc',
                fontSize: '1rem',
              }}
            />
          </div>
        </form>
      </div>
    </>
  )
}

export default Home
import {Component} from 'react'

import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {country: countryAndCapitalsList[0].country}

  printCountry = event => {
    const capital = event.target.value
    let country
    switch (capital) {
      case 'NEW_DELHI': {
        country = 'India'
        break
      }
      case 'LONDON': {
        country = 'United Kingdom'
        break
      }
      case 'PARIS': {
        country = 'France'
        break
      }
      case 'KATHMANDU': {
        country = 'Nepal'
        break
      }
      case 'HELSINKI': {
        country = 'Finland'
        break
      }
      default: {
        country = 'India'
      }
    }
    this.setState({country})
  }

  render() {
    const {country} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading">Countries and Capitals</h1>
          <div className="rowContainer">
            <select onChange={this.printCountry} name="capitals" id="capitals">
              <option id="NEW_DELHI" value="NEW_DELHI">
                New Delhi
              </option>
              <option id="LONDON" value="LONDON">
                London
              </option>
              <option id="PARIS" value="PARIS">
                Paris
              </option>
              <option id="KATHMANDU" value="KATHMANDU">
                Kathmandu
              </option>
              <option id="HELSINKI" value="HELSINKI">
                Helsinki
              </option>
            </select>
            <p className="parastyle">is capital of which country?</p>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals

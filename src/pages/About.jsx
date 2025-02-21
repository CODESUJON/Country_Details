import React from 'react'
import country from "../api/countrydata.json"

function About() {
  return (
    <section className='section-about container'>
      <h2 className="container-title">
        Here are the Interesting Facts
        <br />
        we’re proud of
      </h2>
      <div className='gradient-cards'>
        {
          country.map((curcountry) => {
            const {id,countryName,capital,population,interestingFact}=curcountry
            return (
              <div className='card' key={id}>
                <div className='container-card bg-green-box'>
                  <p className='card-title'>{countryName}</p>
                  <p>
                    <span className="card-description">Capital:</span>
                    {capital}

                  </p>
                  <p>
                    <span className="card-description">Population:</span>
                    {population}

                  </p>
                  <p>
                    <span className="card-description">Interesting Fact:</span>
                    {interestingFact.length>40 ? interestingFact.slice(0,40) +"..." :interestingFact}

                  </p>

                </div>

              </div>

            )
          })
        }


      </div>


    </section>
  )
}

export default About
import React from 'react'
import './styles/app.scss'

function App() {

  return (
    <main className='app' role='main'>
      <section className='center-content'>
        <div className='intro '>
          <span>Reliable, efficient delivery</span>
            <h1>Powered by Technology</h1>
             <p>Our Artificial Intelligence powered tools use millions of project data 
                    points to ensure that your project is successful 
            </p>
        </div>
      </section>

      <section className='cards'>
        <div className='left'>
        <div className='card card_one'>
          <h2>Supervisor </h2>
          <p>Monitors activity to identify project roadblocks </p>
          <img src='/images/icon-supervisor.svg' alt=' eyeglass tool '/>
        </div>
      </div>
  
        <div className='card card_two top'>
          <h2>Team Builder</h2>
          <p>Scans our talent network to create the optimal team for your project </p>
          <img src='/images/icon-team-builder.svg' alt='web page with a house' />
        </div>

        <div className='card card_three bottom'>
          <h2>Karma </h2>
          <p>Regularly evaluates our talent to ensure quality </p>
          <img src='/images/icon-karma.svg' alt=' yellow light bulb' />
        </div>

      <div className='right'>
        <div className='card card_four '>
          <h2>Calculator </h2>
          <p>Uses data from past projects to provide better delivery estimates </p>
          <img src='/images/icon-calculator.svg' alt='web calculator' /> </div>
      </div>
      </section>
    </main>
  )
}

export default App

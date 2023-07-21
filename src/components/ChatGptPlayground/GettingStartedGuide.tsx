import React from 'react'

const GetStartedGuide = () => {
    return (
      <div className='get-started'>
          <h3>Get Started</h3>
          <p>ChatGPT is an incredibly advanced Large Language Model (LLM) auto-complete engine. You can use this playground to explore it’s functionality. You can try asking it to create components, services, sql queries and more. It can help write user-stories, design architectures, create documentation and tests. </p>
          <p>Try playing with the settings and see how temperature (randomness) and max tokens (max length of input + output) affect the output. </p>
          <p><b>Keep in mind</b> </p>
          <p>More descriptive prompts will generate better results, i.e. specify the language the you want the model to respond with. </p>
          <p>Larger prompts can take significantly more time. </p>
      </div>
    )
  }

export default GetStartedGuide
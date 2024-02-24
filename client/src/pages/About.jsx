import React from 'react'

const About = () => {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-3xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            Welcome to the Electrical Forum!
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            At the Electrical Forum, we're dedicated to fostering a vibrant
             community of electrical professionals, enthusiasts, and learners.
              Whether you're an experienced electrician, a budding engineer,
               a passionate hobbyist, or simply someone with a curious mind
                eager to explore the world of electricity, you've come to 
                the right place.
            </p>

            <p>
            Our forum serves as a hub for discussions, knowledge sharing,
             troubleshooting, and collaboration within the broad field of electrical 
             engineering and related disciplines. Here, you'll find a wealth
              of resources, insights, and support from fellow members who share
               your passion for all things electric.
            </p>

            
          </div>
        </div>

        <div>
          <h1 className='text-3xl font font-semibold text-center my-4'>
              What We offer
             </h1>
             <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            Our forum covers a wide range of electrical topics, spanning from
             fundamental principles such as Ohm's Law and circuit analysis to
              advanced concepts like power systems, renewable energy, and automation.
               Whether you're interested in electronics, power distribution, control 
               systems, or emerging technologies, you'll find plenty of engaging
                discussions to participate in.
            </p>

            <p>
            Whether you're a seasoned professional looking to stay updated with the latest industry
             trends or a student seeking guidance for your academic pursuits, our forum provides
              valuable resources to aid in your professional development. From career advice
               and technical tutorials to industry news and job opportunities, we strive to
                empower our members to excel in their respective fields.
            </p>

            <p>
            Got a puzzling electrical problem that's been keeping you up at night? Our forum is 
            the perfect place to seek assistance. Our community of experts is always ready to
             lend a helping hand, offering practical solutions, troubleshooting tips, and 
             insightful advice to tackle even the most challenging issues.
            </p>
          </div>
        </div>


        <div>
          <h1 className='text-3xl font font-semibold text-center my-4'>
              Our Commitment
             </h1>
             <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
            We strive to maintain high standards of content quality and relevance
             within our forum. Our moderators work diligently to ensure that discussions
              remain constructive, informative, and respectful at all times.
            </p>

            <p>
            We welcome members from all walks of life, irrespective of their backgrounds, 
            identities, or affiliations. Our forum is a safe and inclusive space where
             everyone is encouraged to participate and contribute freely, without fear of
              discrimination or prejudice.
            </p>
          </div>
        </div>


      </div>
    </div>
  )
}

export default About
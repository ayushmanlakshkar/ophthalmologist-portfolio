import React from 'react'

function ContactUs() {


  return (
    <div className=' px-5 pt-5 pb-4 md:px-24 md:pt-20 md:pb-10' id='contactUs'>
      <div className=' flex flex-col w-full lg:flex-row'>
        <div className='contactUsDetails w-full py-7 px-6 flex flex-col gap-5 lg:w-2/5 lg:h-auto'>
          <div className='text-left font-extrabold text-2xl	'>
            Dr. Vishal Gupta
          </div>
          <div className='text-left text-base'>
            <div className='font-bold'>
              Phone
            </div>
            +919810690986
          </div>
          <div className='text-left text-base'>
            <div className='font-bold'>Email</div>
            drvgupta18@yahoo.co.in
          </div>
          <div className='text-left text-base'>
            <div className='font-bold'>Address</div>
            Foresight eye clinic 106 Rps flats sheikh sarai phase 1 Malviya nagar New delhi- 110017 Opposite- Apeejay school
          </div>
        </div>

        {/* Import a Map component using Google map api 
            by writing command on the terminal  
            'npm i @react-google-maps/api'.

            You can find the documentation on 
            https://www.npmjs.com/package/@react-google-maps/api 

            Using @react-google maps requires a personal google maps API Key the process to get it can be found here :
            https://developers.google.com/maps/documentation/embed/get-api-key

            There are no costs to use Google Maps API but you have to verify your card details to get your API Key.  */}
        <div className='map w-full lg:w-3/5 bg-black'>
        {/* Paste ur map component here with 100% width and height */}
        </div>
      </div>

    </div>
  )
}

export default ContactUs

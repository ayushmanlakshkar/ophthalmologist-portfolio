import React from 'react'
import GoogleMapReact from 'google-map-react';

function ContactUs() {

  const latitude = 28.5298;
  const longitude = 77.2175;
  const AnyReactComponent = ({ text }) => (
    <div style={{
      color: 'white', 
      background: 'grey',
      padding: '15px 10px',
      display: 'inline-flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      transform: 'translate(-50%, -50%)'
    }}>
      {text}
    </div>
  );  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };
  return (
    <div className=' px-5 py-5 md:px-24 md:py-20' id='contactUs'>
      <div className=' flex flex-col w-full lg:flex-row'>
        <div className='h-80 contactUsDetails w-full py-7 px-6 flex flex-col gap-5 lg:w-2/5 lg:h-auto'>
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
        <div className='map w-full lg:w-3/5 bg-black'>
        <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent
          lat={59.955413}
          lng={30.337844}
          text="HERE"
        />
      </GoogleMapReact>
        </div>
      </div>

    </div>
  )
}

export default ContactUs

import React from 'react';

function AboutMe() {
    return (
    <div className='w-full aboutContainer'>
        <div className='backgroundImg'></div>
        <div className='aboutMe pt-40 pb-16 flex flex-col lg:flex-row px-5 lg:pb-32 lg:px-24 gap-8' id='aboutMe'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <div className='w-52'>
                    <img src='./images/profile.png' className='w-full' alt='Profile' />
                </div>
                <div className='doctorTitle w-64 py-3 px-7 rounded-full text-xl'>
                    Book Appointment for<br />
                    Dr. Vishal Gupta
                </div>
            </div>
            <div className='flex flex-col justify-center mx-5'>
                <div className='introHeading text-3xl'>
                    Let Your Eyes Tell Their Story. We'll Help You See It Clearly.
                </div>
                <div className='doctorIntro my-4 pr-5 text-xl text-center'>
                    I completed my MBBS with honors at Jammu Medical College, followed by postgraduation at AIIMS in Delhi. Subsequently, I undertook a three-year senior residency at AIIMS specializing in my field. With over 25 years of experience since obtaining my MD, my expertise lies in anterior segment surgery, encompassing advanced techniques such as Phacoemulsification and MICS. Additionally, I am proficient in refractive surgery, glaucoma surgery, and managing medical retina conditions such as diabetic retinopathy and macular degeneration.
                </div>
            </div>
        </div>
    </div>

    );
}

export default AboutMe;

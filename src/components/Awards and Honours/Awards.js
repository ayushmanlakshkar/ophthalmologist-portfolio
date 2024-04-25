import React from 'react'

function Awards() {
    const awards = [
        // "Received TECHNICAL SCHOLARSHIP (Govt. of India) during M.B.B.S. (1987 to 1992)",
        "2nd POSITION in IInd Prof. M.B.B.S. at Jammu University.",
        "Ist POSITION in Final Prof. M.B.B.S. at Jammu University.",
        "DISTINCTION in Pharmacology in IInd Prof. M.B.B.S.",
        "DISTINCTION in Pathology in IInd Prof. M.B.B.S.",
        "DISTINCTION in Microbiology in IInd Prof. M.B.B.S.",
        "2nd POSITION in Ophthalmology in Pre final M.B.B.S. at Jammu University.",
        "Ist POSITION in Surgery in Final Prof. M.B.B.S. at Jammu University.",
        "Ist POSITION in Gynae. & Obstetrics in Final Prof. M.B.B.S. in Jammu University.",
        "2nd  POSITION in Medicine in Final Prof. M.B.B.S. at Jammu University.",
        "ALL INDIA 111 RANK in Combined Medical Officers Examinations conducted by UPSC in year 1994.",
        "IST POSITION in All J&K Post Graduate Entrance Examination in December-1995.",
        "ALL INDIA 12TH RANK at AIIMS Post Graduate Entrance Examination in December-1995.",
        "IST POSITION in M.D.(Ophthalmology) at AIIMS -N.Delhi in May-1999.",
        "Awarded “BEST RESIDENT AWARD” at Dr. R.P. Center for Ophthalmic Sciences, AIIMS-N.Delhi in Year-2001.",
        "“Dr. BODH RAJ SABHARWAL GOLD MEDAL” for being the best Post Graduate student in Ophthalmology for Year-1999 at AIIMS-N.Delhi"
    ]

    return (
        <div>
            <div>
                <div className='backgroundImg'></div>
            <div className='experienceHeading pt-48 pb-24 font-extrabold text-4xl'>
                Awards and Honours
            </div>
            </div>
            <div className='flex flex-wrap flex-row pt-20 px-5 md:px-10 justify-center mb-24 bg-white'>
                {awards.map((award, index) => (
                    <div key={index} className='awardCard p-5 text-left text-pretty font-semibold'>
                        {award}
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Awards

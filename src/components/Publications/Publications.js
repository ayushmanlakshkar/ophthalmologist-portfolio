import React from 'react'

function Publications() {

    const data = {
        peer_reviewed: [
            "Vajpayee RB, Sharma N, Dada T, Gupta V, Kumar A, Dada VK. Management of posterior capsule tears. Surv. Ophthalmol 2001; 45 : 473-88.",
            "Vanathi M, Vajpayee RB, Tandon R, Titiyal JS, Gupta V. Crater-and-chop technique for phacoemulsification of hard cataracts. J Cataract Refract Surg 2001; 27 : 659-61.",
            "Pushker N, Dada T, Vajpayee RB, Gupta V, Aggarwal T, Titiyal JS. Neurotrophic keratopathy. CLAO J 2001; 27 : 100-7.",
            "Gupta V, Dada T, Pangtey M, Vajpayee RB. Indications for lamellar keratoplasty in India. Cornea 2001; 20 : 398-9.",
            "Gupta V, Dada T, Vajpayee RB, Sharma N, Dada VK. Polymicrobial keratitis after laser in situ keratomileusis. J Refract Surg. 2001; 17: 147-8.",
            "Dada T, Vajpayee RB, Gupta V, Sharma N, Dada VK. Microkeratome-induced reduction of astigmatism after penetrating keratoplasty. Am J Ophthalmol 2001; 131: 507-8.",
            "Sihota R, Gupta V, Agarwal HC, Pandey RM, Deepak KK. Comparison of symptomatic and asymptomatic, chronic, primary angle-clos glaucoma, open angle glaucoma and controls. J Glaucoma 2000; 9: 208-13.",
            "Bajaj MS, Kedar S, Sethi A and Gupta V. Traumatic globe luxation with optic nerve transaction. Orbit 2000; 19: 165-170.",
            "Sharma N, Gupta V, Vajpayee RB. Trypan-Blue-Assisted Posterior Capsule Plaque Removal. Jcataract & Refact Surg Volume 28 June2002:916-917.",
            "Tandon R, Vajpayee R B, Gupta V, Vajpayee M etal. Polymicrobial Keratitis in an HIV-Positive patient. Indian J Ophthalmol 2003; 51: 87-89.",
            "Sihota R, Sood A, Gupta V, Gupta V, Dada T, Agarwal H C. A prospective longterm study of Primary Chronic Angle Closure glaucoma. Acta Ophthalmol 2004 Apr; 82 (2) 209-13.",
            "Vajpayee R B,gupta V,Sharma N. PRK for epithelial ingrorth in buttonhole after lasik.Cornea 2003;22(3):259-261",
            "Sharma N,Gupta V,Vanathi M,Aggarwal T,Vajpayee R B and Satpahy G.Microbial keratitis following lamellar keratitis. Cornea 2004;23(5):472-478"

        ],
        book_chapters: [
            "Gupta V, Tandon R, Vajpayee RB. Disorders of conjunctiva. In : Agarwal S et al, editors. Text Book of Ophthalmology . New Delhi : Jaypee Brothers Medical Publishers Ltd; 2002. Vol 2, pp 838-888.",
            "Sharma N, Vajpayee RB, Gupta V, Dada T. Fungal Keratitis. In : Agarwal S et al, editors. Text Book of Ophthalmology . New Delhi : Jaypee Brothers Medical Publishers Ltd; 2002. Vol 2, pp 1032-1037.",
            "Vajpayee RB, Gupta V, Tandon R. Herpes simplex keratitis. In : Agarwal S et al, editors. Text Book of Ophthalmology . New Delhi : Jaypee Brothers Medical Publishers Ltd; 2002. Vol 2, pp 1038-1046.",
            "Sharma N, Vajpayee RB, Gupta V, Dada T. Corneal degenerations. In : Agarwal S et al, editors. Text Book of Ophthalmology . New Delhi : Jaypee Brothers Medical Publishers Ltd; 2002. Vol 2, pp 1079-1088.",
            "Gupta V, Ray M, Ahuja R. Corneal Grafting Surgery: Historical Aspects. In: Vajpayee RB, Editor. Corneal Transplantation. New Delhi; Jaypee Brothers Medical Publishers Ltd, 2002, Ist Ed. Pp 3-5.",
            "Gupta V, Vajpayee RB, Ahuja R, Sharma N. Surgical Instruments. In: Vajpayee RB, Editor. Corneal Transplantation. New Delhi; Jaypee Brothers Medical Publishers Ltd, 2002, Ist Ed. Pp 45-53.",
            "Vajpayee RB, Ray M, Gupta V, Taylor HR. Complications of Penetrating keratoplasty. In: Vajpayee RB, Editor. Corneal Transplantation. New Delhi; Jaypee Brothers Medical Publishers Ltd, 2002, Ist Ed. Pp 93-115.",
            "Khokhar S, Pangtey MS, Gupta V. Penetrating keratoplasty for aphakic and pseudophakic bullous keratopathies and IOL exchange. In: Vajpayee RB, Editor. Corneal Transplantation. New Delhi; Jaypee Brothers Medical Publishers Ltd, 2002, Ist Ed. Pp 185-191.",
            "Gupta V,Vajpayee RB,Dada T.Management of white cataract.In;cataract surgery.by Keiki Mehta"
        ],
        posters: [
            "Vajpayee RB, Ray M, Tandon R, Sethi A, Titiyal JS, Gupta V. Oversized corneal grafts for iridocorneal adhesions. Poster presented at annual meeting of American Academy of Ophthalmology-2000.",
            "Sharma N, Gupta V, Vajpayee RB .Microbial Keratitis in Lamellar Keratitis. Poster presented at International Congress Of Ophthalmology -2002 held at Sydney, Australia.",
            "Gen Teal study group. Efficacy and Safety of Gen Teal Gel in the Treatment of Dry Eye in Indian Patients: An Interim (4 weeks) Analysis. Poster presented at APAO 2006. Abstract ID: P2319",
        ]
    }
    return (
        <div>
            <div>
                <div className='backgroundImg'></div>
                <div className='experienceHeading pt-48 font-extrabold text-4xl pb-24'>
                    Publications
                </div>
            </div>
            <div className='flex flex-col justify-center items-center bg-white'>
                <div className='my-5'>
                    <div className='font-bold text-3xl mb-3'>
                        Peer Reviewed
                    </div>
                    <div className='px-5 md:px-20'>
                        {data.peer_reviewed.map((item, index) => (
                            <div className='publicationCard w-full text-left text-pretty py-5 px-5 font-medium my-6' key={index}>{item}</div>
                        ))}
                    </div>
                </div>
                <div className='my-5'>
                    <div className='font-bold text-3xl mb-3'>
                        Book Chapters                    </div>
                    <div className='px-5 md:px-20'>
                        {data.book_chapters.map((item, index) => (
                            <div className='publicationCard w-full text-left text-pretty py-5 px-5 font-medium my-6' key={index}>{item}</div>
                        ))}
                    </div>
                </div>

                <div className='my-5'>
                    <div className='font-bold text-3xl mb-3'>
                        Posters
                    </div>
                    <div className='px-5 md:px-20'>
                        {data.posters.map((item, index) => (
                            <div className='publicationCard w-full text-left text-pretty py-5 px-5 font-medium my-6' key={index}>{item}</div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Publications


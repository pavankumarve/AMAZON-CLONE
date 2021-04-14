import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className='home'>
            <div className='home_container'>
                <img className='home_image' src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt='' />
                <div className='home_row'>
                    <Product
                        id='12321341'
                        title='Volleyball'
                        price={29.99}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLiT-2QXpuHVMBCtUEbB6i7xQtfLPWkBX72w&usqp=CAU'
                        rating={5} />
                     <Product
                        id='49538094'
                        title='Mixer'
                        price={239.0}
                        image='data:image/jpeg;base64,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'
                        rating={4} />
                    
                </div>

                <div className='home_row'>
                <Product
                        id='4903850'
                        title='realme'
                        price={199.99}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCgI0awkq59R55G8-mdW08LI2Y6jHjFlfvA&usqp=CAU'
                        rating={3} />
                     <Product
                        id='23445930'
                        title='MRF'
                        price={98.99}
                        image='https://ethlits.com/media/catalog/product/cache/1/thumbnail/4f9502202b77059316180a23e4857517/m/r/mrf_virat_kohli_vk18_legend_edition_english_willow_cricket_bat_size_sh_ethlits.com_1_.jpg'
                        rating={5} />
                     <Product
                        id='3254354345'
                        title='Yonex'
                        price={98.99}
                        image='https://static.sportzbusiness.com/uploads/2019/05/Yonex-Badminton.jpg'
                        rating={5} />

                </div><div className='home_row'>
                <Product
                        id='98829332'
                        title='Samsung'
                        price={1094.98}
                        image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYc2lSFekIiL7EHrT7rYXCZRqGZofVgsGEwg&usqp=CAU'
                        rating={4} />
                </div>

            </div>
        </div>

    )
}
export default Home
import React from 'react';
//images
import icon1 from '../../public/assets/images/mailicon.png';
import icon2 from '../../public/assets/images/facebookicon.png';
import icon3 from '../../public/assets/images/instagramicon.png';

const Header = () => {
    return(
        <div className={'h-screen w-14 m-0 p-0 bg-black'}>
            <div className={'flex flex-col items-center justify-end h-full'}>
                <img src={icon1} className={'py-3'}/>
                <img src={icon2} className={'py-3'}/>
                <img src={icon3} className={'py-3'}/>
            </div>
        </div>
    )
}

export default Header;
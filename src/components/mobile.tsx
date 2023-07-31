import logo from '../assets/logo.png';
import { BsBarChartSteps } from 'react-icons/bs'



type MobileProps = {
    style?: string
}


export const Mobile = ({ style }: MobileProps) => {

    const icon = <BsBarChartSteps />;

    return (
        <section className={`px-10 text-center ${style}`}>
            <div className=' flex justify-center '>
                <img
                    src={logo}
                    alt=""
                    className='mt-20 w-60 h-auto'
                />
            </div>

            <div className='w-full text-center mt-20'>
                <h1 className='font-bold text-5xl flex justify-center items-center'>Aw shucks! <span className='ml-3'>{icon}</span></h1>
                <p className='mt-3 font-light'>Your TEDx logo is a big part of your event! For the best experience in creating it,
                    please open this page on a computer or larger screen. Thanks!</p>
            </div>
        </section>
    )
}

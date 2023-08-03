import logo from '../assets/logo.png';
import mouse from '../assets/mouse.png';
import { BsArrowLeft, BsBarChartSteps } from 'react-icons/bs'
import tedx1 from '../assets/carousel/tedx1.jpg'
import tedx2 from '../assets/carousel/tedx2.jpg'
import tedx3 from '../assets/carousel/tedx3.jpg'
import tedx4 from '../assets/carousel/tedx4.jpg'
import { useEffect, useState } from 'react';



type LargeProps = {
    style?: string
}



export const Large = ({ style }: LargeProps) => {

    const iy = <b className='font-bold'>Women</b>
    const i = <h1 className='text-6xl font-thin opacity-5'>Sydney {iy}</h1>
    // const ib = <h1 className='text-6xl font-thin opacity-5'>Grand Rapids {iy}</h1>
    // const ic = <h1 className='text-6xl font-thin opacity-5'>international School of Hyderabed {iy}</h1>
    const id = <h1 className='text-6xl font-thin opacity-5'>Secretaria De Education Del Estado De .Zacatecas {iy}</h1>


    const tedxArray = [tedx1, tedx2, tedx3, tedx4];

    const [b, setB] = useState(tedx1)
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex(prevIndex => (prevIndex + 1) % tedxArray.length)
            console.log(tedxArray.length)
        }, 3000)

        return () => clearInterval(interval)
    }, [tedxArray.length])


    useEffect(() => {
        setB(tedxArray[index]);
    }, [index, tedxArray]);


    return (
        <section className={` ${style}`}>
            <main className='h-[300px] w-full '>

                {/* top navigation */}
                <div className=" px-5 top flex justify-between items-center mt-5 text-gray-400">
                    <div
                        className="toHome flex space-x-2 items-center
                        hover:text-black transition-all duration-150  hover:-translate-x-4">
                        <BsArrowLeft />
                        <a href="# " > Head back to TED.com</a>
                    </div>

                    <div
                        className="toShare flex space-x-2 items-center
                        hover:text-black transition-all duration-150  hover:translate-x-4">
                        <BsBarChartSteps />
                        <a href="#" className='hover:text-black'>Share on Facebook</a>
                    </div>
                </div>

                {/* main */}
                <div className="py-20 wrap flex items-center  flex-col h-auto w-[80%] mx-auto">

                    <div className="space-x-2 items-center flex">
                        <img
                            src={logo}
                            alt=""
                            className='ml-10 w-40 h-auto'
                        />

                        {i}
                    </div>

                    <div className=" relative dw w-[80%] mx-auto">
                        <div className='my-3'>{id}</div>
                        {/* <div className='absolute '>{ic}</div> */}
                    </div>
                </div>

                <div className="down bg-[#eb0028]">
                    <div className="mouseWrapper flex items-center justify-center">
                        <img
                            src={mouse}
                            alt=""
                            className='text-grey-200 w-10 py-20 hover:translate-y-5 transition-all
                            duration-200 opacity-50 hover:opacity-100 cursor-pointer '
                        />
                    </div>

                    <div
                        className="wrap w-[80%] mx-auto">
                        <h1 className='w-fit bg-black text-white font-bold mb-12 text-6xl px-2 py-2'>Your Official TEDx Logo</h1>

                        <div className="grid grid-cols-3 gap-3 text-white text-[.99rem]">
                            <p>
                                Our goal was simple: allow you to create your TEDx logo
                                inunder 1 minute. Inspired by past open-source logo
                                generators made by some inventive community members,
                                like <a href="" className="text-black hover:bg-black hover:text-white px-1">Anthony Goddard</a>, <a href='' className="text-black hover:bg-black hover:text-white px-1">Brian Alexander </a>, and <a href='' className="text-black hover:bg-black hover:text-white px-1">Yongho Shin</a>,
                                we wanted to create something that could really take some
                                work off your plate. We know there is a lot going on in
                                putting together your independentally organized TED event
                                (this may even be your first time hosting!)
                                But trust us, it's not that difficult. We just
                            </p>
                            <p>
                                launched a new identity for all TEDx events and we
                                want you to be as excited by it as us! It's cleaner,
                                simpler, and harder to mess up. It works with Youth,
                                Salon, and Women events seamlessly and most importantly,
                                saves you time from tinkering in Adobe Illustrator. For now,
                                sit back and focus on the uniqueness of your event, we got this part taken care of.
                                Feel free to <a href='#' className="text-black hover:bg-black hover:text-white px-1">let us know</a> how much you like or don't like this site.

                                <span className='mt-2 block'> Ciao! </span>
                            </p>

                            <div className="carousel">
                                <div className="div border-dashed border-2 p-2">
                                    <img src={b} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <span className='font-bold text-white text-xs flex justify-center mt-[200px] pb-4'>© TED Conferences</span>
                </div>
            </main>

        </section>
    )
}

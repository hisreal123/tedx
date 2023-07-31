import React from 'react'
import { BsArrowLeft, BsBarChartSteps } from 'react-icons/bs'


type LargeProps = {
    style?: string
}

export const Large = ({ style }: LargeProps) => {
    return (
        <section className={`px-5 text-center ${style}`}>

            <div className="top flex justify-between items-center mt-5 text-gray-400">
                <div className="toHome flex space-x-2 items-center ">
                    <BsArrowLeft />
                    <a href="#"> Head back to TED.com</a>
                </div>

                <div className="toShare flex space-x-2 items-center">
                    <BsBarChartSteps />
                    <a href="#">Share on Facebook</a>
                </div>
            </div>
        </section>
    )
}

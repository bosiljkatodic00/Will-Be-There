import React from 'react'
import { Wrapper } from '../../shared/Wrapper'
import { Button } from '../../shared/Button'
import Image from 'next/image'
import image from '../../../public/assets/Rectangle 5.png'

export const Overview2 = () => {
  return (
    <section>
        <Wrapper>
            <div className='flex flex-col md:flex-row py-5 md:py-10 px-5 space-y-5 md:space-x-12'>
                {/* left */}
                <div className='h-96 md:w-[50%] p-3'>
                    <Image src={image} alt={'image'} className='w-full h-full object-contain'/>
                </div>
                {/* right */}
                <div className='space-y-4 md:w-[50%] order-first md:order-last'>
                    <h1 className='font-bold text-3xl'>Streamline your event journey from start to finish</h1>
                    <p className='text-gray-500'>
                        Begin with effortlessly compile a list of  for guests and items to contribute to your event, ensuring every detail is accounted for.
                    </p>
                    <div>
                        <Button text="Try Now For Free"/>
                    </div>
                </div>
                
            </div>
        </Wrapper>
    </section>
  )
}

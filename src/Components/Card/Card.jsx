import React from 'react';

const Card = ({ item, handelData }) => {
    const { image, credit, price, title, body } = item;
    return (
        <div>
            <div className="card bg-[#fff] shadow-xl px-4 py-4">
                <figure className="">
                    <img src={image} alt="Shoes" className="w-full rounded-lg" />
                </figure>
                <div className="px-0 pt-4">
                    <h2 className="card-title text-[#1C1B1B] font-semibold pb-0">{title}</h2>
                    <p className=' text-[#1C1B1B99] pt-3 pb-5'>{body}</p>
                    <div className='flex flex-wrap items-center justify-between pb-6'>
                        <div className='flex flex-wrap gap-3'>
                            <div><img src="https://i.postimg.cc/DfdhYVKX/dollar-sign-1.png" alt="" /></div><span className='text-[#1C1B1B99] font-semibold text-base'>Price : {price}</span>
                        </div>
                        <div className='flex flex-wrap items-center pr-5'>
                            <div><img src="https://i.postimg.cc/cCZS4hfC/Frame.png" alt="" /></div>
                            <span className='text-[#1C1B1B99] pl-3 font-semibold text-base'>Credit : {credit}hr</span>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={() => handelData(item)} className="bg-[#2F80ED] rounded-lg w-full py-[9px] text-white font-semibold text-base">Select</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;
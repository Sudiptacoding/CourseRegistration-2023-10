import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Calculation from '../Calculation/Calculation';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
    const [fakeData, setFakeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [calculate, setCalculate] = useState([])

    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => {
                setFakeData(data);
                setLoading(false)
            })
    }, []);
    const handelData = (data) => {
        const filterData = calculate.find(p => p === data)
        let totalCredit = data.credit
        if (!filterData) {
            calculate.forEach(total => {
                totalCredit += total.credit
            })
            if (totalCredit > 20) {
                return toast('Total Credit Hour Limit Up')
            } else {
                setCalculate([...calculate, data])
            }
        } else {
            return toast(`Already selected card ${data.id}`)
        }
    }
    if (loading) {
        return <div className='flex items-center justify-center w-full h-screen text-white bg-black '><span className="loading loading-spinner loading-lg"></span></div>
    } else {
        return (
            <div className='bg-[#F3F3F3]'>
                <header className='text-center'><h1 className='text-[32px] text-[#1C1B1B] font-bold pt-[50px] pb-8'>Course Registration</h1></header>
                <main className='flex items-start gap-6 lg:px-[60px] px-5 lg:flex-row flex-col-reverse'>
                    <div className='grid w-full grid-cols-1 gap-6 lg:grid-cols-3 md:grid-cols-2 lg:w-3/4'>
                        {
                            fakeData.map((item, i) => <Card item={item} key={i} handelData={handelData}></Card>)
                        }
                    </div>
                    <div className='w-full lg:w-1/4'>
                        <Calculation calculate={calculate}></Calculation>
                    </div>
                </main>
                <ToastContainer />
            </div>
        );
    }

};

export default Home;
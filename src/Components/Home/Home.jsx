import React, { useEffect, useState } from 'react';
import './Home.css'
import Cart from '../Cart/Cart';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { IoIosBookmarks } from 'react-icons/io';

const Home = () => {
    const[course,setCourse]=useState([])
    const [selsectedCourse,setSelectedCourse]=useState([])
    const [totalPrice,setTotalPrice]=useState(0)
    const [totalCredit,setTotalCredit] = useState(0)
    const [totalRemain,setTotalRemain]=useState(20)
    useEffect(()=>{
        fetch('./Data.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    const handaleClick=(courses)=>{
        console.log(courses)
        let count = courses.course_price
        let cred = courses.credit
        let remain=20-courses.credit
        const isExist= selsectedCourse.find(item=>item.course_name==courses.course_name)
        console.log(isExist);
       
        
        selsectedCourse.forEach(item=>{
            cred=cred+item.credit
             remain = 20-cred

        })
        
        console.log(count)
        console.log(cred)
        console.log(remain)
        if(isExist){
            return alert('Already Added')
        }
        else{
            
            selsectedCourse.forEach(item=>{
                count=count+item.course_price
            })
        }
        if(cred>20)
        {
            return alert("You can not take more than 20 credits")
        }
        else{
            
            setTotalPrice(count)
            setTotalCredit(cred)
            setTotalRemain(remain)
            setSelectedCourse([...selsectedCourse,courses])

        }
        
    }
    return (
        <div className="container">
            <div className="flex">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
                    {
                        course.map(courses=>(
                            <div key={courses.course_name} className="card items-center text-center shadow-lg">
                       <h1 className='content'>{courses.course_name}</h1>
                     <img className='photo' src={courses.course_img} />
                     <p className='des'><small>{courses.course_description}</small></p>
                     <div className="info pp">
                        <div className='flex gap-3 items-center'>
                            <h2><AiOutlineDollarCircle></AiOutlineDollarCircle></h2>
                            <p>price:{courses.course_price}</p>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <h2><IoIosBookmarks></IoIosBookmarks></h2> <h4>Credit:{courses.credit}</h4>
                        </div>
                        
                       
                     </div>
                     <button onClick={()=>handaleClick(courses)} className='btn'>Select</button>
                     </div>
                        ))
                    }
                    
                    
                </div>
                <Cart selsectedCourse={selsectedCourse}
                totalPrice={totalPrice}
                totalCredit={totalCredit}
                totalRemain={totalRemain}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;
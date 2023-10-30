import React from 'react';

const Cart = ({selsectedCourse,totalPrice,totalCredit,totalRemain}) => {
    console.log(selsectedCourse)
    return (
        <div>
            <h2 className='border'>TotalRemain:{totalRemain}</h2>
            <h2 className='border'>TotalCourse:{selsectedCourse.length}</h2>
            <h2 className='border'>TotalPrice:{totalPrice}</h2>
            <h2 className='border'>TotalCredit:{totalCredit}</h2>
            
            {
                selsectedCourse.map(courses=>(
                    <li key={courses.course_name} className='list-decimal'>{courses.course_name}</li>
                   
                ))
            }
             

        </div>
    );
};

export default Cart;
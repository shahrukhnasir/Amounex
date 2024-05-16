import { Card } from 'antd'
import React from 'react'
import "@/Components/ExpenseCard/ExpenseCard.css"
const ExpenseCard = ({ price, expense, day, bgColor }) => {
    return (

        <>

            <Card
                
                className="expense_card"
                style={{
                    width: 128,
                    height:140,
                    backgroundColor: `${bgColor}`,
                    margin:4
                }}
            >

                <p className='price'>{price}</p>
                <p className='exp'>{expense}</p>
                <p className='day'>{day}</p>
            </Card>
        </>
    )
}

export default ExpenseCard
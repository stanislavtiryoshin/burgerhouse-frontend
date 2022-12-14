import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import './OrderCard.css'
import {BsPlusLg} from 'react-icons/bs'
import { addOrder, deleteOrder } from '../../services/ordersSlice'
import BurgerView from '../BurgerReview/BurgerView'

const OrderCard = ({simple, orderNumber, id, name, description, restaurant, type, number, sauce, drink, fries, price, orderData}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    dispatch(addOrder(orderData))
    navigate('/')
  }

  const handleDelete = async (id) => {
    dispatch(deleteOrder(id))
  }

  return (
    <div className="order-card-box">
      {!simple && 
        <BurgerView 
          small 
          restaurant={restaurant}
          burgerType={type}
          pattiesNumber={number}
          drinkChoice={drink}
          friesChoice={fries}
        />
      }
      {!simple && <button className='delete-btn' onClick={() => {handleDelete(id)}} ><BsPlusLg/></button>}
      <div className="order-card">
        
        {simple && <h2 className='order-card-title'>Your Order</h2>}
        {orderNumber && <p>Order #{orderNumber}</p>}
        {description && <h3>{description}</h3>}

        {name && <h4>Customer: <span>{name}</span></h4>}
        {restaurant && <p>Restaurant: <span>{restaurant === "md" ? "McDonald's" : "Burger King"}</span></p>}
        {type && <p>Burger: <span>{type}</span></p>}
        {number && <p>patties: <span>{number}</span></p>}
        {sauce && <p>Sauce: <span>{sauce}</span></p>}
        {fries && <p>Fries: <span>{fries} Fries</span>  </p>}
        {drink && <p>Drink: <span>{drink}</span></p>}
        {price && <p className='total'>Total: <font>{price} KZT</font> </p>}
        {simple && 
          <button className="primary-btn" onClick={handleSubmit}>
                MAKE ORDER
          </button>
        }
      </div>
    </div>
  )
}

export default OrderCard
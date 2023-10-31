import React from 'react';
import Title from '../../../../Components/Title';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutFrom from './CheckoutFrom';
import useCart from '../../../../hooks/useCart';


const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_PK)

const Payment = () => {

    const [cart] = useCart();

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <Title subHeading='Please Process' heading='payment' />

            <div className='ml-52'>
                <Elements stripe={stripePromise}>
                    <CheckoutFrom price={price} cart={cart} />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;
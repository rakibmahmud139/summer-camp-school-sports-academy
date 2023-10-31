import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import './common.css'
import toast from "react-hot-toast";
import useAxiosSecure from "../../../../hooks/useAxioxSecure";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

const CheckoutFrom = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price])

    const handleSubmit = async (event) => {
        event.preventDefault()


        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            toast.error(error.message)
        }
        else {
            console.log('paymentMethod', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmCardError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName || 'anonymous',
                        email: user.email || 'unknown',
                    },
                },
            },
        );

        if (confirmCardError) {
            toast.error(confirmCardError.message)
        }

        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            const transactionId = paymentIntent.id;
            setTransactionId(transactionId);
            toast.success(`Transaction complete with transactionId ${transactionId}`)

            //saved payment to the server
            const payment = {
                email: user?.email,
                transactionId,
                price,
                date: new Date(),
                status: 'service pending',
                quantity: cart.length,
                cartItems: cart.map(item => item._id),
                classItems: cart.map(i => i.classID),
                myClassNames: cart.map(item => item.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.insertResult.insertedId) {
                        toast.success('payment successful')
                    }
                })
        }


    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-sm btn-outline border-b-4 border-sky-500" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutFrom;
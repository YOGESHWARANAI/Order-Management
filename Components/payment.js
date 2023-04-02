import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import RazorpayCheckout from 'react-native-razorpay';

const PaymentScreen = () => {
  const [paymentStatus, setPaymentStatus] = useState('');

  const handlePayment = async () => {
    const options = {
      key: '',
      amount: '100',
      name: 'Yogeshwaran',
      description: 'Test Payment',
      prefill: {
        email: '727721euai062@skcet.ac.in',
        contact: '8610832898',
        name: 'Yogesh'
      },
      theme: {color: '#F37254'}
    };

    try {
      const data = await RazorpayCheckout.open(options);
      setPaymentStatus('Payment successful!');
      console.log(data);
    } catch (error) {
      setPaymentStatus('Payment failed.');
      console.log(error);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button title="Pay now" onPress={handlePayment} />
      <Text>{paymentStatus}</Text>
    </View>
  );
};
export default PaymentScreen;

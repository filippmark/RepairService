import * as React from 'react';
import { connect } from 'react-redux';
import OrderDescription from './OrderDescription/OrderDescription';
import OrderAddress from './OrderAddress/OrderAddress';
import OrderTime from './OrderTime/OrderTime';
import OrderPrice from './OrderPrice/OrderPrice';

const Order = () => (
    <div className="container-md bg-light p-3 mb-2">
        <h1>Оформление заказа</h1>
        <OrderDescription></OrderDescription>
        <OrderAddress></OrderAddress>
        <OrderTime></OrderTime>
        <OrderPrice></OrderPrice>
        <input className="btn btn-primary mt-2" type="submit" value="Подтвердить"/> 
    </div>
);

export default connect()(Order);
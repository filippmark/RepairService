import * as React from 'react';
import { connect } from 'react-redux';
import OrderDescription from './OrderDescription/OrderDescription';
import OrderAddress from './OrderAddress/OrderAddress';
import OrderTime from './OrderTime/OrderTime';
import OrderPrice from './OrderPrice/OrderPrice';
import { RouteComponentProps } from 'react-router';

import { ApplicationState } from '../../store';
import * as OrderStore from '../../store/Order'

type OrderAddressProps =
    OrderStore.OrderState &
    typeof OrderStore.actionCreators &
    RouteComponentProps<{}>;

class Order extends React.Component<OrderAddressProps> {

    componentDidMount() {
        console.log(this.props);
    }

    public render() {
        return (
            <div className="container-md bg-light p-3 mb-2">
                <h1>Оформление заказа</h1>
                <OrderDescription></OrderDescription>
                <OrderAddress></OrderAddress>
                <OrderTime></OrderTime>
                <OrderPrice></OrderPrice>
                <input className="btn btn-primary mt-2" type="submit" value="Подтвердить" />
            </div>)
    }

}

export default connect(
    (state: ApplicationState) => state.order,
    OrderStore.actionCreators
)(Order);
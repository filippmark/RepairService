import * as React from 'react';
import { connect } from 'react-redux';
import OrderDescription from './OrderDescription/OrderDescription';
import OrderAddress from './OrderAddress/OrderAddress';
import OrderTime from './OrderTime/OrderTime';
import OrderPrice from './OrderPrice/OrderPrice';
import { RouteComponentProps } from 'react-router';
import { ApplicationState } from '../../store';
import * as OrderStore from '../../store/Order';
import * as SignInState from '../../store/SignIn';

type OrderAddressProps =
    OrderStore.OrderState &
    typeof OrderStore.actionCreators &
    RouteComponentProps<{}> & SignInState.SignInState;

class Order extends React.Component<OrderAddressProps> {

    componentDidMount() {
        console.log(this.props);
    }

    _addOrder = (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => {


        this.props.registerOrder(
            {   
                employerId: this.props.id,
                shortDescription: this.props.shortDescription,
                fullDescription: this.props.fullDescription,
                date: this.props.date,
                isNegotiable: this.props.isNegotiable,
                partOfDay: this.props.partOfDay,
                reward: this.props.reward,
                town: this.props.town,
                street: this.props.street,
                house: this.props.house
            });
        
    }

    public render() {
        return (
            <div className="container-md bg-light p-3 mb-2">
                <h1>Оформление заказа</h1>
                <OrderDescription></OrderDescription>
                <OrderAddress></OrderAddress>
                <OrderTime></OrderTime>
                <OrderPrice></OrderPrice>
                <input className="btn btn-primary mt-2" type="button" value="Подтвердить" onClick={this._addOrder} />
            </div>)
    }

}

export default connect(
    (state: ApplicationState) => {
        let props = Object.create(null);
        return Object.assign(props, state.signIn, state.order);
    },
    OrderStore.actionCreators
)(Order);
import * as React from 'react';
import OrderCard from '../../Common/OrderCard/OrderCard';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as SignInState from '../../../store/SignIn';
import * as EmployerProfileStore from '../../../store/EmployerProfile';
import { IOrder } from '../../../store/Order';

export type IAppProps = EmployerProfileStore.IEmployerProfileState & SignInState.SignInState & typeof EmployerProfileStore.ActionCreators; 

class EmployerProfile extends React.Component<IAppProps> {


  componentDidMount() {
      this.props.receiveEmployerOrders({
          pageIndex: 0,
          amountOfOrdersAtPage: 12,
          employerId: this.props.id
      });
  }


  render() {
    return (
        <div className="d-flex flex-wrap">
          {
            this.props.orders.map((order: IOrder) => (
                <OrderCard order={order}></OrderCard>
            ))
          }    
      </div>
    );
  }
}


export default connect(
    (state: ApplicationState) => {
        let props = Object.create(null);
        return Object.assign(props, state.employerProfile, state.signIn);
    },
    EmployerProfileStore.ActionCreators
)(EmployerProfile);
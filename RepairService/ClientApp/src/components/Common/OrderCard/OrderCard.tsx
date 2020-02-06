import * as React from 'react';

import { IOrder } from '../../../store/Order';

interface IProps {
    order: IOrder
}

export default class App extends React.Component<IProps> {
  public render() {
    return (
        <div className="card  flex-shrink-0 flex-grow-0 m-1" style={{ width: '15rem' }}>
            <div className="card-body">
                <h5 className="card-title">Card</h5>
                <p className="card-text"> { this.props.order.shortDescription} </p>
                <a href="#" className="btn btn-outline-primary"> Подробнее о заказе</a>
            </div>
        </div>
    );
  }
}

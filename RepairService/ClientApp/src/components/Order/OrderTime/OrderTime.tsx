import * as React from 'react';
import { connect } from 'react-redux';
import OrderDay from './OrderDay/OrderDay';


export interface IAppProps {
}

export default class OrderDescription extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="border-bottom mb-1">
                <div className="row">
                    <OrderDay></OrderDay>
                    <OrderDay></OrderDay>
                    <OrderDay></OrderDay>
                    <OrderDay></OrderDay>

                </div>
                <OrderDay></OrderDay>
                <h5> Время выполнения заказа </h5>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="time" type="radio" value="1"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox1"> 8:00 - 12:00 </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="time" type="radio" value="option2"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox2"> 12:00 - 16:00 </label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="time" type="radio" value="option3"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox3"> 16:00 - 20:00</label>
                </div>
            </div>

        );
    }
}


connect()(OrderDescription);
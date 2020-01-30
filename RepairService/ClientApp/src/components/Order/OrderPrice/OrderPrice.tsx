import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as OrderStore from '../../../store/Order'

export interface IAppProps {
}

export default class OrderPrice extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="border-bottom mb-1">
                <h2> Оплата за выполнение заказа </h2>
                <form>
                    <input type="text" className="form-control form-control-lg w-25" id="Price" aria-describedby="orderShortDescHelp" />
                    <small id="orderShortDescHelp" className="form-text text-muted"> Введите сумму, которую вы готовы выплатить за выполнение заказа. </small>
                    <div className="form-check form-check-inline  m-2">
                        <input className="form-check-input" type="checkbox" name="bargain" id="bargain" value="true"/>
                        <label className="form-check-label" htmlFor="bargain"> Торг  уместен </label>
                    </div>
                </form>
            </div>
        );
    }
}


connect(
    (state: ApplicationState) => state.order,
    OrderStore.actionCreators
)(OrderPrice);
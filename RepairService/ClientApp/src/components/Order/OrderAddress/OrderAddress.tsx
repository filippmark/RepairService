import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as OrderStore from '../../../store/Order'

export interface IAppProps {
}

export default class OrderAddress extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="border-bottom mb-2">
                <h2> Адрес для выполнение заказа </h2>
                <form>
                    <label htmlFor="town"> Город </label>
                    <input type="text" className="form-control w-25" id="town"/>
                    <label htmlFor="StreetHouse"> Улица, дом </label>
                    <input type="text" className="form-control w-50 mb-1" id="StreetHouse" aria-describedby="orderShortDescHelp" />
                </form>
            </div>

        );
    }
}


connect(
    (state: ApplicationState) => ({ town: state.order!.town, streetHouse: state.order!.streetHouse}),
    OrderStore.actionCreators
)(OrderAddress);
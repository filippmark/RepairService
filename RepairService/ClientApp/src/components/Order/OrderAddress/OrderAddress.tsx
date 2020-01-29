import * as React from 'react';
import { connect } from 'react-redux';

export interface IAppProps {
}

export default class OrderDescription extends React.Component<IAppProps> {
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


connect()(OrderDescription);
import * as React from 'react';
import { connect } from 'react-redux';
import './OrderDay.css';
import { ApplicationState } from '../../../../store';
import * as OrderStore from '../../../../store/Order';

export interface IAppProps {
}

export default class OrderDay extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="card m-2 flex-shrink-0 flex-grow-0" style={{ width: '12rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted text-center"> Февраль </h6>
                    <p className="card-title display-1 text-center" > 31 </p>
                    <p className="card-text text-center">Понедельник</p>
                </div>
            </div>
        );
    }
}


connect(
    (state: ApplicationState) => state.order,
    OrderStore.actionCreators
)(OrderDay);
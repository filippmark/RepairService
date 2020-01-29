import * as React from 'react';
import { connect } from 'react-redux';

export interface IAppProps {
}

export default class OrderDay extends React.Component<IAppProps> {
    public render() {
        return (
            <div className="card m-2 col" style={{ width: '12rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted text-center"> Февраль </h6>
                    <p className="card-title display-1 text-center" >8</p>
                    <p className="card-text text-center">Понедельник</p>
                </div>
            </div>
        );
    }
}


connect()(OrderDay);
import * as React from 'react';
import * as OrderStore from '../../../../store/Order'
import { connect } from 'react-redux';

interface props {
    date: Date
}

type IProps = props & typeof OrderStore.actionCreators

class OrderDay extends React.Component<IProps> {



    _months: string[] = [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Ноябрь',
        'Декабрь',
    ];

    _daysOfWeek: string[] = [
        'Воскресенье',
        'Понедельник',
        'Вторник',
        'Среда',
        'Четверг',
        'Пятница',
        'Суббота'
    ]

    public render() {
        return (
            <div className="card m-2 flex-shrink-0 flex-grow-0" style={{ width: '12rem' }}>
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted text-center"> {this._months[this.props?.date.getMonth()]} </h6>
                    <p className="card-title display-1 text-center" > {this.props?.date.getDate()} </p>
                    <p className="card-text text-center">{this._daysOfWeek[this.props?.date.getDay()]}</p>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    OrderStore.actionCreators
)(OrderDay);
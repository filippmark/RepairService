import * as React from 'react';
import * as OrderStore from '../../../../store/Order'
import { connect } from 'react-redux';
import { ApplicationState } from '../../../../store';
import './OrderDay';

interface props {
    ownDate: Date,
    date: Date | null | undefined
}

interface IState {
    isSelected: boolean
}

type IProps = props & typeof OrderStore.actionCreators

class OrderDay extends React.Component<IProps, IState> {

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


    state = {
        isSelected: false,
    }


    _setDate = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        this.props.setDateExecutionOrderAction(this.props.ownDate);
        this.setState({ isSelected: true });
    }   


    componentDidUpdate( ) {
        if (this.props.date?.getTime() === this.props.ownDate.getTime()) {
            if (!this.state.isSelected) {
                this.setState({ isSelected: true });
            }
        } else if (this.state.isSelected) {
            this.setState({ isSelected: false });
        }
    }

    public render() {
        return (
            <div className={`card m-2 flex-shrink-0 flex-grow-0 ${this.state.isSelected ? 'bg-success' : ''}`} style={{ width: '12rem' }} >
                <div className="card-body" onClick={this._setDate}>
                    <h6 className="card-subtitle mb-2 ${this.state.isSelected ? 'text-white' : 'text-muted'} text-center"> {this._months[this.props?.ownDate.getMonth()]} </h6>
                    <p className="card-title display-1 text-center" > {this.props?.ownDate.getDate()} </p>
                    <p className="card-text text-center">{this._daysOfWeek[this.props?.ownDate.getDay()]}</p>
                </div>
            </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => ({date: state.order?.date}),
    OrderStore.actionCreators
)(OrderDay);
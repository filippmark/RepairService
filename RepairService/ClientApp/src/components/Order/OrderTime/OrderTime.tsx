import * as React from 'react';
import OrderDay from './OrderDay/OrderDay'
import * as OrderStore from '../../../store/Order'
import { connect } from 'react-redux';

type IProps = typeof OrderStore.actionCreators

interface IState {
    dates: Date[]
}

class OrderTime extends React.Component<IProps, IState> {

    state = {
        dates: []
    }


    _createDates = () => {

        let startDate = new Date();
        const days = 14;
        const dates: Date[] = []

        for (var i = 0; i < days; i++) {
            dates.push(new Date(startDate.toUTCString()));
            startDate.setDate(startDate.getDate() + 1);
        }
            
        this.setState({ dates });
    }

    componentDidMount() {
        this._createDates();
    }

    public render() {
        return (
            <div className="border-bottom mb-1">
                <div className="d-flex flex-nowrap overflow-auto">
                    {
                        this.state.dates.map((date: Date) => (
                            <OrderDay date={date} key={date.toUTCString()}></OrderDay>
                        ))
                    }
                </div>
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
                    <input className="form-check-input" name="time" type="radio" value="3"/>
                    <label className="form-check-label" htmlFor="inlineCheckbox3"> 16:00 - 20:00</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" name="time" type="radio" value="4" />
                    <label className="form-check-label" htmlFor="inlineCheckbox3"> Любое время </label>
                </div>
            </div>
        );
    }
}

export default connect(
    null,
    OrderStore.actionCreators
)(OrderTime);
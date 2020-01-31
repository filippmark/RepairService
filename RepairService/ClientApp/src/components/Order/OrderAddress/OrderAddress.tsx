import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as OrderStore from '../../../store/Order'
import { connect } from 'react-redux';


type IProps = typeof OrderStore.actionCreators


 class OrderAddress extends React.Component<IProps> {

    
     _townInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setTownOrder(event.target.value);
    }

    _streetHouseInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setStreetHouseOrder(event.target.value);
    }

    public render() {
        return (
            <div className="border-bottom mb-2">
                <h2> Адрес для выполнение заказа </h2>
                <form>
                    <label htmlFor="town"> Город </label>
                    <input type="text" className="form-control w-25" name="townAddress" id="town" onChange={this._townInputHandler}/>
                    <label htmlFor="StreetHouse"> Улица, дом </label>
                    <input type="text" className="form-control w-50 mb-1" name="streetHouse" id="StreetHouse" aria-describedby="orderShortDescHelp" />
                </form>
            </div>
        );
    }
}

export default connect(
   null,
    OrderStore.actionCreators
)(OrderAddress);
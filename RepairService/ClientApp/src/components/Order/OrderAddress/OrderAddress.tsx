import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as OrderStore from '../../../store/Order'
import { connect } from 'react-redux';


type IProps = typeof OrderStore.actionCreators;


 class OrderAddress extends React.Component<IProps> {

    
     _townInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setTownOrder(event.target.value);
    }

    _streetInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setStreetOrder(event.target.value);
    }

    _houseInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setHouseOrder(event.target.value);
    }

    public render() {
        return (
            <div className="border-bottom mb-2">
                <h2> Адрес для выполнение заказа </h2>
                <form>
                    <label htmlFor="town"> Город </label>
                    <input type="text" className="form-control w-25" name="townAddress" id="town" onChange={this._townInputHandler}/>
                    <label htmlFor="StreetHouse"> Улица </label>
                    <input type="text" className="form-control w-25 mb-1" name="street" id="street" aria-describedby="orderShortDescHelp" onChange={this._streetInputHandler} />
                    <label htmlFor="StreetHouse"> Дом </label>
                    <input type="text" className="form-control w-25 mb-1" name="house" id="house" aria-describedby="orderShortDescHelp" onChange={this._houseInputHandler}/>
                </form>
            </div>
        );
    }
}

export default connect(
   null,
    OrderStore.actionCreators
)(OrderAddress as any);
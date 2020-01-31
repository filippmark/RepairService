import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as OrderStore from '../../../store/Order'
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';

interface IProps {
    reward: number
}

type Props = IProps & typeof OrderStore.actionCreators;
    


class OrderPrice extends React.Component<Props> {


    componentDidMount() {
        console.log(this.props);
    }

    _rewardHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        const numbers = /^[0-9]*$/gm;
        const value = event.target.value;

        if (numbers.test(value)) {
            const reward = value !== '' ? parseInt(value) : 0;
            this.props.setRewardForOrder(reward);
        } else {
            event.target.value = this.props.reward === 0 ? '' : this.props.reward.toString();
        }
    }

    _isNegotiableHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setIsNegotiableOrderReward(event.target.checked);
    }


    public render() {
        return (<div className="border-bottom mb-1">
                    <h2> Оплата за выполнение заказа </h2>
                    <form>
                        <input type="text" className="form-control form-control-lg w-25" id="Price" aria-describedby="orderShortDescHelp" onChange={this._rewardHandler} />
                        <small id="orderShortDescHelp" className="form-text text-muted"> Введите сумму, которую вы готовы выплатить за выполнение заказа. </small>
                        <div className="form-check form-check-inline  m-2">
                            <input className="form-check-input" type="checkbox" name="bargain" id="bargain" value="true" onChange={this._isNegotiableHandler} />
                            <label className="form-check-label" htmlFor="bargain"> Торг уместен </label>
                        </div>
                    </form>
                </div>
        );
    }
}

export default connect(
    (state: ApplicationState) => ({ reward: state.order!.reward}),
    OrderStore.actionCreators
)(OrderPrice);
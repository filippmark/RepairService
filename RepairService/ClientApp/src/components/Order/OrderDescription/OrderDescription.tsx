import * as React from 'react'
import * as OrderStore from '../../../store/Order'
import { connect } from 'react-redux';

type Props =  typeof OrderStore.actionCreators;

class OrderDescription extends React.Component<Props> {


    _shortDescriptionHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.props.setShortOrderDescription(event.target.value);
    }

    _fullDescriptionHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.props.setFullOrderDescription(event.target.value);
    }

  public render() {
      return (
          <div className="border-bottom mb-1"> 
              <h2> Детали заказа </h2>
              <form>
                  <label htmlFor="ShortDesc"> Краткое описание заказа</label>
                  <input type="text" className="form-control form-control-lg w-25" id="ShortDesc" aria-describedby="orderShortDescHelp" onChange={this._shortDescriptionHandler}/>
                  <small id="orderShortDescHelp" className="form-text text-muted"> Введите краткое описание заказа, буквально несколько слов. Например, поклейка обоев. </small>
                  <label htmlFor="FullDesc"> Подробное описание </label>
                  <textarea className="form-control form-control-lg w-50 mb-1" id="FullDesc" aria-describedby="orderShortDescHelp" onChange={this._fullDescriptionHandler}/>
                  <small id="orderShortDescHelp" className="form-text text-muted"> Уточните детали заказа. Например, поклеить трёхкомнатную квартиру метровыми обоями в течение недели. </small>
              </form>
        </div>
        
    );
  }
}


export default connect(
    null,
    OrderStore.actionCreators
)(OrderDescription);
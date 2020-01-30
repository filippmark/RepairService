import * as React from 'react';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../store';
import * as OrderStore from '../../../store/Order'

export interface IAppProps {
}

export default class OrderDescription extends React.Component<IAppProps> {
  public render() {
      return (
          <div className="border-bottom mb-1"> 
              <h2> Детали заказа </h2>
              <form>
                  <label htmlFor="ShortDesc"> Краткое описание заказа</label>
                  <input type="text" className="form-control form-control-lg w-25" id="ShortDesc" aria-describedby="orderShortDescHelp"/>
                  <small id="orderShortDescHelp" className="form-text text-muted"> Введите краткое описание заказа, буквально несколько слов. Например, поклейка обоев. </small>
                  <label htmlFor="FullDesc"> Подробное описание </label>
                  <textarea className="form-control form-control-lg w-50 mb-1" id="FullDesc" aria-describedby="orderShortDescHelp" />
                  <small id="orderShortDescHelp" className="form-text text-muted"> Уточните детали заказа. Например, поклеить трёхкомнатную квартиру метровыми обоями в течение недели. </small>
              </form>
        </div>
        
    );
  }
}


connect(
    (state: ApplicationState) => state.order,
    OrderStore.actionCreators
)(OrderDescription);
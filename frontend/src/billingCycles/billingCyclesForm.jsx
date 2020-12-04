import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { reduxForm, Field, formValueSelector } from 'redux-form'
import labelAndInput from '../common/form/labelAndInput'
import { init } from './billingCyclesActions'
import ItemList from './itemList'
import InfoBillingCycles from './infoBillingCycles'

class BillingCyclesForm extends Component {

    calculateSummary() {
        
        const sum = (total, valorAtual) => total + valorAtual
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(c => +c.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role='form' onSubmit={handleSubmit}>
                <div className='box-body'>
                    <Field name='name' component={labelAndInput} cols='col-xs-12 col-sm-4'
                        placeholder='Insira o nome' label='Nome' readOnly={readOnly} />
                    <Field name='month' component={labelAndInput} cols='col-xs-12 col-sm-4'
                        placeholder='Insira o mês' type='number' label='Mês' min='1' max='12' readOnly={readOnly} />
                    <Field name='year' component={labelAndInput} cols='col-xs-12 col-sm-4'
                        placeholder='Insira o ano' type='number' label='Ano' min='1970' readOnly={readOnly} />
                    <InfoBillingCycles credit={sumOfCredits} debit={sumOfDebts} />
                    <ItemList cols='col-xs-12 col-sm-6' list={credits} readOnly={readOnly}
                        field='credits' legend='Créditos' />
                    <ItemList cols='col-xs-12 col-sm-6' list={debts} readOnly={readOnly}
                        field='debts' legend='Débitos' showStatus={true} />
                </div>
                <div className='box-footer'>
                    <button type='submit' className={`btn btn-${this.props.classBtn}`}> {this.props.classLabel}</button>
                    <button type='button' className='btn btn-default' onClick={this.props.init}>Cancelar</button>
                </div>
            </form>
        )
    }
}

BillingCyclesForm = reduxForm({ form: 'billingCyclesForm', destroyOnUnmount: false })(BillingCyclesForm)
const selector = formValueSelector('billingCyclesForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BillingCyclesForm)
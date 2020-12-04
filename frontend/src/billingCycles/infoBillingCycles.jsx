import React from 'react'
import Row from '../common/layout/row'
import ValueBox from '../common/widget/valueBox'

export default ({ credit, debit }) => (
    <div className='col-xs-12'>
        <fieldset>
            <legend>Resumo</legend>
            <Row>
                <ValueBox cols='col-xs-12 col-sm-4' color='green' icon='bank'
                    value={credit} text='Total de Créditos' />
                <ValueBox cols='col-xs-12 col-sm-4' color='red' icon='credit-card'
                    value={debit} text='Total de Débitos' />
                <ValueBox cols='col-xs-12 col-sm-4' color='blue' icon='money'
                    value={credit - debit} text='Total de Valor Consolidado' />
            </Row>
        </fieldset>
    </div>
)
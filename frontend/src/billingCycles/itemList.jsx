import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, arrayInsert, arrayRemove } from 'redux-form'
import Input from '../common/form/input'
import If from '../common/operator/if'

class ItemList extends Component {

    add(index, item = {}) {
        if (!this.props.readOnly) {
            this.props.arrayInsert('billingCyclesForm', 'credits', index, item)
        }
    }

    remove(index) {
        if (!this.props.readOnly && this.props.list.length > 1) {
            this.props.arrayRemove('billingCyclesForm', 'credits', index)
        }
    }

    renderRows() {
        const { field } = this.props
        const { readOnly } = this.props
        const list = this.props.list || []
        return list.map((item, index) => (
            <tr key={index}>
                <td>
                    <Field name={`${field}[${index}].name`} component={Input}
                        placeholder='Informe o nome' readOnly={readOnly} />
                </td>
                <td>
                    <Field name={`${field}[${index}].value`} component={Input}
                        placeholder='Informe o valor' readOnly={readOnly} />
                </td>
                <If test={this.props.showStatus}>
                    <td>
                        <Field name={`${field}[${index}].status`} component={Input}
                            placeholder='Informe o Status' readOnly={readOnly} />
                    </td>
                </If>
                <td>
                    <button type='button' className='btn btn-success'
                        onClick={() => this.add(index + 1)} >
                        <i className='fa fa-plus'></i>
                    </button>
                    <button type='button' className='btn btn-warning'
                        onClick={() => this.add(index, item)} >
                        <i className='fa fa-clone'></i>
                    </button>
                    <button type='button' className='btn btn-danger'
                        onClick={() => this.remove(index)} >
                        <i className='fa fa-trash'></i>
                    </button>
                </td>
            </tr>
        ))
    }

    render() {
        const { cols, legend } = this.props
        return (
            <div className={cols}>
                <fieldset>
                    <legend>{legend}</legend>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Valor</th>
                                <If test={this.props.showStatus}>
                                    <th>Status</th>
                                </If>
                                <th className='tableActions'>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.renderRows()}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({ arrayInsert, arrayRemove }, dispatch)
export default connect(null, mapDispatchToProps)(ItemList)
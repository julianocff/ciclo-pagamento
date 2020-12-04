import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { selectTab, showTabs } from '../common/tab/tabActions'
import billingCycles from './billingCycles'

const baseUrl = 'http://localhost:3003/api'
const initialValues = { credits: [{}], debts: [{}] }

export function getList() {
    const request = axios.get(`${baseUrl}/billingCycles`)
    return {
        type: 'BILLING_CICLES_GET',
        payload: request
    }
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        axios[method](`${baseUrl}/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação efetuada com sucesso.')
                dispatch(init())
            })
            .catch(e => {
                e.response.data.errors.forEach(error => toastr.error('Erro', error))
            })
    }

}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

export function showUpdate(billingCycles) {
    return [
        selectTab('tabUpdate'),
        showTabs('tabUpdate'),
        initialize('billingCyclesForm', billingCycles)
    ]
}

export function showDelete(billingCycles) {
    return [
        selectTab('tabDelete'),
        showTabs('tabDelete'),
        initialize('billingCyclesForm', billingCycles)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList', 'tabCreate'),
        getList(),
        initialize('billingCyclesForm', initialValues)
    ]
}
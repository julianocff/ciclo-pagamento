import axios from 'axios'
const baseUrl = 'http://localhost:3003/api'

export function getSummary() {
    const request = axios.get(`${baseUrl}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMARY_GET',
        payload: request
    }
}
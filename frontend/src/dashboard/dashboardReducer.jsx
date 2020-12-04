const initialState = { summary: { credit: 0, debt: 0 } }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BILLING_SUMARY_GET':
            return {
                ...state,
                summary: action.payload.data
            }
        default:
            return state
    }
}
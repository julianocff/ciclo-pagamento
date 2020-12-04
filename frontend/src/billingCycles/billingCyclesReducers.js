const initialState = { list: [] }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'BILLING_CICLES_GET':
            return {
                ...state,
                list: action.payload.data
            }
            default:
                return state
    }
}
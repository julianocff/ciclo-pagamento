const initialState = { selecteds: '', visibles: {} }

export default (state = initialState, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return {
                ...state,
                selecteds: action.payload
            }
            case 'TAB_SHOWED':
                return {
                    ...state,
                    visibles: action.payload
                }
        default:
            return state
    }
}
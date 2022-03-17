export const GET_CHARITIES = (res) => {
    return({ type: 'GET_CHARITIES', payload: res})
}

export const SAVE_USER = (userInfo) => {
    return({type: 'SAVE_USER', payload: userInfo})
}
import reducer from '../../client/reducers/reducer';

xdescribe('Should update state in consistent ways', () => {
  const initialState = { charities: [], user: {} };
  it('Should set to initial state by default', () => {
    const result = reducer();
    expect(result).toEqual(initialState);
  })

  it('Should update charities if action.type === GET_CHARITIES', () => {
    const action = { type: 'GET_CHARITIES', payload: ['hello world'] }
    const result = reducer(initialState, action);
    expect(result.charities).toEqual(action.payload);
  })

  it('Should update user if action.type === SAVE_USER', () => {
    const action = { type: 'SAVE_USER', payload: 'test' }
    const result = reducer(initialState, action);
    expect(result.user).toEqual(action.payload);
  })
})
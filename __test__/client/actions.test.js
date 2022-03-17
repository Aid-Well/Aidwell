import * as actions from '../../client/actions/actions';

describe('Action creator tests', () => {
  it('Should create a GET_CHARITIES action', () => {
    const action = actions.GET_CHARITIES('payload');
    expect(action.type).toBe('GET_CHARITIES');
    expect(action.payload).toBe('payload');
  })

  it('Should create a SAVE_USER action', () => {
    const action = actions.SAVE_USER('payload');
    expect(action.type).toBe('SAVE_USER');
    expect(action.payload).toBe('payload');
  })
})
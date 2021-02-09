import authReducer from '../../reducers/auth';

test('should set uid for login', () => {
    const action = {
        type: 'LOGIN',
        uid: '123'
    };
    const state = authReducer(undefined, action);
    expect(state).toEqual({uid:'123'});
});

test('should clear uid for logout', () =>{
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer(undefined,action);
    expect(state).toEqual({})
});
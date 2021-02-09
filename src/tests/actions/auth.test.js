
import { login, logout} from '../../actions/auth';

test('should generate login action object', ()=>{
    const test = login('123');
    expect(test).toEqual({
        type: 'LOGIN',
        uid: '123'
    });
});

test('should generate logout action object', () => {
    const test = logout();
    expect(test).toEqual({
        type: 'LOGOUT'
    });
});
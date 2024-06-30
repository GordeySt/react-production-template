import {
    loginActions,
    loginReducer,
} from 'features/AuthByUsername/model/slice/loginSlice';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

describe('loginSlice', () => {
    test('should set username', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('123123'),
            ),
        ).toStrictEqual({ username: '123123' });
    });

    test('should set password', () => {
        const state: DeepPartial<LoginSchema> = { password: '123' };

        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('123123'),
            ),
        ).toStrictEqual({ password: '123123' });
    });
});

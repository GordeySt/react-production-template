import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from 'features/AuthByUsername/model/selectors/getLoginError/getLoginError';

describe('getLoginError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            login: {
                error: 'error',
            },
        };

        expect(getLoginError(state as StateSchema)).toEqual('error');
    });
});

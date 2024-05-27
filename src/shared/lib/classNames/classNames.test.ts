import { classNames } from './classNames';

describe('className', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        const expectedResut = 'someClass cls1 cls2';
        expect(classNames('someClass', {}, ['cls1', 'cls2'])).toBe(
            expectedResut,
        );
    });

    test('with mods', () => {
        const expectedResut = 'someClass cls1 cls2 hovered scrollable';
        expect(
            classNames('someClass', { hovered: true, scrollable: true }, [
                'cls1',
                'cls2',
            ]),
        ).toBe(expectedResut);
    });

    test('with mods when one is false', () => {
        const expectedResut = 'someClass cls1 cls2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: false }, [
                'cls1',
                'cls2',
            ]),
        ).toBe(expectedResut);
    });

    test('with mods when one is undefined', () => {
        const expectedResut = 'someClass cls1 cls2 hovered';
        expect(
            classNames('someClass', { hovered: true, scrollable: undefined }, [
                'cls1',
                'cls2',
            ]),
        ).toBe(expectedResut);
    });
});

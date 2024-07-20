import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    readonly?: boolean;
    onChange?: (value: Currency) => void;
}

const options = [
    { value: Currency.RUB, content: Currency.RUB },
    { value: Currency.EUR, content: Currency.EUR },
    { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect = memo(
    ({ className, value, onChange, readonly }: CurrencySelectProps) => {
        const onChangeHandler = useCallback(
            (value: string) => {
                onChange?.(value as Currency);
            },
            [onChange],
        );

        return (
            <Select
                className={className}
                value={value}
                onChange={onChangeHandler}
                label="Currency"
                options={options}
                readonly={readonly}
            />
        );
    },
);

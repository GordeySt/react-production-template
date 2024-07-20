import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = ({
    className,
    label,
    options,
    value,
    readonly,
    onChange,
}: SelectProps) => {
    const optionList = useMemo(() => {
        return options?.map((opt) => (
            <option className={cls.option} value={opt.value} key={opt.value}>
                {opt.content}
            </option>
        ));
    }, [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.Wrapper, {}, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                value={value}
                onChange={onChangeHandler}
                className={cls.select}
            >
                {optionList}
            </select>
        </div>
    );
};

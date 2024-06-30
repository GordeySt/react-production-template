import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
    short?: boolean;
}

export const LangSwitcher = memo(({ short }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button
            type="button"
            theme={ButtonTheme.BACKGROUND_INVERTED}
            onClick={toggle}
        >
            {t(short ? 'ShortLang' : 'Lang')}
        </Button>
    );
});

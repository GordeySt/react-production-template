import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

export const LangSwitcher = () => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    };

    return (
        <Button type="button" theme={ThemeButton.CLEAR} onClick={toggle}>
            {t('Translate')}
        </Button>
    );
};

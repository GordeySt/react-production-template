import { Theme, useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

export const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button theme={ButtonTheme.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </Button>
    );
};

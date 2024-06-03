import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import LanguageSelectorStyle from './LanguageSelectorStyle';
import Text from '../Text';
import { theme } from '../../../providers/theme';


interface LanguageSelectorInterface {
  color?: string
}

const LanguageSelector = ({ color }: LanguageSelectorInterface) => {
  const { t, i18n } = useTranslation()

  return (
    <LanguageSelectorStyle>
      <span onClick={() => i18n.changeLanguage("ptbr")}><Text color={color}>{t("portuguese")}</Text></span>
      <Text> | </Text>
      <span onClick={() => i18n.changeLanguage("en")}><Text color={color}>{t("english")}</Text></span>
    </LanguageSelectorStyle>
  )
}

export default LanguageSelector;
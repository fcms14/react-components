import { useTranslation } from 'react-i18next';
import LanguageSelectorStyle from './LanguageSelectorStyle';
import Text from '../Text';

export interface LanguageSelectorInterface {
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
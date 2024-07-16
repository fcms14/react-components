import { useTranslation } from 'react-i18next';
import { Form, Formik } from 'formik';
import { Row } from '../../molecules/Row';
import Radio from '../Radio';

interface Interface {
}

const LanguageSelector = ({ }: Interface) => {
  const { t, i18n } = useTranslation()

  const initialValues = { language: i18n.language }

  return (
    <Formik initialValues={initialValues} onSubmit={() => { }} on>
      <Form>
        <Row.Root>
          <Row.Title> {t("Language")} </Row.Title>
        </Row.Root>
        <Row.Root rowStyle={{ justifyContent: "flex_start" }}>
          <Radio id="language-en" name="language" value="en" label={t("English")} onChange={() => i18n.changeLanguage("en")} />
          <Radio id="language-pt" name="language" value="ptbr" label={t("Portuguese")} onChange={() => i18n.changeLanguage("ptbr")} />
        </Row.Root>
      </Form>
    </Formik>
  )
}

export default LanguageSelector;
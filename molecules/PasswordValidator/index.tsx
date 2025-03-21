import { Row } from '../Row';
import { useTranslation } from 'react-i18next';

interface PasswordValidatorInterface {
  password: string;
}

const PasswordValidator = ({ password }: PasswordValidatorInterface) => {
  const { t } = useTranslation()
  const hasMinLength = password.length >= 8;
  const hasUpperCase = /[A-Z]/.test(password);
  const hasLowerCase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecialChar = /[!@#$%^&*]/.test(password);

  if (hasMinLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
    return <></>
  }

  return (
    <Row.Root rowStyle={{ top: '10px', flexDirection: 'column', alignItems: 'left' }}>
      {!hasMinLength &&
        <Row.Text size={'small'} color={hasMinLength ? 'green' : 'red'}>
          {t("Password must be at least 8 characters long")}
        </Row.Text>
      }
      {!hasUpperCase &&
        <Row.Text size={'small'} color={hasUpperCase ? 'green' : 'red'}>
          {t("Password must contain at least one uppercase letter")}
        </Row.Text>
      }
      {!hasLowerCase &&
        <Row.Text size={'small'} color={hasLowerCase ? 'green' : 'red'}>
          {t("Password must contain at least one lowercase letter")}
        </Row.Text>
      }
      {!hasNumber &&
        <Row.Text size={'small'} color={hasNumber ? 'green' : 'red'}>
          {t("Password must contain at least one number")}
        </Row.Text>
      }
      {!hasSpecialChar &&
        <Row.Text size={'small'} color={hasSpecialChar ? 'green' : 'red'}>
          {t('Password must contain at least one special character')}
        </Row.Text>
      }
    </Row.Root>
  );
};

export default PasswordValidator;

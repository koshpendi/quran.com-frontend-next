import capitalize from 'lodash/capitalize';
import { Translate } from 'next-translate';

import ErrorMessageId from 'types/ErrorMessageId';

const DEFAULT_ERROR_ID = ErrorMessageId.InvalidField;
// const buildTranslatedErrorMessage = (rule: FieldRule, t: Translate, fieldName: string) => {
//   if (Object.values(ErrorMessageId).includes(rule.errorId)) {
//     return t(`validation.${rule.errorId}`, { field: capitalize(fieldName) });
//   }
//   return t(`validation.${DEFAULT_ERROR_ID}`, { field: capitalize(fieldName) });
// };

const buildTranslatedErrorMessageByErrorId = (
  errorId: ErrorMessageId,
  fieldName: string,
  t: Translate,
) => {
  if (Object.values(ErrorMessageId).includes(errorId)) {
    return t(`validation.${errorId}`, { field: capitalize(fieldName) });
  }
  return t(`validation.${DEFAULT_ERROR_ID}`, { field: capitalize(fieldName) });
};

export default buildTranslatedErrorMessageByErrorId;

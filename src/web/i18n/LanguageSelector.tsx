import type { ChangeEventHandler, ReactElement } from 'react'
import { useCallback } from 'react'
import { useTranslation } from 'react-i18next'
import type { LocaleCode } from '.'
import { availableLocales } from '.'

export default function LanguageSelector(): ReactElement {
  const { i18n } = useTranslation()
  console.log('i18n=', i18n)

  const onChangeSelectedLanguage = useCallback<
    ChangeEventHandler<HTMLSelectElement>
  >(
    (event) => void i18n.changeLanguage(event.target.value as LocaleCode),
    [i18n],
  )

  // TODO: Add a localized label for screen readers only
  return (
    <label className="inline-block rounded-lg">
      <select
        className=" bg-white capitalize rounded-lg border-secondary shadow ringed-focus focus:border-secondary focus:ring-inset active:shadow-none"
        defaultValue={i18n.resolvedLanguage}
        onChange={onChangeSelectedLanguage}
      >
        {availableLocales.map(({ code, ownDisplayName }) => (
          <option className="capitalize tpg-controller" key={code} value={code}>
            {ownDisplayName}
          </option>
        ))}
      </select>
    </label>
  )
}

import './index.css'

const LanguageTab = props => {
  const {languageDetails, isActive, updateActiveTabId} = props
  const {id, language} = languageDetails

  const languageBtnClassName = isActive
    ? 'active-language-btn'
    : 'default-language-btn'
  const onClickLanguageBtn = () => {
    updateActiveTabId(id)
  }

  return (
    <li className="language-item">
      <button
        type="button"
        className={languageBtnClassName}
        onClick={onClickLanguageBtn}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageTab

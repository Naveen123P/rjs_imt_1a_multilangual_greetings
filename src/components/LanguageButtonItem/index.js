import {Li, Button} from './styledComponent'

const LanguageButtonItem = props => {
  const {details, changeLanguage, isActive} = props
  const {id, buttonText} = details

  const onClickLanguage = () => {
    changeLanguage(id)
  }

  return (
    <Li>
      <Button isActive={isActive} type="button" onClick={onClickLanguage}>
        {buttonText}
      </Button>
    </Li>
  )
}

export default LanguageButtonItem

import {Component} from 'react'
import LanguageButtonItem from './components/LanguageButtonItem'
import {Bg, Heading, GreetingBg, UnList, Img} from './styledComponent'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLanguage: languageGreetingsList[0].id,
  }

  changeLanguage = id => {
    this.setState({activeLanguage: id})
  }

  render() {
    const {activeLanguage} = this.state
    const activeGreetings = languageGreetingsList.filter(
      each => each.id === activeLanguage,
    )
    return (
      <Bg>
        <Heading>Multilingual Greetings</Heading>
        <UnList>
          {languageGreetingsList.map(each => (
            <LanguageButtonItem
              key={each.id}
              details={each}
              isActive={activeLanguage === each.id}
              changeLanguage={this.changeLanguage}
            />
          ))}
        </UnList>
        <GreetingBg>
          <Img
            src={activeGreetings[0].imageUrl}
            alt={activeGreetings[0].imageAltText}
          />
        </GreetingBg>
      </Bg>
    )
  }
}
export default App

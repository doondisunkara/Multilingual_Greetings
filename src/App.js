import {Component} from 'react'

import LanguageTab from './Component/LanguageTab'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    language: 'ENGLISH',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    language: 'TAMIL',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    language: 'TELUGU',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

const tabItemsList = [
  {id: 'ENGLISH', language: 'English'},
  {id: 'TAMIL', language: 'Tamil'},
  {id: 'TELUGU', language: 'Telugu'},
]

class App extends Component {
  state = {
    activeTabId: tabItemsList[0].id,
  }

  updateActiveTabId = activeTabId => {
    this.setState = {activeTabId}
  }

  renderGreetings = () => {
    const {activeTabId} = this.state
    const filteredGreetings = languageGreetingsList.filter(
      each => each.language === activeTabId,
    )

    return (
      <img
        className="greeting-img"
        src={filteredGreetings[0].imageUrl}
        alt={filteredGreetings[0].imageAltText}
      />
    )
  }

  render() {
    const {activeTabId} = this.state

    return (
      <div className="bg-container">
        <h1 className="main-heading">Multilingual Greetings</h1>
        <ul className="language-list-container">
          {tabItemsList.map(each => (
            <LanguageTab
              languageDetails={each}
              isActive={activeTabId === each.id}
              updateActiveTabId={this.updateActiveTabId}
              key={each.id}
            />
          ))}
        </ul>
        {this.renderGreetings()}
      </div>
    )
  }
}

export default App

import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {heading: 'heading-style', text: 'Light Mode', bg: 'card-bg'}

  onCardStyle = () => {
    const {heading, text, bg} = this.state

    if (
      heading === 'heading-style' &&
      text === 'Light Mode' &&
      bg === 'card-bg'
    ) {
      this.setState({
        heading: 'heading-style1',
        text: 'Dark Mode',
        bg: 'card-bg1',
      })
    } else {
      this.setState({
        heading: 'heading-style',
        text: 'Light Mode',
        bg: 'card-bg',
      })
    }
  }

  render() {
    const {heading, text, bg} = this.state

    return (
      <div className="bg-container">
        <div className={`card-container ${bg}`}>
          <h1 className={heading}>Click To Change Mode</h1>
          <button
            className="btn-style"
            type="button"
            onClick={this.onCardStyle}
          >
            {text}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode

import propTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
  const headerStyles = { backgroundColor: bgColor, color: textColor }
  return (
    <header style={headerStyles}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: '#ffffff44',
  textColor: '#ff00ff',
}

Header.propTypes = {
  text: propTypes.string,
}

export default Header

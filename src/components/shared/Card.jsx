import PropTypes from 'prop-types'
// this is a style component, it will wrap anything that passed in (children)
// and wrap in the stype of this component and that can be use as a new component
// and be used elsewhere

function Card({ children, reverse }) {
  // return <div className={`card ${reverse && 'reverse'}`}>{children}</div> // conditional style

  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? 'black' : '#fff',
        color: reverse ? '#fff' : '#000',
      }}
    >
      {children}
    </div>
  )
}

Card.defaultProps = {
  reverse: false,
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  reverse: PropTypes.bool,
}

export default Card

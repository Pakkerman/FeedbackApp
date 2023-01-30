import Card from '../components/shared/Card'
import { Link } from 'react-router-dom'

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a simple Feedback App project build with React</p>
        <p>Version: 1.0.0</p>
        <p>
          <Link to="/">Back to Homepage</Link>
        </p>
      </div>
    </Card>
  )
}

export default AboutPage

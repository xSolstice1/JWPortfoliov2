import { Timeline } from "../components/Timeline"
import { experiences } from "../constants/constants"

const Experience = () => {
  return (
    <div className="w-full">
        <Timeline data={experiences}/>
    </div>
  )
}

export default Experience
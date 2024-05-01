import ProgressStyle from './ProgressStyle'
import Text from '../Text'

interface ProgressInterface {
  current: number,
  total  : number,
  title  : string,
}

const Progress = ({ title, current, total }: ProgressInterface) => (
  <div>
    <ProgressStyle max={100} value={(current/total) * 100}/>
    <Text size='xs'>{title} <strong> {current}/{total} </strong></Text>
  </div>
)

export default Progress
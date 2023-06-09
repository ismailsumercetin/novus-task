import { FunctionComponent } from "react"
import { TASK_TYPES } from "../constants"
interface IProps {
  task_type: string
  content: string
  name: string
  bio: string
  image: string
}

const TaskCard: FunctionComponent<IProps> = ({
  task_type,
  content,
  name,
  bio,
  image
}) => {
  return (
    <div className="card__taskcard">
      <div className="card__taskcard__header">
        <img alt={name} src={image} />
        <div className="card__taskcard__header__userinfo">
          <div className="username">{name}</div>
          <div className="bio">{bio}</div>
        </div>
      </div>
      <div className="card__taskcard__content">
        {content}
      </div>
      <div className="card__taskcard__footer">
        <span className={`card__taskcard__typeindicator ${task_type}`} />
        <span>{TASK_TYPES[task_type]}</span>
      </div>
    </div>
  );
};

export default TaskCard;

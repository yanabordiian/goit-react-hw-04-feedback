import css from './FeedbackOptions.module.css';
import Button from '../Button/Button';
export default function FeedbackOptions({ options, onLeaveFeedback }) {
    return (
        <ul className={css.list}>
            {Object.keys(options).map(option => (
                <li key={option}>
                    <Button text={option.toLowerCase()} functions={onLeaveFeedback}/>
                </li>
            ))}
        </ul>
    )
}
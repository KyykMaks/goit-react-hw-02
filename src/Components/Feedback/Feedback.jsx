import css from './Feedback.module.css'


export const Feedback = ({ values: { good, neutral, bad }, totalFeedback, positiveFeedback }) => {
    return (
        <ul className = {css.container}>
            <li className = {css.feedback}>Good:{good}</li>
            <li className = {css.feedback}>Neutral:{neutral}</li>
            <li className = {css.feedback}>Bad:{bad}</li>
            <li className = {css.feedback}>Total:{totalFeedback}</li>
            <li className = {css.feedback}>Positive:{positiveFeedback}</li>
        </ul>
    )
}
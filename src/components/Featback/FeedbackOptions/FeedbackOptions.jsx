import PropTypes from "prop-types";

import Button from "../../../shared/Button/Button";

const FeedbackOptions = ({onLeaveFeedback }) => {
    // const elements = options.map(name => <p key={name} >
 return(
 <><Button onClick={() => onLeaveFeedback("good")} type="button">Good</Button>
 <Button onClick={() => onLeaveFeedback("neutral")} type="button">Neutral</Button>
 <Button onClick={() => onLeaveFeedback("bad")} type="button">Bad</Button>
 </>
 )
 
 }

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    onLeaveFeedback: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
}
import { Component } from "react";

import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistic from "./Statistic/Statistic"
import SectionTitle from "./Section title/SectionTitle";
import Notification from "./Notifications/Notificationds";
import styles from ".//featback.module.css"

class Featback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
      }
      leaveFeatback = (name) => {
        this.setState(prevState => {
            return {
                [name]: prevState[name] + 1
            }
        });
    }

    countTotalFeedback() {
        const {good, neutral,bad} = this.state;
        const total = good + neutral + bad;
        return total;
    }
   
    calcFeatbackNumber(propName) {
           const value = this.state[propName]; 
      return value;
  }

  countPositiveFeedbackPercentage(good){
    const total = this.countTotalFeedback();
        if(!total) {
            return 0;
        }
        const positive= this.state.good;
        const rezult = ((positive/total)*100).toFixed()
        return  Number(rezult);
  }

  render(){
    const total = this.countTotalFeedback()
    const rezult= this.countPositiveFeedbackPercentage("good")
    return(<>
        <SectionTitle title = "Please leave featback">
            <div className={styles.option}>
              <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.leaveFeatback}/>
              </div>
        </SectionTitle>
        
        <SectionTitle title = "Statisticks"> 
        {this.countTotalFeedback() > 0 ? (
        <Statistic total ={total} good={this.state.good}  neutral= {this.state.neutral}  bad={this.state.bad}  positivePercentage = {rezult}/> ) : (
            <Notification message="No feedback given" />
          )}
        </SectionTitle>
    
    </>
   
    )
  

}}

export default Featback;
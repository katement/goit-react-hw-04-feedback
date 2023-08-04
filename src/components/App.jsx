import { Component } from 'react';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Feedback } from './Feedback/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = stat => {
    this.setState(prevState => ({
      [stat]: prevState[stat] + 1,
    }));
  };

  countPositiveFeedback = totalStats => {
    const goodResults = this.state.good;

    if (totalStats !== 0) return Math.round((goodResults * 100) / totalStats); //округление
  };

  render() {
    const options = Object.keys(this.state);
    const values = Object.values(this.state);
    const totalStats = values.reduce((acc, el) => (acc += el), 0);

    return (
      <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101',
      // }}
      >
        {/* React homework template */}
        <Section title="Please leave feedback">
          <Feedback options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>
        <Section title="Statistics">
          {totalStats !== 0 ? (
            <Statistics
              stats={this.state}
              totalStats={totalStats}
              positiveFeedbacks={this.countPositiveFeedback(totalStats)}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}

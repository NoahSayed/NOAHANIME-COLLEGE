import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import SpeechSynthesis from 'react-simple-chatbot'; // Ensure dependency is installed
import styled from 'styled-components';


class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentDidMount() {
    this.searchDBPedia();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.steps.search.value !== this.props.steps.search.value) {
      this.searchDBPedia();
    }
  }

  searchDBPedia() {
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = encodeURI('https://dbpedia.org/sparql/');
    const query = encodeURI(`
      select * where {
        ?x rdfs:label "${search}"@en .
        ?x rdfs:comment ?comment .
        FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrl = `${endpoint}?query=${query}&format=json`;

    fetch(queryUrl)
      .then(response => response.json())
      .then(data => {
        const bindings = data.results.bindings;
        if (bindings && bindings.length > 0) {
          this.setState({ loading: false, result: bindings[0].comment.value }, this.triggetNext);
        } else {
          this.setState({ loading: false, result: 'This character is the heart and soul of anime series and movies. They are meticulously crafted to engage viewers emotionally and intellectually, often embodying various archetypes and personality traits. While each anime character is unique, there are certain common characteristics and themes that frequently recur across different series.' });
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        this.setState({ loading: false, result: 'Error fetching data.' });
      });
  }

  triggetNext() {
    this.props.triggerNextStep();
  }

  render() {
    const { loading, result } = this.state;

    return (
        <TextContainer>
          <p>{loading ? <Loading /> : result}</p>
        </TextContainer>
    );
  }
}

DBPedia.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

const BlackChatbotContainer = styled.div`
  /* Include styles from the original ChatbotContainer here */
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 10;
  border-radius: 5px;

  padding: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const TextContainer = styled.div`
  color: black;
`;

const ExampleDBPedia = () => (
  <BlackChatbotContainer>
    <ChatBot
    speechSynthesis={{ enable: true, lang: 'en' }}
      width="400px" // Adjusted width of the Chatbot
      steps={[
        {
          id: '1',
          message: 'What is your name?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'Hi {previousValue}, nice to meet you!',
          trigger: '4',
        },
        {
          id: '4',
          message: 'Ask me Something about Anime',
          trigger: 'search',
        },
        {
          id: 'search',
          user: true,
          trigger: '5',
        },
        {
          id: '5',
          component: <DBPedia />,
          waitAction: true,
          trigger: '4',
        },
      ]}
    />
  </BlackChatbotContainer>
);

export default ExampleDBPedia;
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import styled from 'styled-components';

class DBPedia extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      result: '',
    };

    this.controller = new AbortController(); // Create an AbortController
  }

  componentDidMount() {
    this.searchDBPedia();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.steps.search.value !== this.props.steps.search.value) {
      this.controller.abort(); // Abort previous fetch request
      this.controller = new AbortController(); // Create a new AbortController
      this.searchDBPedia();
    }
  }

  async searchDBPedia() {
    const { steps } = this.props;
    const search = steps.search.value;
    const endpoint = 'https://dbpedia.org/sparql/';
    const query = `
      select * where {
        ?x rdfs:label "${search}"@en .
        ?x rdfs:comment ?comment .
        FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `;

    const queryUrl = `${endpoint}?query=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(queryUrl, {
        signal: this.controller.signal, // Pass signal to fetch to enable aborting
      });
      const data = await response.json();

      const bindings = data.results.bindings;
      if (bindings && bindings.length > 0) {
        this.setState({ loading: false, result: bindings[0].comment.value });
      } else {
        this.setState({ loading: false, result: 'Not found.' });
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        console.log('Previous request aborted');
      } else {
        console.error('Error fetching data:', error);
        this.setState({ loading: false, result: 'Error fetching data.' });
      }
    }
  }

  render() {
    const { loading, result } = this.state;

    return (
      <DBPediaContainer>
        <TextContainer>
          <p>{loading ? <Loading /> : result}</p>
        </TextContainer>
      </DBPediaContainer>
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

const ExampleDBPedia = () => (
  <ChatbotContainer>
    <ChatBot
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
          trigger : '4',
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
  </ChatbotContainer>
);

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 10; // Resetting z-index to what it was before
`;

const DBPediaContainer = styled.div`
  width: auto;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
`;

const TextContainer = styled.div`
  color: black;
`;

export default ExampleDBPedia;

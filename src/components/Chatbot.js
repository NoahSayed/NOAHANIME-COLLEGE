import React, { Component, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ChatBot, { Loading } from 'react-simple-chatbot';
import styled from 'styled-components';

class DBPedia extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true, result: '' };
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
          this.setState({
            loading: false,
            result: 'This character is the heart and soul of anime series and movies. They are meticulously crafted to engage viewers emotionally and intellectually, often embodying various archetypes and personality traits.',
          });
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

const BlackChatbotContainer = styled.div`
  position: fixed;
  bottom: 0;
  right: 20px;
  z-index: 1000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  margin-bottom: 10px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: red;
  color: white;
  padding: 5px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 1001;
`;

const TextContainer = styled.div``;

const StyledButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: black;
  color: white;
  padding: 45px 45px;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  background-image: url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZTkcGX0Mm48hbZtbyP6hD5iiGzqHK8yY9g&s");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

const StyledChatBot = styled(ChatBot)`
  && {
    background-color: #0f0f0f;
    color: white;

    .rsc-header {
      background-color: #5e3a99;
      color: white;
    }

    .rsc-ts-bubble {
      background-color: #5e3a99;
      color: white;
    }

    .rsc-os-option-element {
      background-color: #1a1a1a;
      color: white;
    }

    .rsc-input {
      background-color: #1a1a1a;
      color: white;
      border: none;
    }

    .rsc-container {
      background-color: #0f0f0f;
    }

    .rsc-content {
      scrollbar-width: thin;
      scrollbar-color: #555 #1a1a1a;
    }

    .rsc-content::-webkit-scrollbar {
      width: 8px;
    }

    .rsc-content::-webkit-scrollbar-track {
      background: #1a1a1a;
    }

    .rsc-content::-webkit-scrollbar-thumb {
      background-color: #555;
      border-radius: 4px;
    }

    .rsc-content::-webkit-scrollbar-thumb:hover {
      background: #888;
    }

    .rsc-footer {
      background-color: #1a1a1a;
    }

    .rsc-ts-avatar {
      background-color: transparent;
    }
  }
`;

const ExampleDBPedia = ({ openExternally }) => {
  const [showChat, setShowChat] = useState(false);

  useEffect(() => {
    if (openExternally) {
      setShowChat(true);
    }
  }, [openExternally]);

  const handleOpen = () => setShowChat(true);
  const handleClose = () => setShowChat(false);

  return (
    <>
      {!openExternally && (
        <StyledButton onClick={handleOpen} />
      )}
      {showChat && (
        <BlackChatbotContainer>
          <CloseButton onClick={handleClose}>X</CloseButton>
          <StyledChatBot
            speechSynthesis={{ enable: true, lang: 'en' }}
            width="400px"
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
                message: 'Ask me something about anime.',
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
      )}
    </>
  );
};

export default ExampleDBPedia;

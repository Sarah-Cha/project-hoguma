import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testEmotionCount, testWordCount } from '../../actions';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

const WordDiv = styled.div`
  align-items: center;
  border: 5px solid black;
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 100%;
  }
  @media (min-width: 481px) and (max-width: 767px) {
    width: 100%;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    width: 100%;
  }
`;
const WordButton = styled.button`
  width: 100%;
  font-size: 1vw;
  background-color: #a16ef5;
  background-size: auto;
  &:active {
    background-color: yellow;
  }
`;
function WordItems(props) {
  const emotionCount = useSelector((state) => state.test.emotionCount);
  const wordCount = useSelector((state) => state.test.wordCount);
  const dispatch = useDispatch();

  function FormRow(props) {
    const wordList = props.words.map((word, index) => (
      <Grid key={index} item xs={3}>
        <WordDiv key={index}>
          <WordButton
            key={index}
            id={`word${word[0]}`}
            value={word[1]}
            onClick={(event) => {
              emotionCount[event.target.value] += 1;
              dispatch(testEmotionCount(emotionCount));
              dispatch(testWordCount(wordCount + 1));
              // console.log(emotionCount);
            }}
          >
            {word[2]}
          </WordButton>
        </WordDiv>
      </Grid>
    ));
    return <React.Fragment>{wordList}</React.Fragment>;
  }

  return (
    <div>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          <FormRow words={props.words} qNumber={props.qNumber} />
        </Grid>
      </Grid>
    </div>
  );
}

export default WordItems;

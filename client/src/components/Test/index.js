import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { testPage, testUserName } from '../../actions';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

// 제목 컴포넌트
const TestTitle = styled.h1`
  font-size: 3vw;
  margin-top: 0;
  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;
// 제목 설명 컴포넌트
const TestParagraph = styled.p`
  font-size: 2vw;
`;
// 사용자 정보 & 버튼 컨테이너
const FormContainer = styled.div`
  padding-top: 5vh;
  padding-bottom: 5vh;
`;
// 콘텐츠 컨테이너
const ContentContainer = styled.div`
  align-items: center; /* 세로에서 가운데에 요소를 배치하겠다 */
  padding-top: 20vh;
`;
const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

function TestMain(props) {
  // User Name 입력 값 확인 메소드
  const userName = useSelector((state) => state.test.name);
  const dispatch = useDispatch();

  const classes = useStyles();

  const handleChange = (e) => {
    dispatch(testUserName(e.target.value));
  };

  return (
    <ContentContainer>
      <TestTitle>하이킥 연결고리를 만들어보자.</TestTitle>
      <TestParagraph>
        몇 가지 테스트를 진행해보세요.
        <br />
        나의 하이킥 중독성 수준을 알아볼 수 있거나 <br />
        본인의 성향과 맞는 하이킥 등장인물을 찾아보세요.
        <br />
      </TestParagraph>
      <FormContainer>
        <form
          onSubmit={() => console.log('테스트 시작.')}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-basic"
            label="이름을 입력해주세요."
            name="name"
            value={userName}
            onChange={handleChange}
          />
        </form>
      </FormContainer>
      <Button
        className={classes.button}
        disabled={!userName}
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(testPage(6));
        }}
      >
        중독성 테스트
      </Button>
      <Button
        className={classes.button}
        disabled={!userName}
        type="submit"
        variant="contained"
        color="primary"
        onClick={() => {
          dispatch(testPage(2));
        }}
      >
        관련성 테스트
      </Button>
    </ContentContainer>
  );
}

export default TestMain;

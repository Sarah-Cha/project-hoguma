const gameReducer = (
  state = {
    number: 0,
    description: '',
    page: 0,
    selected: {
      key: '0',
      number: '0',
      nickname: '',
      quote: '사진을 눌러 하이킥 추억을 꺼내보세요!',
      description: [
        '거침없이 하이킥의 명장면 !',
        '데이터 분석으로 도출된 하이킥의 재밌는 사실들을 알아보세요',
      ],
    },
  },
  action,
) => {
  switch (action.type) {
    case 'GAME_NUMBER':
      return { ...state, number: action.payload };
    case 'GAME_DESCRIPTION':
      return { ...state, description: action.payload };
    case 'GAME_PAGE':
      return { ...state, page: action.payload };

    case 'GAME_SELECTED':
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};
export default gameReducer;

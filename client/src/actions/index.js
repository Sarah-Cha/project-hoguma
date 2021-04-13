export const home = (selected) => {
  return {
    type: 'HOME',
    selected: selected,
  };
};

export const gameNumber = (payload) => {
  return {
    type: 'GAME_NUMBER',
    payload, // 유저가 뽑은 뽑기게임 숫자
  };
};

export const gameDescription = (payload) => {
  return {
    type: 'GAME_DESCRIPTION',
    payload, // 유저가 뽑은 뽑기게임 숫자 관련 설명
  };
};

export const gamePage = (payload) => {
  return {
    type: 'GAME_PAGE',
    payload, //게임 페이지 현재 페이지 번호
  };
};
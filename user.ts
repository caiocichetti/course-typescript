// accountInfo
// charInfo
// PlayerInfo

type AccountInfo = {
  id: number | string;
  name: string;
  email?: string; // ? optional
};

const account: AccountInfo = {
  id: 123,
  name: 'Caio',
};

type charInfo = {
  nickname: string;
  level: number;
};

const char: charInfo = {
  nickname: 'caiocichetti',
  level: 100,
};

// Intersection
type PlayerInfo = AccountInfo & charInfo;

const player: PlayerInfo = {
  id: '123',
  name: 'Caio',
  nickname: 'caiocichetti',
  level: 100,
};

// type alias
type Uid = number | string;

function logDetails(uid: Uid, item: string) {
  console.log(`A product with ${uid} has a title as ${item}`);
}

function logInfo(uid: Uid, user: string) {
  console.log(`An user with ${uid} has a name as ${user}`);
}

type Platform = 'Windows' | 'Linux' | 'Mac OS' | 'ios';

function renderPlatform(platform: Platform) {
  return platform;
}

logDetails(123, "shoes");
logDetails("123", "shoes");

logInfo(123, "Caio");
logInfo("123", "Caio");

renderPlatform("ios");

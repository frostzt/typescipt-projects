import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";

const reader = new MatchReader("football.csv");
reader.read();

let manUnitedWins = 0;
for (let match of reader.data) {
  if (match[1] === "Man United" && match[5] === MatchResults.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatchResults.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games!`);

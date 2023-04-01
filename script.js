// Random Message Generator

const message = {
    zodiac: ['ram', 'bull', 'twins', 'crab', 'lion', 'virgin', 'balance', 'scorpion', 'archer', 'goat', 'water bearer', 'fish'],
    words: ['agile', 'energetic', 'cheeky', 'smart', 'foolish', 'quiet', 'lazy', 'tired', 'hungry'],
    friends: ['loved', 'hated', 'missed', 'feeded', 'kicked', 'punshed', 'instructed'],
    ranZodiac() {
        const randNum = Math.floor(Math.random() * this.zodiac.length);
        const randZodiac = this.zodiac[randNum];
        return randZodiac;
    },
    randWords() {
        const randNum = Math.floor(Math.random() * this.words.length);
        const randWords = this.words[randNum];
        return randWords;
    },
    randFriends() {
        const randNum = Math.floor(Math.random() * this.friends.length);
        const randFriends = this.friends[randNum];
        return randFriends;
    },
    randMessage() {
        return `The ${this.ranZodiac()} is ${this.randWords()} and ${this.randWords()}. That is why he is ${this.randFriends()} by his friends and relatives.`;
    }
}

console.log(message.randMessage());
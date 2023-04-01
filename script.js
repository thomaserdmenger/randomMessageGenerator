// Random Message Generator

const message = {
    zodiac: ['ram', 'bull', 'twins', 'crab', 'lion', 'virgin', 'balance', 'scorpion', 'archer', 'goat', 'water bearer', 'fish'],
    words: ['agile', 'energetic', 'cheeky', 'smart', 'foolish', 'quiet', 'lazy', 'tired', 'hungry'],
    friends: ['loved', 'hated', 'missed', 'feeded', 'kicked', 'punshed', 'instructed'],
    randNum(arr) {
        return Math.floor(Math.random() * arr.length);
    },
    ranZodiac() {
        const randZodiac = this.zodiac[this.randNum(this.zodiac)];
        return randZodiac;
    },
    randWords() {
        const randWords = this.words[this.randNum(this.words)];
        return randWords;
    },
    randFriends() {
        const randFriends = this.friends[this.randNum(this.friends)];
        return randFriends;
    },
    randMessage() {
        return `The ${this.ranZodiac()} is ${this.randWords()} and ${this.randWords()}. That is why he is ${this.randFriends()} by his friends and relatives.`;
    }
}

console.log(message.randMessage());

//todo Q1: Remove all state names starting with vowels
const states = ["Andhra Pradesh", "Bihar", "Odisha", "Uttar Pradesh", "Maharashtra", "Assam", "Tamil Nadu", "Kerala"];
const filteredStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(filteredStates);
console.log('\n');


//todo Q2: Reverse words in a string
let str = 'I love my India';
console.log(str.split(' ').reverse().join(' '));
console.log('\n');
;

//todo Q3: Modify 'INDIA' to 'INDONESIA' using splice
let stringArr = ['I', 'N', 'D', 'I', 'A'];
stringArr.splice(3, 2, 'O', 'N', 'E', 'S', 'I', 'A');
console.log(stringArr.join(''));
console.log('\n');


//todo Q4: Count consonants and vowels in a string
function countVowelsConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    console.log(`Vowels: ${vowels}, Consonants: ${consonants}`);
}
countVowelsConsonants("This is a long string with more than 20 characters.");
console.log('\n');


//todo Q5: Replace incorrect word in a sentence
function correctfn(string, wrong, correct) {
    return string.replace(new RegExp(wrong, 'g'), correct);
}
console.log(correctfn("I love my country. My country is best.", "country", "India"));
console.log('\n');


//todo Q6: Filter numbers greater than 5
const inputArr = [1, 2, 3, 9, 10, 7, 5, 4, 3];
console.log(inputArr.filter(num => num > 5));
console.log('\n');


//todo Q7: Calculate average scores using map and reduce
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] }
];
const result = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
}));
console.log(result);
console.log('\n');


//todo Q8: Sum digits until a single digit remains
function repeatedSum(num) {
    while (num >= 10) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
    }
    return num;
}
console.log(repeatedSum(456));
console.log('\n');


//todo Q9: Count words in a paragraph
function countWords(paragraph) {
    return paragraph.split(/\s+/).length;
}
console.log(countWords("This is an example paragraph with multiple words."));
console.log('\n');


//todo Q10: Reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Hello"));
console.log('\n');


//todo Q11: Calculate average of student scores
const studentScores = {
    student1: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student2: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 },
    student3: { subject1: 44, subject2: 56, subject3: 87, subject4: 97, subject5: 37 }
};
const averages = Object.fromEntries(Object.entries(studentScores).map(([student, subjects]) => {
    const scores = Object.values(subjects);
    return [student, { average: scores.reduce((sum, score) => sum + score, 0) / scores.length }];
}));
console.log(averages);
console.log('\n');


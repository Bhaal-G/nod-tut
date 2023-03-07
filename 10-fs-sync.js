const {readFileSync, writeFileSync}=require('fs');

// const first=readFileSync('c:/LANGUAGESVS coding practice and projects\nodejs\content\subfolder\test.txtcls','utf-8');
const first=readFileSync('./content/subfolder/first.txt','utf-8')

const second=readFileSync('./content/subfolder/second.txt','utf-8')

console.log(first,second)
// console.log('hello')

writeFileSync(
    './content/subfolder/result-sync.txt',
    `Here is the result : ${first}, ${second}`,
    {flag:'a'}
)
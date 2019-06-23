var sentence = 'good afternoon, mr mike.';
function convertSentence(message) {
 var arr,arr2; 
 arr =message.toLowerCase().split(" ");
 for(var i=0;i<arr.length;i++){
 arr[i] = arr[i][0].toUpperCase()+arr[i].substring(1,arr[i].length);
 }
 arr2 = arr.join(" ");
 return arr2;
}
sentence=convertSentence(sentence);
console.log(sentence);

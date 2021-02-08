let colorbox = {
    color: ['green', 'yellow', 'red', 'orange'],
    content: 'My first blogpost'
};
console.log(colorbox);
colorbox.hasManyColors = true;
console.log(colorbox.hasManyColors);
if(colorbox.hasManyColors === 3){
    console.log(colorbox.hasManyColors = true);
}
else{
    console.log(colorbox.hasManyColors = false);
}

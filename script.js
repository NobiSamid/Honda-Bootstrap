
const getButton = document.getElementById('update-btn').addEventListener
('click', function(){
    const getInputField = document.getElementById('new-comment');
    const inputValue = getInputField.value;
    console.log(inputValue);
    getInputField.value = '';
    const getPrevComment = document.getElementById('comment-box')
    const commentText = getPrevComment.innerText;
    getPrevComment.innerText = inputValue;
    console.log(commentText);

})
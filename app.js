const correctAnswers = ['A','A', 'A', 'A', 'A','A','A','A', 'A', 'A'];
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    e.preventDefault();
    let count = 0;
    const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, 
    form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    //check answers
    userAnswers.forEach((answer, index) => {
        if(answer === correctAnswers[index]){
            count += 10;
        }
    });
    if(count >= 0 && count <= 30){
        result.innerHTML = `<span> </span> <br> You are hardly familiar with hip-hop culture`;
    } else if(count > 30 && count <= 60){
        result.innerHTML = `<span> </span> <br> You have a basic knowledge of the hip-hop culture`;
    } else if(count > 60 && count <= 80){
        result.innerHTML = `<span> </span> <br> You are very familiar with hip-hop culture`;
    } else {
        result.innerHTML = `<span> </span> <br> You are a hip-hop game connoisseur`;
    }
    scrollTo(0,250);

    let output = 0;
    const timer = setInterval(() => {
        result.querySelector('span').textContent = `You have ${output}% of correct answers`;
        if(output === count){
            clearInterval(timer);
        } else {
            output++;
        }
    }, 10);
});



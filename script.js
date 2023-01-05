// Using iteration, write a function fibs which takes a number and returns an array containing that many numbers from the fibonacci sequence.
//  Using an example input of 8, this method should return the array [0, 1, 1, 2, 3, 5, 8, 13].
// Now write another method fibsRec which solves the same problem recursively.
//  This can be done in just a couple of lines
//   (or 1 if you’re crazy, but don’t consider either of these lengths a requirement… just get it done).

const answer = document.getElementById('answer')
const answerRec = document.getElementById('answerRec')
const input = document.getElementById('userInput')

function fibs(num) { 
    const fibSequence = [0,1]
    for (i = 2; i < num; i++) { 
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2])
    }
    return fibSequence
}

input.addEventListener('input', () => {
    answerRec.textContent = `[${fibsRec(Number(input.value)).join(', ')}]`
})

function fibsRec(num) { 
    if (num === 1) return [0];
    if (num === 2) return [0,1];
    const less = fibsRec(num - 1)
    return [...less, less[num - 2] + less[num - 3]]
}



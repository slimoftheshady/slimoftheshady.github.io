const writing = [
    "Hello, My Name is"
];

let writingindex = 0;
let index = 0;
let writtenNow = writing[writingindex];
let typingForward = true;

function write() {
    if (typingForward) {
        document.getElementById("appear_text").textContent = writtenNow.substring(0, index);
        index++;
        if (index > writtenNow.length) {
            typingForward = false;
            setTimeout(write, 1000); 
        } else {
            setTimeout(write, 300);  /*speed of text where less is faster, top is fallback */
        }
    } 

/* this removes the text after
    else {
        document.getElementById("appear_text").textContent = writtenNow.substring(0, index);
        index--;
        if (index < 0) {
            typingForward = true;
            writingindex = (writingindex + 1) % writing.length;
            writtenNow = writing[writingindex];
            setTimeout(write, 1000); 
        } else {
            setTimeout(write, 50);
        }
    } */
}

write(); // Start the typing effect when the page loads
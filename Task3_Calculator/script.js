const screen = document.getElementById('screen');

function calculateResult() {
    try {
        
        screen.value = eval(screen.value);
    } catch (error) {
        
        screen.value = "Error";
    }
}
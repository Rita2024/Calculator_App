function appendValue(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const current = document.getElementById("display").value;
    document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
    try {
        const result = eval(document.getElementById("display").value);

        document.getElementById("display").value = result;
    } catch (error) {
        alert("Invalid expression. Please check your input.");
        console.error("Error in calculation:", error);
    }
    
}
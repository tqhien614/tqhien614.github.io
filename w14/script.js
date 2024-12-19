function calculateTDEE() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const activityLevel = parseFloat(document.getElementById("activity").value);

    if (!weight || !height || !age || !activityLevel) {
        document.getElementById("message").textContent = "Please fill in all fields!";
        return;
    }

    // Calculate BMR using Mifflin-St Jeor Equation
    const bmr = 10 * weight + 6.25 * height - 5 * age + 5; // Male formula
    const tdee = bmr * activityLevel;

    document.getElementById("message").textContent = `Your TDEE is approximately ${Math.round(tdee)} kcal/day.`;
}

function showTip() {
    const tips = [
        "Stay consistent with your workouts!",
        "Hydrate well throughout the day.",
        "Focus on proper form during exercises.",
        "Include rest days in your routine.",
        "Set realistic and measurable fitness goals."
    ];
    const randomTip = tips[Math.floor(Math.random() * tips.length)];
    document.getElementById("tip").textContent = randomTip;
}
function marsheet(eng, maths, chemistry, physics, computer, marks) {
    var totnumbers = (eng + maths + chemistry + physics + computer);
    var percen = (totnumbers / (5 * marks)) * 100; // calculate the percentage correctly
    console.log("Total Numbers: ", totnumbers);
    console.log("Percentage is:  ", percen);
    if (percen <= 100 && percen >= 80) {
        console.log("Your Grade is A+ ", "..... Brilliant Student ");
    }
    else if (percen <= 79 && percen >= 70) {
        console.log("Your Grade is A", "  ..... Star Student ");
    }
    else if (percen <= 69 && percen >= 60) {
        console.log("Your Grade is B", "   .... Good Student");
    }
    else if (percen <= 59 && percen >= 50) {
        console.log("Your Grade is C", "   .... Satisfactory Student");
    }
    else if (percen <= 49 && percen >= 40) {
        console.log("Your Grade is D ..... Need Improvement");
    }
    else {
        console.log("You are Failed....... Very Disappointing .... ");
    }
}
marsheet(55, 68, 75, 55, 62, 100); // calling the function with example inputs

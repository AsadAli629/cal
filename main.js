$(document).ready(function () {
    const display = $(".display");
    const buttons = $("button");
    const specialChars = ["%", "*", "/", "+", "-", "="];
    let output = "";

    const calculate = (btnValue) => {
        if (btnValue === "=" && output !== "") {
            try {
                output = Function('"use strict";return (' + output.replace(/%/g, "/100") + ')')();
            } catch (error) {
                output = "Error";
            }
        } else if (btnValue === "AC") {
            output = "";
        } else if (btnValue === "DEL") {
            output = output.toString().slice(0, -1);
        } else {
            if (output === "" && specialChars.includes(btnValue)) return;
            output = output + btnValue;
        }
        display.val(output);
    };

    buttons.on("click", function (e) {
        const btnValue = $(this).data("value");
        calculate(btnValue);
    });
});

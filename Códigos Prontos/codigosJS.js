// Gera um ID aleatório com letras e números.
function randomID() {
    return Math.random().toString(36).substring(2, 9);
}

// Seleciona a data atual.
const currentDate = {
    fullDate: new Date(),
    dayOfTheMonth: function () {
        return this.fullDate.getDate();
    },
    currentMonth: function () {
        return this.fullDate.getMonth() + 1;
    },
    currentYear: function () {
        return this.fullDate.getFullYear();
    },
    dayOfTheWeek: function () {
        return this.fullDate.getDay() + 1;
    },
};

// Seleciona o numero de dias do mês atual, ou de um mês informado.
function numberOfDaysInAMonth(month, year) {
    if (month && year) {
        return new Date(year, month, 0).getDate();
    } else {
        return new Date(
            new Date().getFullYear(),
            new Date().getMonth() + 1,
            0
        ).getDate();
    }
}

// Converte RGB para Hexadecimal e vice e verça.
function converterColor(color) {
    // Expect RGB = ['255', '255', '255'] or HEX = 'ffffff'.
    if (typeof color === "string") {
        let hex = [];
        color.match(/[0-9a-f]{2}/g).forEach(function (arr) {
            hex.push(("000" + parseInt(arr, 16)).slice(-3));
        });
        return hex;
    } else {
        let rgb;
        color.forEach(function (arr) {
            rgb =
                (rgb || "") + ("00" + parseInt(arr, 10).toString(16)).slice(-2);
        });
        return rgb;
    }
}
console.log(new Date(2022, 9, 0).getDay());

const upperset = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerset = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const specialset = "~!@#$%^&*()_+={}[]|:;'`<>,./?";

// selectors
const password = document.getElementById("PASSWORD");
const elements = document.getElementById("number");
const upper = document.getElementById("Uppercase");
const lower = document.getElementById("Lowercase");
const digit = document.getElementById("digit");
const special = document.getElementById("Special");
const button = document.getElementById("Generate");

function getRandom(dataSet) {
    return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function generatePassword(ans) {
    if (!upper.checked && !lower.checked && !special.checked && !digit.checked) {

      ans = "Select a box"
        return ans;
    }


    if (ans.length == elements.value) {
        return ans;
    }

    if (upper.checked && ans.length < elements.value) {
        ans += getRandom(upperset);
    }

    if (ans.length == elements.value) {
        return ans;
    }

    if (lower.checked && ans.length < elements.value) {
        ans += getRandom(lowerset);
    }

    if (ans.length == elements.value) {
        return ans;
    }

    if (digit.checked && ans.length < elements.value) {
        ans += getRandom(number);
    }

    if (ans.length == elements.value) {
        return ans;
    }

    if (special.checked && ans.length < elements.value) {
        ans += getRandom(specialset);
    }

    if (ans.length == elements.value) {
        return ans;
    }

    if (ans.length < elements.value) {
        return generatePassword(ans);
    }
}

button.addEventListener("click", () => {
    const temp = generatePassword("");
    console.log(temp);
    password.value = temp;
});

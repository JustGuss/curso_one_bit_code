import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import { handleButtonPress } from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";
import { handleClearButton } from "./keyHandlers.js";
import { handleTyping } from "./keyHandlers.js";


document.querySelectorAll('.charKey').forEach(function (charKeyBtn) {
    charKeyBtn.addEventListener('click', handleButtonPress);
    })

document.querySelector('#clear').addEventListener('click', handleClearButton);

document.querySelector('#input').addEventListener('keydown', handleTyping);

document.querySelector('#equal').addEventListener('click', calculate);

document.querySelector('#copyToClipboard').addEventListener('click', copyToClipboard);

document.querySelector('#themeSwitcher').addEventListener('click', themeSwitcher);
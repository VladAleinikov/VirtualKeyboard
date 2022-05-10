document.body.innerHTML = `
      <section>
     
      <textarea name="text" id="text" cols="50" rows="10"></textarea>

      <div class="keyboard">
       <div  id="language"></div>
            <div class="key" id="\` ~">
                  <div class="prefix">~</div>
                  \`
            </div >
            <div class="key" id="1 !">
                  <div class="prefix">!</div>
                  1
            </div>
            <div class="key" id="2 @">
                  <div class="prefix">@</div>
                  2
            </div>
            <div class="key" id="3 #">
                  <div class="prefix">#</div>
                  3
            </div>
            <div class="key" id="4 $">
                  <div class="prefix">$</div>
                  4
            </div>
            <div class="key" id="5 %">
                  <div class="prefix">%</div>
                  5
            </div>
            <div class="key" id="6 :">
                  <div class="prefix">:</div>
                  6
            </div>
            <div class="key" id="7 ;">
                  <div class="prefix">;</div>
                  7
            </div>
            <div class="key" id="8 *">
                  <div class="prefix">*</div>
                  8
            </div>
            <div class="key" id="9 (">
                  <div class="prefix">(</div>
                  9
            </div>
            <div class="key" id="0 )">
                  <div class="prefix">)</div>
                  10
            </div>
            <div class="key" id="- _">
                  <div class="prefix">_</div>
                  -
            </div>
            <div class="key" id="= +">
                  <div class="prefix">+</div>
                  =
            </div>
            <div class="key" id="backspace">Backspace</div>


            
            <div class="key" id="tab">Tab</div>
            <div id="row1">

            </div>
            <div class="key" id="\\ /">
                  <div class="prefix">/</div>
                  \\
            </div>
            <div class="key" id="delete">DEL</div>



            <div class="key" id="caps">Caps Lock</div>
            <div id="row2">

            </div>
            
            <div class="key" id="enter">Enter</div>



            <div class="key" id="ShiftLeft">Shift</div>
            <div class="key keyLetter">|</div>
            <div id="row3">

            </div>
           
            <div class="key keyLetter">/</div>
            <div class="key" id="ArrowUp"><img src="../assets/icons/up.svg" alt="up"></div> 
            <div class="key" id="ShiftRight">Shift</div>


            <div class="key" id="ControlLeft">Ctrl</div>
            <div class="key" id="win">Win</div>
            <div class="key" id="AltLeft">Alt</div>
            <div class="key" id="space"> </div>
            <div class="key" id="AltRight">Alt</div>
            <div class="key" id="ControlRight">Ctrl</div>
            <div class="key" id="ArrowLeft"><img src="../assets/icons/left.svg" alt="left"></div>
            <div class="key" id="ArrowDown"><img src="../assets/icons/down.svg" alt="down"></div>
            <div class="key" id="ArrowRight"><img src="../assets/icons/right.svg" alt="right"></div>
           
      </div >
      </section >
`;
let language = localStorage.getItem('language');
language = language == 'en' ? 'ru' : 'en'
if (language == '')
      localStorage.setItem('language', 'en');

const setLanguage = () => {
      language = language == 'en' ? 'ru' : 'en'
      document.querySelector("#row1").innerHTML = (language == 'en') ?
            `                  <div class="key keyLetter">Q</div>
                  <div class="key keyLetter">W</div>
                  <div class="key keyLetter">E</div>
                  <div class="key keyLetter">R</div>
                  <div class="key keyLetter">T</div>
                  <div class="key keyLetter">Y</div>
                  <div class="key keyLetter">U</div>
                  <div class="key keyLetter">I</div>
                  <div class="key keyLetter">O</div>
                  <div class="key keyLetter">P</div>
                  <div class="key keyLetter">[</div>
                  <div class="key keyLetter">]</div>
                  ` :
            `                  <div class="key keyLetter">Й</div>
                  <div class="key keyLetter">Ц</div>
                  <div class="key keyLetter">У</div>
                  <div class="key keyLetter">К</div>
                  <div class="key keyLetter">Е</div>
                  <div class="key keyLetter">Н</div>
                  <div class="key keyLetter">Г</div>
                  <div class="key keyLetter">Ш</div>
                  <div class="key keyLetter">Щ</div>
                  <div class="key keyLetter">З</div>
                  <div class="key keyLetter">Х</div>
                  <div class="key keyLetter">Ъ</div>
                  `;
      document.querySelector("#row2").innerHTML = (language == 'en') ?
            `                  <div class="key keyLetter">A</div>
                  <div class="key keyLetter">S</div>
                  <div class="key keyLetter">D</div>
                  <div class="key keyLetter">F</div>
                  <div class="key keyLetter">G</div>
                  <div class="key keyLetter">H</div>
                  <div class="key keyLetter">J</div>
                  <div class="key keyLetter">K</div>
                  <div class="key keyLetter">L</div>
                  <div class="key keyLetter">;</div>
                  <div class="key keyLetter">'</div>
                  `:
            `                  <div class="key keyLetter">Ф</div>
                  <div class="key keyLetter">Ы</div>
                  <div class="key keyLetter">В</div>
                  <div class="key keyLetter">А</div>
                  <div class="key keyLetter">П</div>
                  <div class="key keyLetter">Р</div>
                  <div class="key keyLetter">О</div>
                  <div class="key keyLetter">Л</div>
                  <div class="key keyLetter">Д</div>
                  <div class="key keyLetter">Ж</div>
                  <div class="key keyLetter">Э</div>
                  `;
      document.querySelector("#row3").innerHTML = (language == 'en') ?
            `                  <div class="key keyLetter">Z</div>
                  <div class="key keyLetter">X</div>
                  <div class="key keyLetter">C</div>
                  <div class="key keyLetter">V</div>
                  <div class="key keyLetter">B</div>
                  <div class="key keyLetter">N</div>
                  <div class="key keyLetter">M</div>
                  <div class="key keyLetter">,</div>
                  <div class="key keyLetter">.</div>
                  `:
            `                  <div class="key keyLetter">Я</div>
                  <div class="key keyLetter">Ч</div>
                  <div class="key keyLetter">С</div>
                  <div class="key keyLetter">М</div>
                  <div class="key keyLetter">И</div>
                  <div class="key keyLetter">Т</div>
                  <div class="key keyLetter">Ь</div>
                  <div class="key keyLetter">Б</div>
                  <div class="key keyLetter">Ю</div>
                  `;
      languageBlock.innerHTML = language + ' (стандартное сочетание клавиш)';
      localStorage.setItem('language', language);
      letterKeys = [...document.querySelectorAll(".keyLetter")];
      letterKeys.forEach(e => {
            e.addEventListener("click", e => {

                  let i = getTextaeraPos();
                  let str = textarea.value;
                  textarea.value = str.substring(0, i) + ((caps) ?
                        e.target.innerHTML.toUpperCase() :
                        e.target.innerHTML.toLowerCase()) + str.substring(i, str.length )

                  textarea.setSelectionRange(++i, i);

            })
      });
}
function runOnKeys(func, ...codes) {
      let pressed = new Set();

      document.addEventListener('keydown', function (event) {
            pressed.add(event.code);

            for (let code of codes) {
                  if (!pressed.has(code)) {
                        return;
                  }
            }
            pressed.clear();
            func();
      });

      document.addEventListener('keyup', function (event) {
            pressed.delete(event.code);
      });

}
const getTextaeraPos = () => {
      textarea.focus();

      if (document.selection) { // IE
            var sel = document.selection.createRange();
            var clone = sel.duplicate();
            sel.collapse(true);
            clone.moveToElementText(textarea);
            clone.setEndPoint('EndToEnd', sel);
            return clone.text.length;
      } else if (textarea.selectionStart !== false) return textarea.selectionStart; // Gecko
      else return 0;
}
var caps = false;
let letterKeys = [...document.querySelectorAll(".keyLetter")];
const textarea = document.getElementById("text");
const languageBlock = document.getElementById("language");
const capslock = document.getElementById('caps');
let prefixKeys = [...document.querySelectorAll(".key")].filter((e) => (e.innerHTML.indexOf("prefix") != -1) ? e : null)

prefixKeys.forEach(e => {
      e.addEventListener("click", (event) => {
            let i = getTextaeraPos();
            let str = textarea.value;
            let symbol = (event.shiftKey) ? e.getAttribute("id").split(' ')[1] :
                  e.getAttribute("id").split(' ')[0];
            textarea.value = str.substring(0, i) + symbol + str.substring(i, str.length)

            textarea.setSelectionRange(++i, i);
      })
});
capslock.addEventListener("click", e => {
      capslock.classList.toggle("active")
      caps = !caps;
})
document.getElementById("backspace").addEventListener("click", (event) => {
      let i = getTextaeraPos();
      let str = textarea.value;
      textarea.value = str.substring(0, i - 1) +  str.substring(i, str.length)

      textarea.setSelectionRange(++i, i);
})
document.getElementById("delete").addEventListener("click", (e) => {
      let i = getTextaeraPos();
      let str = textarea.value;
      textarea.value = str.substring(0, i ) + str.substring(i + 1, str.length)

      textarea.setSelectionRange(i, i);
})
document.getElementById("tab").addEventListener("click", (e) => {
      let i = getTextaeraPos();
      let str = textarea.value;
      textarea.value = str.substring(0, i) + '\t' + str.substring(i , str.length)

      textarea.setSelectionRange(++i, i);
})
document.getElementById("enter").addEventListener("click", e => {
      let i = getTextaeraPos();
      let str = textarea.value;
      textarea.value = str.substring(0, i) + '\n' + str.substring(i, str.length)

      textarea.setSelectionRange(++i, i);
})
const getNumOfSymbols = (symbol, str, before, position) => {
      let i = 0;
      str.split('').forEach((e, index) => {
            if (before) {
                  if (e == symbol && index < position)
                        i++;
            }
            else
                  if (e == symbol && index > position)
                        i++;
                        
      })
      return i;
}
document.getElementById("ArrowLeft").addEventListener("click", e => {
      let i = getTextaeraPos();
      if (e.ctrlKey) {
            let str = textarea.value;
            if (str[i - 1] == ' ')
                  i--;
            let wordNum = getNumOfSymbols(' ', str, true, i);

            let len = 0;
            for (let index = 0; index < wordNum; index++) 
                  len += str.split(' ')[index].length; 
                  
            
            i = (len  == 0) ? 0 : len +1;
      }
      else
            i--;
      textarea.setSelectionRange(i, i);
})
document.getElementById("ArrowRight").addEventListener("click", e => {
      let i = getTextaeraPos();
      if (e.ctrlKey) {
            let str = textarea.value;
            if (str[i + 1] == ' ')
                  i++;
            let wordNum = getNumOfSymbols(' ', str, true, i);

            let len = 0;
            for (let index = 0; index <= wordNum; index++)
                  len += str.split(' ')[index].length;


            i = len;
      }
      else
            i++;
      textarea.setSelectionRange(i, i);
})
document.getElementById("ArrowUp").addEventListener("click", e => {
      let i = getTextaeraPos();
      let str = textarea.value;
      if (!e.ctrlKey && str.split('\n')[0].length < i) {
            

            let rowNum = getNumOfSymbols('\n', str, true, i);
            console.log(rowNum);
            let len = 0;
            for (let index = 0; index < rowNum; index++)
                  len += str.split('\n')[index].length;

            if (str.split('\n')[rowNum - 1].length < (i - len))
                  i = len
            else {
                  len -= str.split('\n')[rowNum - 1].length - (i - len);
                  i = len - 1;
            }
      }
      else
            i = 0;
      textarea.setSelectionRange(i, i);
})
document.getElementById("ArrowDown").addEventListener("click", e => {
      let i = getTextaeraPos();
      let str = textarea.value;
      if (!e.ctrlKey && (str.length - str.split('\n')[str.split('\n').length - 1].length) > i) {


            let rowNum = getNumOfSymbols('\n', str, true, i);
            console.log(rowNum);
            let len = 0;
            for (let index = 0; index <= rowNum; index++)
                  len += str.split('\n')[index].length;

            if (str.split('\n')[rowNum ].length < (i - len))
                  i = len + str.split('\n')[rowNum ].length
            else {
                  len += str.split('\n')[rowNum ].length - ( len - i);
                  i = len +1;
            }
      }
      else
            i = str.length;
      textarea.setSelectionRange(i, i);
})
/* document.onkeypress = (e) => {

      
      console.log(getTextaeraPos());

      if (e.key == "Enter") {
            let i = getTextaeraPos() - 1;
            let str = textarea.textContent;
            textarea.textContent = str.substring(0, i) + '\n' + str.substring(i, str.length)
            textarea.setSelectionRange(++i, i);
      }
      else if (e.key == "Backspace") {
            let i = getTextaeraPos() - 1;
            let str = textarea.textContent;

            console.log(str);
            textarea.textContent = str.substring(0, i) + str.substring(i + 1, str.length)

            textarea.setSelectionRange(i, i);
      }
      else {
            
                  let i = getTextaeraPos()-1;
                  let str = textarea.value;
                  textarea.textContent = str.substring(0, i) + e.key + str.substring(i, str.length )

                  textarea.setSelectionRange(++i, i);
      }


} */

document.onkeydown = (e) => {
      let i = getTextaeraPos();
      textarea.setSelectionRange(i, i);
      [...document.querySelectorAll(".key")].forEach(e2 => {
            if (e.key.toLowerCase() == e2.textContent.toLowerCase() ||
                  e.key == e2.getAttribute("id")) {
                  
                  if (e2.textContent.toLowerCase() == "shift" || e2.textContent.toLowerCase() == "alt") {

                        if (e.code == e2.getAttribute("id"))
                              e2.classList.add("activeLetter");
                  }
                              
                        
                  else
                        e2.classList.add("activeLetter");
            }
            else if (e2.getAttribute("id"))
                  if (e2.getAttribute("id").split(' ')[0] == e.key ||
                        e2.getAttribute("id").split(' ')[1] == e.key)
                        e2.classList.add("activeLetter");
      });

      if (e.key == "Shift")
            caps = true;

      

}
document.onkeyup = (e) => {
      [...document.querySelectorAll('.key')].forEach(e2 => {
            if (e.key.toLowerCase() == e2.textContent.toLowerCase() ||
                  e.key == e2.getAttribute("id"))
                  e2.classList.remove("activeLetter");
            else if (e2.getAttribute("id"))
                  if (e2.getAttribute("id").indexOf(e.key) != -1)
                        e2.classList.remove("activeLetter");
      });


      if (e.key == "Shift")
            caps = false;
      else if (e.key == "CapsLock") {
            capslock.classList.toggle("active")
            caps = !caps;
      }

}
/* document.addEventListener('keydown', function (event) {
      
      var on = event.getModifierState && event.getModifierState('CapsLock');
      if (on)
            capslock.classList.add("active")

      caps = on;
});
 */
let keysCombinations = [
      {
            event: setLanguage,
            key1: "ControlLeft",
            key2: "Space"
      },
      {
            event: setLanguage,
            key1: "AltLeft",
            key2: "ShiftLeft"
      },
      {
            event: setLanguage,
            key1: "AltRight",
            key2: "ShiftLeft"
      },
      {
            event: setLanguage,
            key1: "AltLeft",
            key2: "ShiftRight"
      },
      {
            event: setLanguage,
            key1: "AltRight",
            key2: "ShiftRight"
      },
]
keysCombinations.forEach(e => runOnKeys(e.event, e.key1, e.key2));




setLanguage(language);


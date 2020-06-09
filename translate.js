var translatableElements = [];
var translations = [];
var clickers = [];
                    
var addSet = function(translatableElementId, translation, clickerId) {
            elem = document.getElementById(translatableElementId);
            clicker = document.getElementById(clickerId);
                    
            translatableElements.push(elem);
            translations.push(translation);
            clickers.push(clicker);
};
                    
var eventListenerNum = 0;

var getTranslator = function(link, translation) {
            return function() {
                        link.textContent = translation;
            }
};
var addTranslators = function() {
            while(eventListenerNum < translatableElements.length) {
                        var curClicker = clickers[eventListenerNum];
                        var curElem = translatableElements[eventListenerNum];
                        var curTranslation = translations[eventListenerNum];
                        var curTranslator = getTranslator(curElem, curTranslation);
                        curClicker.addEventListener("click", curTranslator);
                        eventListenerNum++;
            }
};
                    
if(translatableElements.length !== translations.length 
            || translatableElements.length !== clickers.length 
            || translations.length !== clickers.length) {
            document.body.textContent = "Oh noes! Your arrays (links, translations, and clickers) have different lengths!"
}

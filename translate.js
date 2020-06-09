var translatableElements = [];
var translations = [];
var clickers = [];
            
var addSet = function(translatableElementId, translation, clickerId) {
            translatableElements.push(translatableElementId);
            translations.push(translation);
            clickers.push(clickerId);
};
            
var eventListenerNum = 0;

var getTranslator = function(link, translation) {
            return function() {
                        link.textContent = translation;
            }
};
var addTranslators = function() {
            while(eventListenerNum < links.length) {
                        var curClicker = clickers[eventListenerNum];
                        var curLink = links[eventListenerNum];
                        var curTranslation = translations[eventListenerNum];
                        var curTranslator = getTranslator(curLink, curTranslation);
                        curClicker.addEventListener("click", curTranslator);
                        eventListenerNum++;
            }
};
            
if(links.length !== translations.length or links.length !== clickers.lengthor translations.length !== clickers.length) {
            document.body.textContent = "Oh noes! Your arrays (links, translations, and clickers) have different lengths!"
}

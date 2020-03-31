export const changeLanguage = (i18n, targetLanguage) => {
    i18n.changeLanguage(targetLanguage);
    document.body.style.direction = i18n.dir();
}
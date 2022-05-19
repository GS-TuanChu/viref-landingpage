export function moduleCss(styleObj) {
    return function (cssString) {
        if (!cssString) {
            return '';
        }
        const cssStringAr = cssString.split(' ');
        return ' ' + cssStringAr.map(e => styleObj[e]).join(' ') + ' ';
    }
}

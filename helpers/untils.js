
export const toDisplayNumb = (raw) => {
    var numbFix1 = Number(raw).toFixed(1)
    if (isNaN(numbFix1)) {
        return raw
    }
    var numbFix0 = Number(raw).toFixed(0)
    var displayNumb = numbFix1.toString()
    if (Number(numbFix1) === Number(numbFix0)) {
        displayNumb = numbFix0.toString()
    }
    return displayNumb
}

function replaceAll(target, search, replacement) {
    return target.split(search).join(replacement);
};

export const toInt = (raw) => {
    if (raw !== null &&
        raw !== undefined &&
        raw !== "null" &&
        raw.toString().length > 0) {
        var rawWithoutSep = replaceAll(raw.toString().trim(), ",", "")
        var value = Number(rawWithoutSep).toFixed(0)
        if (isNaN(value)) {
            return 0
        } else {
            return value
        }
    } else {
        return 0
    }
}

export const toFancyText = (number, n, x) => {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\.' : '$') + ')';
    return Number(number).toFixed(Math.max(0, ~~n)).replace(new RegExp(re, 'g'), '$&,');
}

export const stringToMMYY = (str) => {
    return `${str?.substring(4, str?.length)}/${str?.substring(0, 4)}`;
}

export const displayCurrency = (num) => {
    const temp = Math.floor(num / 1000);
    const toStr = temp?.toString();
    const DONG = 999;
    if (num <= DONG) {
        return `${toFancyText(num)}đ`;
    }
    if (toStr?.length) {
        if (toStr?.length <= 3) {
            return `${temp}k`;
        }
        if (toStr?.length > 3 && toStr?.length <= 6) {
            const tr = temp / 1000;
            const splitTr = tr?.toString().split('.');
            let numStr = 0;
            if (splitTr[1]?.length > 1) {
                numStr = `${splitTr[0]}${+splitTr[1][0] ? '.' + splitTr[1][0] : ''}`;
            } else {
                numStr = tr;
            }
            return Number(numStr) ? `${numStr}tr` : 0;
        }
        if (toStr?.length >= 7) { // >= 1 tỷ
            return `${toFancyText(num)}đ`;
        }
    }
    return 0;
}

const imgCache = {
    __cache: {},
    read(src) {
        if (!this.__cache[src]) {
            this.__cache[src] = new Promise((resolve) => {
                const img = new Image();
                img.onload = () => {
                    this.__cache[src] = true;
                    resolve(this.__cache[src]);
                };
                img.src = src;
            }).then((img) => {
                this.__cache[src] = true;
            });
        }
        if (this.__cache[src] instanceof Promise) {
            throw this.__cache[src];
        }
        return this.__cache[src];
    }
};

export const PreloadImg = ({ src, ...rest }) => {
    try {
        imgCache.read(src);
    } catch (error) {
    }
    return <img alt="" src={src} {...rest} />
}

export const getFirstDay = _ => {
    const date = new Date();
    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    return firstDay.getTime();
}

export const getHHMMDDMM = date => {
    const t = new Date(date);
    return `${t.getHours()}:${t.getMinutes()} - ${t.getDate()}/${t.getMonth() + 1}`;
}

export const datetimeToUnix = (date) => {
    return Number((new Date(date).getTime() / 1000).toFixed(0)) || undefined;
}
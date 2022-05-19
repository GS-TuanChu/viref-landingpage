export const parseResponse = (resp) => {
    const { meta } = resp.data;
    if (Number(meta.code) === 200 || meta.code === 'F008_200' || meta.code === 'F009_200' || Number(meta.code) === 200000) {
        return resp;
    } else {
        return {
            code: meta.code,
            errMess: meta.message || 'Không có dữ liệu',
        };
    }
};
const parseErrorObj = (obj) => {
    const errName = obj.map((mess) => {
        return (mess.field ? mess.field : '') + ': ' + (mess.description ? mess.description : '');
    });
    return errName.join('. ');
};

export const parseErr = (err) => {
    const { response } = err;
    if (response) {
        const { data } = response;
        if (data && data.meta && data.meta.code === 'F008_400') {
            if (data.meta.errors) return { errMess: parseErrorObj(data.meta.errors) };
            return { errMess: data.meta.message };
        }
        if (data && data.meta && data.meta.message) {
            return { errMess: data.meta.message };
        }
        if (data && data.message) {
            return { errMess: data.message };
        }
        return { errMess: 'Không có dữ liệu' };
    }
    return { errMess: 'Không có dữ liệu' };
};

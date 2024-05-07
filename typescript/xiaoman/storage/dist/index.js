//字典 Dictionaries    expire过期时间key    permanent永久不过期
var Dictionaries;
(function (Dictionaries) {
    Dictionaries["expire"] = "__expire__";
    Dictionaries["permanent"] = "permanent";
})(Dictionaries || (Dictionaries = {}));

class Storage {
    get(key) {
        const value = localStorage.getItem(key);
        if (value) {
            const data = JSON.parse(value);
            const now = new Date().getTime();
            // 判断是否过期
            if (typeof data[Dictionaries.expire] == 'number' &&
                data[Dictionaries.expire] < now) {
                this.remove(key);
                return {
                    message: `您的${key}已过期`,
                    value: null
                };
            }
            else {
                return {
                    message: '获取成功',
                    value: data.value
                };
            }
        }
        else {
            return {
                message: '值无效',
                value: null
            };
        }
    }
    set(key, value, expire = Dictionaries.permanent) {
        const data = {
            value, // 用户的value
            [Dictionaries.expire]: expire // 过期时间
        };
        localStorage.setItem(key, JSON.stringify(data));
    }
    remove(key) {
        localStorage.removeItem(key);
    }
    clear() {
        localStorage.clear();
    }
}

export { Storage };

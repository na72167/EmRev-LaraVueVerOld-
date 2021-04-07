  //バリテーション関数格納ファイル

    /**
     * URLのバリテーション
     * @param {String} textval
     * @return {Boolean}
     */
    export function validURL(url) {
        const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
        return reg.test(url);
    }

    /**
     * 対象引数がすべて小文字アルファベットかを確認
     * @return {Boolean}
     * @param {String} str
     */
    export function validLowerCase(str) {
        const reg = /^[a-z]+$/;
        return reg.test(str);
    }

    /**
     * 対象引数がすべて大文字アルファベットかを確認
     * @return {Boolean}
     * @param {String} str
     */
    export function validUpperCase(str) {
        const reg = /^[A-Z]+$/;
        return reg.test(str);
    }

    /**
     * 対象引数が大文字か小文字のアルファベットかを確認。
     * @param {String} str
     * @param {Boolean}
     */
    export function validAlphabets(str) {
        const reg = /^[A-Za-z]+$/;
        return reg.test(str);
    }

    /**
     * emailのバリテーション
     * @param {String} email
     * @return {Boolean}
     */
    export function validEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    /**
     * パスワードのバリテーション
     * @param {String} password
     * @return {Boolean}
     */
    export function validPassword(password) {
        const re = /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?\d)[a-zA-Z\d]{8,20}$/;
        return re.test(password);
    }

    /**
     * 数字のバリテーション
     * @param {String} number
     * @return {Boolean}
     */
    export function validNum(num) {
        const re = /^[0-9]+$/;
        return re.test(num);
    }

    /**
     * zipファイルのバリテーション
     * @param {String} zip
     * @return {Boolean}
     */
    export function validZip(zip) {
        const re = /^\d{3}[-]\d{4}$|^\d{3}[-]\d{2}$|^\d{3}$/;
        return re.test(zip);
    }

    /**
     * 電話番号のバリテーション
     * @param {String} tel
     * @return {Boolean}
     */
    export function validTel(tel) {
        const re = /^0\d{1,4}-\d{1,4}-\d{3,4}$/
        return re.test(tel);
    }

    /**
     * 半角全角英数字か確認するバリテーション
     * @param {String} halfNumAlp
     * @return {Boolean}
     */
    export function validHalfNumAlp(halfNumAlp) {
        const re = /^[0-9a-zA-Z]*$/
        return re.test(halfNumAlp);
    }

    /**
     * 空白かを確認する?バリテーション
     * @param {String} halfNumAlp
     * @return {Boolean}
     */
    export function validWhiteSpace(string) {
        const re = /^[\x20\u3000]+$/
        return re.test(string)
    }

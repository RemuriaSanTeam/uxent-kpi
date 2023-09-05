// plugins/autoline.client.js

import { onDemand as OnDemand } from '../helpers/onDemand';

export default (ctx, inject) => {
    // constructorに外部ライブラリのパスを渡す
    const loader = new OnDemand('https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch?appid=<クライアントID>&query=nike');
    inject('autoline', {
        // loadメソッドにcallbackを渡せば、JSの読み込み完了したら実行される。
        load(callback) {
            loader.load(callback);
        },
    });
};
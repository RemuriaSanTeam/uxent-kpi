// plugins/autoline.client.js

import { onDemand as OnDemand } from '../helpers/onDemand';

export default (ctx, inject) => {
    // constructorに外部ライブラリのパスを渡す
    const loader = new OnDemand('https://app.rakuten.co.jp/services/api/Product/Search/20170426?applicationId=<クライアントID>');

    inject('autoline', {
        // loadメソッドにcallbackを渡せば、JSの読み込み完了したら実行される。
        load(callback) {
            loader.load(callback);
        },
    });
};
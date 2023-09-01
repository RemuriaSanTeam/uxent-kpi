import { onDemand as OnDemand } from "../helpers/onDemand";

export default (ctx: any, inject: any) => {
  // constructorに外部ライブラリのパスを渡す
  const loader = new OnDemand(
    "https://s.yimg.jp/images/yjdn/js/bakusoku-jsonp-v1.js"
  );

  inject("autoline", {
    // loadメソッドにcallbackを渡せば、JSの読み込み完了したら実行される。
    load(callback: () => void) {
      loader.load(callback);
    },
  });
};

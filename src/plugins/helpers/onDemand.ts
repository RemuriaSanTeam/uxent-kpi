export class OnDemand {
  private isLoaded: boolean = false;
  private isLoading: boolean = false;
  private callbacks: (() => void)[] = [];
  private src: string;
  private waitForPageLoad: boolean;

  constructor(src: string, waitForPageLoad: boolean = true) {
    this.src = src;
    this.waitForPageLoad = waitForPageLoad;
  }

  load(callback: () => void = () => {}): void {
    if (this.isLoaded) return callback();

    this.callbacks.push(callback);

    if (!this.isLoading) {
      this.isLoading = true;
      if (!this.waitForPageLoad || document.readyState === "complete") {
        this._loadScript();
      } else {
        window.addEventListener("load", () => this._loadScript());
      }
    }
  }

  private _loadScript(): void {
    const script = document.createElement("script");
    script.src = this.src;
    script.onload = () => this._invokeCallbacks();
    document.getElementsByTagName("head")[0].appendChild(script);
  }

  private _invokeCallbacks(): void {
    this.isLoaded = true;
    this.callbacks.forEach((callback) => callback());
  }
}

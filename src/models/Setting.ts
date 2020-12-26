export class Setting {
    private imageDir = "/static/images";

    constructor(
        private _appName: string,
        private _appLogo: string,
    ) {

    }

    getLogo = () => `${this.imageDir}/${this._appLogo}`;
    getAppName = () => this._appName;
}
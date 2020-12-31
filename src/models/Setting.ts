export class Setting {
    private imageDir = "/static/images";

    constructor(
        private _appName: string,
        private _appLogo: string,
        private _apiProto: string,
        private _apiLocal: string,
    ) {

    }

    getApiProto = (): string => this._apiProto;
    getLogo = () => `${this.imageDir}/${this._appLogo}`;
    getAppName = () => this._appName;
    getLocalApi = (url: string) => `${this._apiLocal}/${url}`;
}
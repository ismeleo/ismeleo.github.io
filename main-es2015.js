(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../zxing-scanner/src/lib/browser-multi-format-continuous-reader.ts":
/*!**************************************************************************!*\
  !*** ../zxing-scanner/src/lib/browser-multi-format-continuous-reader.ts ***!
  \**************************************************************************/
/*! exports provided: BrowserMultiFormatContinuousReader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserMultiFormatContinuousReader", function() { return BrowserMultiFormatContinuousReader; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zxing/library */ "../../node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/// <reference path="./image-capture.d.ts" />



/**
 * Based on zxing-typescript BrowserCodeReader
 */
class BrowserMultiFormatContinuousReader extends _zxing_library__WEBPACK_IMPORTED_MODULE_1__["BrowserMultiFormatReader"] {
    constructor() {
        super(...arguments);
        /**
         * Says if there's a torch available for the current device.
         */
        this._isTorchAvailable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](undefined);
    }
    /**
     * Exposes _tochAvailable .
     */
    get isTorchAvailable() {
        return this._isTorchAvailable.asObservable();
    }
    /**
     * Starts the decoding from the current or a new video element.
     *
     * @param callbackFn The callback to be executed after every scan attempt
     * @param deviceId The device's to be used Id
     * @param videoSource A new video element
     */
    continuousDecodeFromInputVideoDevice(deviceId, videoSource) {
        this.reset();
        // Keeps the deviceId between scanner resets.
        if (typeof deviceId !== 'undefined') {
            this.deviceId = deviceId;
        }
        if (typeof navigator === 'undefined') {
            return;
        }
        const scan$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]({});
        try {
            // this.decodeFromInputVideoDeviceContinuously(deviceId, videoSource, (result, error) => scan$.next({ result, error }));
            this.getStreamForDevice({ deviceId })
                .then(stream => this.attachStreamToVideoAndCheckTorch(stream, videoSource))
                .then(videoElement => this.decodeOnSubject(scan$, videoElement, this.timeBetweenScansMillis));
        }
        catch (e) {
            scan$.error(e);
        }
        this._setScanStream(scan$);
        // @todo Find a way to emit a complete event on the scan stream once it's finished.
        return scan$.asObservable();
    }
    /**
     * Gets the media stream for certain device.
     * Falls back to any available device if no `deviceId` is defined.
     */
    getStreamForDevice({ deviceId }) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const constraints = this.getUserMediaConstraints(deviceId);
            const stream = yield navigator.mediaDevices.getUserMedia(constraints);
            return stream;
        });
    }
    /**
     * Creates media steram constraints for certain `deviceId`.
     * Falls back to any environment available device if no `deviceId` is defined.
     */
    getUserMediaConstraints(deviceId) {
        const video = typeof deviceId === 'undefined'
            ? { facingMode: { exact: 'environment' } }
            : { deviceId: { exact: deviceId } };
        const constraints = { video };
        return constraints;
    }
    /**
     * Enables and disables the device torch.
     */
    setTorch(on) {
        if (!this._isTorchAvailable.value) {
            // compatibility not checked yet
            return;
        }
        const tracks = this.getVideoTracks(this.stream);
        if (on) {
            this.applyTorchOnTracks(tracks, true);
        }
        else {
            this.applyTorchOnTracks(tracks, false);
            // @todo check possibility to disable torch without restart
            this.restart();
        }
    }
    /**
     * Update the torch compatibility state and attachs the stream to the preview element.
     */
    attachStreamToVideoAndCheckTorch(stream, videoSource) {
        this.updateTorchCompatibility(stream);
        return this.attachStreamToVideo(stream, videoSource);
    }
    /**
     * Checks if the stream supports torch control.
     *
     * @param stream The media stream used to check.
     */
    updateTorchCompatibility(stream) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const tracks = this.getVideoTracks(stream);
            for (const track of tracks) {
                if (yield this.isTorchCompatible(track)) {
                    this._isTorchAvailable.next(true);
                    break;
                }
            }
        });
    }
    /**
     *
     * @param stream The video stream where the tracks gonna be extracted from.
     */
    getVideoTracks(stream) {
        let tracks = [];
        try {
            tracks = stream.getVideoTracks();
        }
        finally {
            return tracks || [];
        }
    }
    /**
     *
     * @param track The media stream track that will be checked for compatibility.
     */
    isTorchCompatible(track) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let compatible = false;
            try {
                const imageCapture = new ImageCapture(track);
                const capabilities = yield imageCapture.getPhotoCapabilities();
                compatible = !!capabilities['torch'] || ('fillLightMode' in capabilities && capabilities.fillLightMode.length !== 0);
            }
            finally {
                return compatible;
            }
        });
    }
    /**
     * Apply the torch setting in all received tracks.
     */
    applyTorchOnTracks(tracks, state) {
        tracks.forEach(track => track.applyConstraints({
            advanced: [{ torch: state, fillLightMode: state ? 'torch' : 'none' }]
        }));
    }
    /**
     * Correctly sets a new scanStream value.
     */
    _setScanStream(scan$) {
        // cleans old stream
        this._cleanScanStream();
        // sets new stream
        this.scanStream = scan$;
    }
    /**
     * Cleans any old scan stream value.
     */
    _cleanScanStream() {
        if (this.scanStream && !this.scanStream.isStopped) {
            this.scanStream.complete();
        }
        this.scanStream = null;
    }
    /**
     * Decodes values in a stream with delays between scans.
     *
     * @param scan$ The subject to receive the values.
     * @param videoElement The video element the decode will be applied.
     * @param delay The delay between decode results.
     */
    decodeOnSubject(scan$, videoElement, delay) {
        // stops loop
        if (scan$.isStopped) {
            return;
        }
        let result;
        try {
            result = this.decode(videoElement);
            scan$.next({ result });
        }
        catch (error) {
            // stream cannot stop on fails.
            if (!error ||
                // scan Failure - found nothing, no error
                error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"] ||
                // scan Error - found the QR but got error on decoding
                error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_1__["ChecksumException"] ||
                error instanceof _zxing_library__WEBPACK_IMPORTED_MODULE_1__["FormatException"]) {
                scan$.next({ error });
            }
            else {
                scan$.error(error);
            }
        }
        finally {
            const timeout = !result ? 0 : delay;
            setTimeout(() => this.decodeOnSubject(scan$, videoElement, delay), timeout);
        }
    }
    /**
     * Restarts the scanner.
     */
    restart() {
        // reset
        // start
        return this.continuousDecodeFromInputVideoDevice(this.deviceId, this.videoElement);
    }
}


/***/ }),

/***/ "../zxing-scanner/src/lib/zxing-scanner.component.ts":
/*!***********************************************************!*\
  !*** ../zxing-scanner/src/lib/zxing-scanner.component.ts ***!
  \***********************************************************/
/*! exports provided: ZXingScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function() { return ZXingScannerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/library */ "../../node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./browser-multi-format-continuous-reader */ "../zxing-scanner/src/lib/browser-multi-format-continuous-reader.ts");





const _c0 = ["preview"];
class ZXingScannerComponent {
    /**
     * Constructor to build the object and do some DI.
     */
    constructor() {
        /**
         * How the preview element shoud be fit inside the :host container.
         */
        this.previewFitMode = 'cover';
        // instance based emitters
        this.autostarted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.autostarting = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.torchCompatible = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scanSuccess = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scanFailure = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scanError = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.scanComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.camerasFound = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.camerasNotFound = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.permissionResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](true);
        this.hasDevices = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.deviceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._device = null;
        this._enabled = true;
        this._hints = new Map();
        this.autofocusEnabled = true;
        this.autostart = true;
        this.formats = [_zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].QR_CODE];
        // computed data
        this.hasNavigator = typeof navigator !== 'undefined';
        this.isMediaDevicesSuported = this.hasNavigator && !!navigator.mediaDevices;
    }
    /**
     * Exposes the current code reader, so the user can use it's APIs.
     */
    get codeReader() {
        return this._codeReader;
    }
    /**
     * User device input
     */
    set device(device) {
        if (!device && device !== null) {
            throw new _zxing_library__WEBPACK_IMPORTED_MODULE_2__["ArgumentException"]('The `device` must be a valid MediaDeviceInfo or null.');
        }
        if (this.isCurrentDevice(device)) {
            console.warn('Setting the same device is not allowed.');
            return;
        }
        if (this.isAutostarting) {
            // do not allow setting devices during auto-start, since it will set one and emit it.
            console.warn('Avoid setting a device during auto-start.');
            return;
        }
        if (!this.hasPermission) {
            console.warn('Permissions not set yet, waiting for them to be set to apply device change.');
            // this.permissionResponse
            //   .pipe(
            //     take(1),
            //     tap(() => console.log(`Permissions set, applying device change${device ? ` (${device.deviceId})` : ''}.`))
            //   )
            //   .subscribe(() => this.device = device);
            // return;
        }
        // in order to change the device the codeReader gotta be reseted
        this._reset();
        this._device = device;
        // if enabled, starts scanning
        if (this._enabled && device !== null) {
            this.scanFromDevice(device.deviceId);
        }
    }
    /**
     * User device acessor.
     */
    get device() {
        return this._device;
    }
    /**
     * Returns all the registered formats.
     */
    get formats() {
        return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__["DecodeHintType"].POSSIBLE_FORMATS);
    }
    /**
     * Registers formats the scanner should support.
     *
     * @param input BarcodeFormat or case-insensitive string array.
     */
    set formats(input) {
        if (typeof input === 'string') {
            throw new Error('Invalid formats, make sure the [formats] input is a binding.');
        }
        // formats may be set from html template as BarcodeFormat or string array
        const formats = input.map(f => this.getBarcodeFormatOrFail(f));
        const hints = this.hints;
        // updates the hints
        hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__["DecodeHintType"].POSSIBLE_FORMATS, formats);
        this.hints = hints;
    }
    /**
     * Returns all the registered hints.
     */
    get hints() {
        return this._hints;
    }
    /**
     * Does what it takes to set the hints.
     */
    set hints(hints) {
        this._hints = hints;
        // @note avoid restarting the code reader when possible
        // new instance with new hints.
        this.restart();
    }
    /**
     *
     */
    set isAutostarting(state) {
        this._isAutostarting = state;
        this.autostarting.next(state);
    }
    /**
     *
     */
    get isAutstarting() {
        return this._isAutostarting;
    }
    /**
     * Allow start scan or not.
     */
    set torch(on) {
        this.getCodeReader().setTorch(on);
    }
    /**
     * Allow start scan or not.
     */
    set enable(enabled) {
        this._enabled = Boolean(enabled);
        if (!this._enabled) {
            this.reset();
        }
        else if (this.device) {
            this.scanFromDevice(this.device.deviceId);
        }
    }
    /**
     * Tells if the scanner is enabled or not.
     */
    get enabled() {
        return this._enabled;
    }
    /**
     * If is `tryHarder` enabled.
     */
    get tryHarder() {
        return this.hints.get(_zxing_library__WEBPACK_IMPORTED_MODULE_2__["DecodeHintType"].TRY_HARDER);
    }
    /**
     * Enable/disable tryHarder hint.
     */
    set tryHarder(enable) {
        const hints = this.hints;
        if (enable) {
            hints.set(_zxing_library__WEBPACK_IMPORTED_MODULE_2__["DecodeHintType"].TRY_HARDER, true);
        }
        else {
            hints.delete(_zxing_library__WEBPACK_IMPORTED_MODULE_2__["DecodeHintType"].TRY_HARDER);
        }
        this.hints = hints;
    }
    /**
     * Gets and registers all cammeras.
     */
    askForPermission() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (!this.hasNavigator) {
                console.error('@zxing/ngx-scanner', 'Can\'t ask permission, navigator is not present.');
                this.setPermission(null);
                return this.hasPermission;
            }
            if (!this.isMediaDevicesSuported) {
                console.error('@zxing/ngx-scanner', 'Can\'t get user media, this is not supported.');
                this.setPermission(null);
                return this.hasPermission;
            }
            let stream;
            let permission;
            try {
                // Will try to ask for permission
                stream = yield this.getAnyVideoDevice();
                permission = !!stream;
            }
            catch (err) {
                return this.handlePermissionException(err);
            }
            finally {
                this.terminateStream(stream);
            }
            this.setPermission(permission);
            // Returns the permission
            return permission;
        });
    }
    /**
     *
     */
    getAnyVideoDevice() {
        return navigator.mediaDevices.getUserMedia({ video: true });
    }
    /**
     * Terminates a stream and it's tracks.
     */
    terminateStream(stream) {
        if (stream) {
            stream.getTracks().forEach(t => t.stop());
        }
        stream = undefined;
    }
    /**
     * Initializes the component without starting the scanner.
     */
    initAutostartOff() {
        // do not ask for permission when autostart is off
        this.isAutostarting = null;
        // just update devices information
        this.updateVideoInputDevices();
    }
    /**
     * Initializes the component and starts the scanner.
     * Permissions are asked to accomplish that.
     */
    initAutostartOn() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.isAutostarting = true;
            let hasPermission;
            try {
                // Asks for permission before enumerating devices so it can get all the device's info
                hasPermission = yield this.askForPermission();
            }
            catch (e) {
                console.error('Exception occurred while asking for permission:', e);
                return;
            }
            // from this point, things gonna need permissions
            if (hasPermission) {
                const devices = yield this.updateVideoInputDevices();
                this.autostartScanner([...devices]);
            }
        });
    }
    /**
     * Checks if the given device is the current defined one.
     */
    isCurrentDevice(device) {
        return this.device && device && device.deviceId === this.device.deviceId;
    }
    /**
     * Executed after the view initialization.
     */
    ngAfterViewInit() {
        // makes torch availability information available to user
        this.getCodeReader().isTorchAvailable.subscribe(x => this.torchCompatible.emit(x));
        if (!this.autostart) {
            console.warn('New feature \'autostart\' disabled, be careful. Permissions and devices recovery has to be run manually.');
            // does the necessary configuration without autostarting
            this.initAutostartOff();
            return;
        }
        // configurates the component and starts the scanner
        this.initAutostartOn();
    }
    /**
     * Executes some actions before destroy the component.
     */
    ngOnDestroy() {
        this.reset();
    }
    /**
     * Stops old `codeReader` and starts scanning in a new one.
     */
    restart() {
        const prevDevice = this._reset();
        if (!prevDevice) {
            return;
        }
        // @note apenas necessario por enquanto causa da Torch
        this._codeReader = undefined;
        this.device = prevDevice;
    }
    /**
     * Discovers and updates known video input devices.
     */
    updateVideoInputDevices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // permissions aren't needed to get devices, but to access them and their info
            const devices = (yield this.getCodeReader().listVideoInputDevices()) || [];
            const hasDevices = devices && devices.length > 0;
            // stores discovered devices and updates information
            this.hasDevices.next(hasDevices);
            this.camerasFound.next([...devices]);
            if (!hasDevices) {
                this.camerasNotFound.next();
            }
            return devices;
        });
    }
    /**
     * Starts the scanner with the back camera otherwise take the last
     * available device.
     */
    autostartScanner(devices) {
        const matcher = ({ label }) => /back|trás|rear|traseira|environment|ambiente/gi.test(label);
        // select the rear camera by default, otherwise take the last camera.
        const device = devices.find(matcher) || devices.pop();
        if (!device) {
            throw new Error('Impossible to autostart, no input devices available.');
        }
        this.device = device;
        // @note when listening to this change, callback code will sometimes run before the previous line.
        this.deviceChange.emit(device);
        this.isAutostarting = false;
        this.autostarted.next();
    }
    /**
     * Dispatches the scan success event.
     *
     * @param result the scan result.
     */
    dispatchScanSuccess(result) {
        this.scanSuccess.next(result.getText());
    }
    /**
     * Dispatches the scan failure event.
     */
    dispatchScanFailure(reason) {
        this.scanFailure.next(reason);
    }
    /**
     * Dispatches the scan error event.
     *
     * @param error the error thing.
     */
    dispatchScanError(error) {
        this.scanError.next(error);
    }
    /**
     * Dispatches the scan event.
     *
     * @param result the scan result.
     */
    dispatchScanComplete(result) {
        this.scanComplete.next(result);
    }
    /**
     * Returns the filtered permission.
     */
    handlePermissionException(err) {
        // failed to grant permission to video input
        console.error('@zxing/ngx-scanner', 'Error when asking for permission.', err);
        let permission;
        switch (err.name) {
            // usually caused by not secure origins
            case 'NotSupportedError':
                console.warn('@zxing/ngx-scanner', err.message);
                // could not claim
                permission = null;
                // can't check devices
                this.hasDevices.next(null);
                break;
            // user denied permission
            case 'NotAllowedError':
                console.warn('@zxing/ngx-scanner', err.message);
                // claimed and denied permission
                permission = false;
                // this means that input devices exists
                this.hasDevices.next(true);
                break;
            // the device has no attached input devices
            case 'NotFoundError':
                console.warn('@zxing/ngx-scanner', err.message);
                // no permissions claimed
                permission = null;
                // because there was no devices
                this.hasDevices.next(false);
                // tells the listener about the error
                this.camerasNotFound.next(err);
                break;
            case 'NotReadableError':
                console.warn('@zxing/ngx-scanner', 'Couldn\'t read the device(s)\'s stream, it\'s probably in use by another app.');
                // no permissions claimed
                permission = null;
                // there are devices, which I couldn't use
                this.hasDevices.next(false);
                // tells the listener about the error
                this.camerasNotFound.next(err);
                break;
            default:
                console.warn('@zxing/ngx-scanner', 'I was not able to define if I have permissions for camera or not.', err);
                // unknown
                permission = null;
                // this.hasDevices.next(undefined;
                break;
        }
        this.setPermission(permission);
        // tells the listener about the error
        this.permissionResponse.error(err);
        return permission;
    }
    /**
     * Returns a valid BarcodeFormat or fails.
     */
    getBarcodeFormatOrFail(format) {
        return typeof format === 'string'
            ? _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"][format.trim().toUpperCase()]
            : format;
    }
    /**
     * Retorna um code reader, cria um se nenhume existe.
     */
    getCodeReader() {
        if (!this._codeReader) {
            this._codeReader = new _browser_multi_format_continuous_reader__WEBPACK_IMPORTED_MODULE_3__["BrowserMultiFormatContinuousReader"](this.hints);
        }
        return this._codeReader;
    }
    /**
     * Starts the continuous scanning for the given device.
     *
     * @param deviceId The deviceId from the device.
     */
    scanFromDevice(deviceId) {
        const videoElement = this.previewElemRef.nativeElement;
        const codeReader = this.getCodeReader();
        const decodingStream = codeReader.continuousDecodeFromInputVideoDevice(deviceId, videoElement);
        if (!decodingStream) {
            throw new Error('Undefined decoding stream, aborting.');
        }
        const next = (x) => this._onDecodeResult(x.result, x.error);
        const error = (err) => this._onDecodeError(err);
        const complete = () => { this.reset(); console.log('completed'); };
        decodingStream.subscribe(next, error, complete);
    }
    /**
     * Handles decode errors.
     */
    _onDecodeError(err) {
        this.dispatchScanError(err);
        this.reset();
    }
    /**
     * Handles decode results.
     */
    _onDecodeResult(result, error) {
        if (result) {
            this.dispatchScanSuccess(result);
        }
        else {
            this.dispatchScanFailure(error);
        }
        this.dispatchScanComplete(result);
    }
    /**
     * Stops the code reader and returns the previous selected device.
     */
    _reset() {
        if (!this._codeReader) {
            return;
        }
        const device = this.device;
        // do not set this.device inside this method, it would create a recursive loop
        this._device = null;
        this._codeReader.reset();
        return device;
    }
    /**
     * Resets the scanner and emits device change.
     */
    reset() {
        this._reset();
        this.deviceChange.emit(null);
    }
    /**
     * Sets the permission value and emmits the event.
     */
    setPermission(hasPermission) {
        this.hasPermission = hasPermission;
        this.permissionResponse.next(hasPermission);
    }
}
ZXingScannerComponent.ɵfac = function ZXingScannerComponent_Factory(t) { return new (t || ZXingScannerComponent)(); };
ZXingScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ZXingScannerComponent, selectors: [["zxing-scanner"]], viewQuery: function ZXingScannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.previewElemRef = _t.first);
    } }, inputs: { autofocusEnabled: "autofocusEnabled", autostart: "autostart", previewFitMode: "previewFitMode", device: "device", formats: "formats", torch: "torch", enable: "enable", tryHarder: "tryHarder" }, outputs: { autostarted: "autostarted", autostarting: "autostarting", torchCompatible: "torchCompatible", scanSuccess: "scanSuccess", scanFailure: "scanFailure", scanError: "scanError", scanComplete: "scanComplete", camerasFound: "camerasFound", camerasNotFound: "camerasNotFound", permissionResponse: "permissionResponse", hasDevices: "hasDevices", deviceChange: "deviceChange" }, decls: 6, vars: 2, consts: [["preview", ""]], template: function ZXingScannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "video", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Your browser does not support this feature, please try to upgrade it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, " Seu navegador n\u00E3o suporta este recurso, por favor tente atualiz\u00E1-lo. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("object-fit", ctx.previewFitMode);
    } }, styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n\nvideo[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3p4aW5nLXNjYW5uZXIvc3JjL2xpYi9DOlxcTGVvXFxQcm9qZWN0XFxQZXJzb25hbFxcbmd4LXNjYW5uZXJcXHByb2plY3RzXFx6eGluZy1zY2FubmVyLWRlbW8vLi5cXHp4aW5nLXNjYW5uZXJcXHNyY1xcbGliXFx6eGluZy1zY2FubmVyLmNvbXBvbmVudC5zY3NzIiwiLi4venhpbmctc2Nhbm5lci9zcmMvbGliL3p4aW5nLXNjYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNDRiIsImZpbGUiOiIuLi96eGluZy1zY2FubmVyL3NyYy9saWIvenhpbmctc2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn0iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZXingScannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'zxing-scanner',
                templateUrl: './zxing-scanner.component.html',
                styleUrls: ['./zxing-scanner.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return []; }, { previewElemRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['preview', { static: true }]
        }], autofocusEnabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], autostarted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], autostarting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], autostart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], previewFitMode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], torchCompatible: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scanSuccess: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scanFailure: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scanError: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], scanComplete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], camerasFound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], camerasNotFound: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], permissionResponse: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], hasDevices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], device: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], deviceChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }], formats: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], torch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], enable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], tryHarder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "../zxing-scanner/src/lib/zxing-scanner.module.ts":
/*!********************************************************!*\
  !*** ../zxing-scanner/src/lib/zxing-scanner.module.ts ***!
  \********************************************************/
/*! exports provided: ZXingScannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function() { return ZXingScannerModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zxing-scanner.component */ "../zxing-scanner/src/lib/zxing-scanner.component.ts");





class ZXingScannerModule {
}
ZXingScannerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ZXingScannerModule });
ZXingScannerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function ZXingScannerModule_Factory(t) { return new (t || ZXingScannerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ZXingScannerModule, { declarations: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]], exports: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ZXingScannerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
                ],
                declarations: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]],
                exports: [_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_3__["ZXingScannerComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../zxing-scanner/src/public_api.ts":
/*!******************************************!*\
  !*** ../zxing-scanner/src/public_api.ts ***!
  \******************************************/
/*! exports provided: ZXingScannerComponent, ZXingScannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/zxing-scanner.module */ "../zxing-scanner/src/lib/zxing-scanner.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function() { return _lib_zxing_scanner_module__WEBPACK_IMPORTED_MODULE_0__["ZXingScannerModule"]; });

/* harmony import */ var _lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/zxing-scanner.component */ "../zxing-scanner/src/lib/zxing-scanner.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function() { return _lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_1__["ZXingScannerComponent"]; });

/*
 * Public API Surface of zxing-scanner
 */




/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-info-dialog/app-info-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/app-info-dialog/app-info-dialog.component.ts ***!
  \**************************************************************/
/*! exports provided: AppInfoDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoDialogComponent", function() { return AppInfoDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app-info/app-info.component */ "./src/app/app-info/app-info.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");






class AppInfoDialogComponent {
    constructor(data) {
        this.data = data;
        this.hasDevices = data.hasDevices;
        this.hasPermission = data.hasPermission;
    }
}
AppInfoDialogComponent.ɵfac = function AppInfoDialogComponent_Factory(t) { return new (t || AppInfoDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
AppInfoDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppInfoDialogComponent, selectors: [["app-info-dialog"]], decls: 4, vars: 2, consts: [[3, "hasDevices", "hasPermission"], ["mat-flat-button", "", "color", "primary", "mat-dialog-close", ""]], template: function AppInfoDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-info", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasDevices", ctx.hasDevices)("hasPermission", ctx.hasPermission);
    } }, directives: [_app_info_app_info_component__WEBPACK_IMPORTED_MODULE_2__["AppInfoComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info-dialog',
                templateUrl: './app-info-dialog.component.html',
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/app-info/app-info.component.ts":
/*!************************************************!*\
  !*** ./src/app/app-info/app-info.component.ts ***!
  \************************************************/
/*! exports provided: AppInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppInfoComponent", function() { return AppInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/core */ "../../node_modules/@angular/material/fesm2015/core.js");



class AppInfoComponent {
    constructor() {
        this.ngVersion = _angular_core__WEBPACK_IMPORTED_MODULE_0__["VERSION"].full;
    }
    stateToEmoji(state) {
        const states = {
            // not checked
            undefined: '❔',
            // failed to check
            null: '⭕',
            // success
            true: '✔',
            // can't touch that
            false: '❌'
        };
        return states['' + state];
    }
}
AppInfoComponent.ɵfac = function AppInfoComponent_Factory(t) { return new (t || AppInfoComponent)(); };
AppInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppInfoComponent, selectors: [["app-info"]], inputs: { hasDevices: "hasDevices", hasPermission: "hasPermission" }, decls: 22, vars: 3, consts: [[1, "table-scanner-state"], ["matLine", "", 1, "ng-version"]], template: function AppInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Property");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Devices");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Permissions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stateToEmoji(ctx.hasDevices));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.stateToEmoji(ctx.hasPermission));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Angular version: ", ctx.ngVersion, "");
    } }, directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MatLine"]], styles: [".table-scanner-state[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.ng-version[_ngcontent-%COMP%] {\n  color: #ff6687;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWluZm8vQzpcXExlb1xcUHJvamVjdFxcUGVyc29uYWxcXG5neC1zY2FubmVyXFxwcm9qZWN0c1xcenhpbmctc2Nhbm5lci1kZW1vL3NyY1xcYXBwXFxhcHAtaW5mb1xcYXBwLWluZm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC1pbmZvL2FwcC1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtBQ0FKOztBRElBO0VBQ0UsY0FBQTtBQ0RGIiwiZmlsZSI6InNyYy9hcHAvYXBwLWluZm8vYXBwLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtc2Nhbm5lci1zdGF0ZSB7XG4gIHRoZWFkIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5uZy12ZXJzaW9uIHtcbiAgY29sb3I6ICNmZjY2ODc7XG59XG4iLCIudGFibGUtc2Nhbm5lci1zdGF0ZSB0aGVhZCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5uZy12ZXJzaW9uIHtcbiAgY29sb3I6ICNmZjY2ODc7XG59Il19 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-info',
                templateUrl: './app-info.component.html',
                styleUrls: ['./app-info.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            }]
    }], null, { hasDevices: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], hasPermission: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/app-ui.module.ts":
/*!**********************************!*\
  !*** ./src/app/app-ui.module.ts ***!
  \**********************************/
/*! exports provided: AppUiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppUiModule", function() { return AppUiModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/select */ "../../node_modules/@angular/material/fesm2015/select.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "../../node_modules/@angular/material/fesm2015/tooltip.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _public_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./public_api */ "./src/app/public_api.ts");














const UI_MODULES = [
    // Angular
    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
    // Material
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
    _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
    // Local
    _public_api__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerModule"],
];
class AppUiModule {
}
AppUiModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppUiModule });
AppUiModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppUiModule_Factory(t) { return new (t || AppUiModule)(); }, imports: [
        // Angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // Material
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        // Local
        _public_api__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppUiModule, { exports: [
        // Angular
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
        // Material
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
        // Local
        _public_api__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppUiModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{ exports: UI_MODULES }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zxing/library */ "../../node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./formats-dialog/formats-dialog.component */ "./src/app/formats-dialog/formats-dialog.component.ts");
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-info-dialog/app-info-dialog.component */ "./src/app/app-info-dialog/app-info-dialog.component.ts");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/menu */ "../../node_modules/@angular/material/fesm2015/menu.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/divider */ "../../node_modules/@angular/material/fesm2015/divider.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "../../node_modules/@angular/material/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "../../node_modules/@angular/material/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "../../node_modules/@angular/material/fesm2015/icon.js");
/* harmony import */ var _zxing_scanner_src_lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../zxing-scanner/src/lib/zxing-scanner.component */ "../zxing-scanner/src/lib/zxing-scanner.component.ts");


















function AppComponent_mat_list_option_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_mat_list_option_6_Template_mat_list_option_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.toggleTorch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Enable Torch ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r5.torchEnabled);
} }
function AppComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const device_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", device_r14.deviceId)("selected", ctx_r6.currentDevice && device_r14.deviceId === ctx_r6.currentDevice.deviceId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](device_r14.label);
} }
function AppComponent_section_23_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Result");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_23_Template_button_click_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.clearResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.qrResultString);
} }
function AppComponent_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Waiting for permissions.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " If your device does not has cameras, no permissions will be asked. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "You denied the camera permission, we can't scan anything without it. \uD83D\uDE2A");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Couldn't check for devices.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " This may be caused by some security error. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AppComponent_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No devices were found.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "blockquote");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " I believe your device has no media devices attached to. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class AppComponent {
    constructor(_dialog) {
        this._dialog = _dialog;
        this.currentDevice = null;
        this.formatsEnabled = [
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_39,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_93,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].CODE_128,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_8,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].EAN_13,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].UPC_A,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].UPC_E,
            _zxing_library__WEBPACK_IMPORTED_MODULE_2__["BarcodeFormat"].QR_CODE,
        ];
        this.torchEnabled = false;
        this.torchAvailable$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.tryHarder = false;
    }
    clearResult() {
        this.qrResultString = null;
    }
    onCamerasFound(devices) {
        this.availableDevices = devices;
        this.hasDevices = Boolean(devices && devices.length);
    }
    onCodeResult(resultString) {
        this.qrResultString = resultString;
    }
    onDeviceSelectChange(selected) {
        const device = this.availableDevices.find(x => x.deviceId === selected);
        this.currentDevice = device || null;
    }
    openFormatsDialog() {
        const data = {
            formatsEnabled: this.formatsEnabled,
        };
        this._dialog
            .open(_formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_4__["FormatsDialogComponent"], { data })
            .afterClosed()
            .subscribe(x => { if (x) {
            this.formatsEnabled = x;
        } });
    }
    onHasPermission(has) {
        this.hasPermission = has;
    }
    openInfoDialog() {
        const data = {
            hasDevices: this.hasDevices,
            hasPermission: this.hasPermission,
        };
        this._dialog.open(_app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_5__["AppInfoDialogComponent"], { data });
    }
    onTorchCompatible(isCompatible) {
        this.torchAvailable$.next(isCompatible || false);
    }
    toggleTorch() {
        this.torchEnabled = !this.torchEnabled;
    }
    toggleTryHarder() {
        this.tryHarder = !this.tryHarder;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 28, vars: 17, consts: [[1, "scanner-shell", 3, "hidden"], ["appMenu", "matMenu"], ["checkboxPosition", "start", 3, "selected", "click"], ["checkboxPosition", "start", 3, "selected", "click", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], ["appearance", "fill"], ["matNativeControl", "", "matInput", "", 3, "change"], ["value", "", 3, "selected"], [3, "value", "selected", 4, "ngFor", "ngForOf"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "torch", "device", "formats", "tryHarder", "deviceChange", "scanSuccess", "permissionResponse", "camerasFound", "torchCompatible"], ["class", "results", 4, "ngIf"], [4, "ngIf"], [3, "value", "selected"], [1, "results"], ["mat-icon-button", "", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-menu", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-selection-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_option_click_4_listener($event) { return ctx.toggleTryHarder(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Enable Try-harder ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_mat_list_option_6_Template, 2, 1, "mat-list-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_9_listener($event) { return ctx.openFormatsDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Barcode formats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_11_listener($event) { return ctx.openInfoDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "App info");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppComponent_Template_select_change_15_listener($event) { return ctx.onDeviceSelectChange($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "No Device Selected");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, AppComponent_option_18_Template, 2, 3, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "zxing-scanner", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deviceChange", function AppComponent_Template_zxing_scanner_deviceChange_22_listener($event) { return ctx.currentDevice = $event; })("scanSuccess", function AppComponent_Template_zxing_scanner_scanSuccess_22_listener($event) { return ctx.onCodeResult($event); })("permissionResponse", function AppComponent_Template_zxing_scanner_permissionResponse_22_listener($event) { return ctx.onHasPermission($event); })("camerasFound", function AppComponent_Template_zxing_scanner_camerasFound_22_listener($event) { return ctx.onCamerasFound($event); })("torchCompatible", function AppComponent_Template_zxing_scanner_torchCompatible_22_listener($event) { return ctx.onTorchCompatible($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AppComponent_section_23_Template, 8, 1, "section", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AppComponent_ng_container_24_Template, 5, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_ng_container_25_Template, 3, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_ng_container_26_Template, 5, 0, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AppComponent_ng_container_27_Template, 5, 0, "ng-container", 12);
    } if (rf & 2) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", !ctx.hasDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx.tryHarder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 15, ctx.torchAvailable$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", !ctx.currentDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.availableDevices);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("torch", ctx.torchEnabled)("device", ctx.currentDevice)("formats", ctx.formatsEnabled)("tryHarder", ctx.tryHarder);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.qrResultString);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPermission === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasPermission === false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasDevices === false);
    } }, directives: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["_MatMenu"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatSelectionList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_7__["MatListOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuItem"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_6__["MatMenuTrigger"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _zxing_scanner_src_lib_zxing_scanner_component__WEBPACK_IMPORTED_MODULE_15__["ZXingScannerComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["zxing-scanner[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 10px;\n  background: #333;\n  display: -webkit-box;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: bold;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper {\n  padding: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-wrapper .mat-form-field-flex {\n  padding-top: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]     .mat-form-field-underline {\n  bottom: 0;\n}\n\nheader[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  padding: 10px;\n  line-height: 2;\n  background: #474747;\n  color: #fff;\n}\n\n.results[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  padding: 15px;\n  background: #02c3c3;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.results[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  display: block;\n  font-size: 60%;\n  margin: -0.6em 0 0 0;\n}\n\n.results[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  line-height: 1;\n  font-weight: bolder;\n  font-size: 120%;\n  float: right;\n  color: #fff;\n  margin: -8px -8px -8px 8px;\n}\n\nh2[_ngcontent-%COMP%] {\n  padding: 0 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXExlb1xcUHJvamVjdFxcUGVyc29uYWxcXG5neC1zY2FubmVyXFxwcm9qZWN0c1xcenhpbmctc2Nhbm5lci1kZW1vL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUVFLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0FDQUY7O0FERUU7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBRUUsV0FBQTtFQUNBLGlCQUFBO0FDRko7O0FES007RUFFRSxVQUFBO0FDSlI7O0FETVE7RUFDRSxjQUFBO0FDSlY7O0FET007RUFDRSxTQUFBO0FDTFI7O0FEU0k7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQ1BOOztBRFlBO0VBRUUsd0JBQUE7RUFBQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBRUEsb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNYRjs7QURhRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQ1hKOztBRGNFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBRUEsMEJBQUE7QUNiSjs7QURpQkE7RUFDRSxlQUFBO0FDZEYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ6eGluZy1zY2FubmVyIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG5oZWFkZXIge1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgZGlzcGxheTogZmxleDtcblxuICBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gIH1cblxuICBtYXQtZm9ybS1maWVsZCB7XG5cbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcblxuICAgIDo6bmctZGVlcCB7XG4gICAgICAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG5cbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAubWF0LWZvcm0tZmllbGQtZmxleCB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgb3B0aW9uIHtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogMjtcbiAgICAgIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG4gIH1cbn1cblxuLnJlc3VsdHMge1xuXG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzAyYzNjMztcbiAgY29sb3I6ICNmZmY7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gIHNtYWxsIHtcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogNjAlO1xuICAgIG1hcmdpbjogLS42ZW0gMCAwIDA7XG4gIH1cblxuICBidXR0b24ge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gICAgZm9udC1zaXplOiAxMjAlO1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICAkbWc6IDhweDtcbiAgICBtYXJnaW46ICgtJG1nKSAoLSRtZykgKC0kbWcpICRtZztcbiAgfVxufVxuXG5oMiB7XG4gIHBhZGRpbmc6IDAgMTZweDtcbn1cbiIsInp4aW5nLXNjYW5uZXIge1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG5cbmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogIzMzMztcbiAgZGlzcGxheTogZmxleDtcbn1cbmhlYWRlciBidXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaGVhZGVyIG1hdC1mb3JtLWZpZWxkIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XG4gIHBhZGRpbmc6IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC13cmFwcGVyIC5tYXQtZm9ybS1maWVsZC1mbGV4IHtcbiAgcGFkZGluZy10b3A6IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBib3R0b206IDA7XG59XG5oZWFkZXIgbWF0LWZvcm0tZmllbGQgb3B0aW9uIHtcbiAgcGFkZGluZzogMTBweDtcbiAgbGluZS1oZWlnaHQ6IDI7XG4gIGJhY2tncm91bmQ6ICM0NzQ3NDc7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucmVzdWx0cyB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIGJvdHRvbTogMDtcbiAgcGFkZGluZzogMTVweDtcbiAgYmFja2dyb3VuZDogIzAyYzNjMztcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5yZXN1bHRzIHNtYWxsIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogNjAlO1xuICBtYXJnaW46IC0wLjZlbSAwIDAgMDtcbn1cbi5yZXN1bHRzIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIGZvbnQtc2l6ZTogMTIwJTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAtOHB4IC04cHggLThweCA4cHg7XG59XG5cbmgyIHtcbiAgcGFkZGluZzogMCAxNnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: 'app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "../../node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-info-dialog/app-info-dialog.component */ "./src/app/app-info-dialog/app-info-dialog.component.ts");
/* harmony import */ var _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-info/app-info.component */ "./src/app/app-info/app-info.component.ts");
/* harmony import */ var _app_ui_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-ui.module */ "./src/app/app-ui.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./formats-dialog/formats-dialog.component */ "./src/app/formats-dialog/formats-dialog.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, imports: [[
            // Angular
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
            // Local
            _app_ui_module__WEBPACK_IMPORTED_MODULE_6__["AppUiModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormatsDialogComponent"], _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_5__["AppInfoComponent"], _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppInfoDialogComponent"]], imports: [
        // Angular
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"], 
        // Local
        _app_ui_module__WEBPACK_IMPORTED_MODULE_6__["AppUiModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    // Angular
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
                    // Local
                    _app_ui_module__WEBPACK_IMPORTED_MODULE_6__["AppUiModule"],
                ],
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"], _formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormatsDialogComponent"], _app_info_app_info_component__WEBPACK_IMPORTED_MODULE_5__["AppInfoComponent"], _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppInfoDialogComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
                entryComponents: [_formats_dialog_formats_dialog_component__WEBPACK_IMPORTED_MODULE_8__["FormatsDialogComponent"], _app_info_dialog_app_info_dialog_component__WEBPACK_IMPORTED_MODULE_4__["AppInfoDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/barcode-formats.ts":
/*!************************************!*\
  !*** ./src/app/barcode-formats.ts ***!
  \************************************/
/*! exports provided: formatsAvailable, formatNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatsAvailable", function() { return formatsAvailable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatNames", function() { return formatNames; });
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zxing/library */ "../../node_modules/@zxing/library/esm5/index.js");
/* harmony import */ var _zxing_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zxing_library__WEBPACK_IMPORTED_MODULE_0__);

const formatsAvailable = [
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].CODE_39,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].CODE_93,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].CODE_128,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].EAN_8,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].EAN_13,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].UPC_A,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].UPC_E,
    _zxing_library__WEBPACK_IMPORTED_MODULE_0__["BarcodeFormat"].QR_CODE,
];
const formatNames = [
    'Aztec 2D barcode format.',
    'CODABAR 1D format.',
    'Code 39 1D format.',
    'Code 93 1D format.',
    'Code 128 1D format.',
    'Data Matrix 2D barcode format.',
    'EAN-8 1D format.',
    'EAN-13 1D format.',
    'ITF (Interleaved Two of Five) 1D format.',
    'MaxiCode 2D barcode format.',
    'PDF417 format.',
    'QR Code 2D barcode format.',
    'RSS 14',
    'RSS EXPANDED',
    'UPC-A 1D format.',
    'UPC-E 1D format.',
    'UPC/EAN extension format. Not a stand-alone format.',
];


/***/ }),

/***/ "./src/app/formats-dialog/formats-dialog.component.ts":
/*!************************************************************!*\
  !*** ./src/app/formats-dialog/formats-dialog.component.ts ***!
  \************************************************************/
/*! exports provided: FormatsDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatsDialogComponent", function() { return FormatsDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "../../node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _barcode_formats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../barcode-formats */ "./src/app/barcode-formats.ts");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "../../node_modules/@angular/material/fesm2015/list.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "../../node_modules/@angular/material/fesm2015/button.js");








function FormatsDialogComponent_mat_list_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-list-option", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const format_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selected", ctx_r2.isEnabled(format_r3))("value", format_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.formatNames[format_r3], " ");
} }
class FormatsDialogComponent {
    constructor(data, _dialogRef) {
        this.data = data;
        this._dialogRef = _dialogRef;
        this.formatsAvailable = _barcode_formats__WEBPACK_IMPORTED_MODULE_2__["formatsAvailable"];
        this.formatNames = _barcode_formats__WEBPACK_IMPORTED_MODULE_2__["formatNames"];
        this.formatsEnabled = data.formatsEnabled || [];
    }
    close() {
        this._dialogRef.close(this.formatsEnabled);
    }
    isEnabled(format) {
        return this.formatsEnabled.find(x => x === format);
    }
    onSelectionChange(event) {
        this.formatsEnabled = event.source.selectedOptions.selected.map(selected => selected.value);
    }
}
FormatsDialogComponent.ɵfac = function FormatsDialogComponent_Factory(t) { return new (t || FormatsDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
FormatsDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormatsDialogComponent, selectors: [["app-formats-dialog"]], decls: 8, vars: 1, consts: [[3, "selectionChange"], ["selectedFormats", ""], ["checkboxPosition", "start", 3, "selected", "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", 3, "click"], ["checkboxPosition", "start", 3, "selected", "value"]], template: function FormatsDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Available formats:\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-selection-list", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function FormatsDialogComponent_Template_mat_selection_list_selectionChange_2_listener($event) { return ctx.onSelectionChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormatsDialogComponent_mat_list_option_4_Template, 2, 3, "mat-list-option", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormatsDialogComponent_Template_button_click_6_listener($event) { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Done");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.formatsAvailable);
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatSelectionList"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListOption"]], styles: ["mat-dialog-actions[_ngcontent-%COMP%] {\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9ybWF0cy1kaWFsb2cvQzpcXExlb1xcUHJvamVjdFxcUGVyc29uYWxcXG5neC1zY2FubmVyXFxwcm9qZWN0c1xcenhpbmctc2Nhbm5lci1kZW1vL3NyY1xcYXBwXFxmb3JtYXRzLWRpYWxvZ1xcZm9ybWF0cy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Zvcm1hdHMtZGlhbG9nL2Zvcm1hdHMtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7VUFBQSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvZm9ybWF0cy1kaWFsb2cvZm9ybWF0cy1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZGlhbG9nLWFjdGlvbnMge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuIiwibWF0LWRpYWxvZy1hY3Rpb25zIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatsDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-formats-dialog',
                templateUrl: './formats-dialog.component.html',
                styleUrls: ['./formats-dialog.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/public_api.ts":
/*!*******************************!*\
  !*** ./src/app/public_api.ts ***!
  \*******************************/
/*! exports provided: ZXingScannerComponent, ZXingScannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../zxing-scanner/src/public_api */ "../zxing-scanner/src/public_api.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerComponent", function() { return _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ZXingScannerComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ZXingScannerModule", function() { return _zxing_scanner_src_public_api__WEBPACK_IMPORTED_MODULE_0__["ZXingScannerModule"]; });

/*
 * Public API Surface of zxing-scanner
 */



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Leo\Project\Personal\ngx-scanner\projects\zxing-scanner-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
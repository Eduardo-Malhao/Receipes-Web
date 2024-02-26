"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mapStatusHTTP(status) {
    switch (status) {
        case 'SUCCESS': return 200;
        case 'INVALID_DATA': return 401;
        case 'NOT_FOUND': return 404;
        case 'CONFLICT': return 409;
        default: return 500;
    }
}
exports.default = mapStatusHTTP;
//# sourceMappingURL=mapStatusHTTP.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_module_1 = require("./app.module");
// const app = express();
// const port = 4200;
// app.get('/api', (req, res) => {
//     console.log('server being hit');
//   res.send('Hello from server!');
// });
const core_1 = require("@nestjs/core");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const app = yield core_1.NestFactory.create(app_module_1.AppModule);
        yield app.listen((_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4200);
    });
}
bootstrap();
//# sourceMappingURL=app.js.map
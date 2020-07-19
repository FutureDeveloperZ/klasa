"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@klasa/core");
class default_1 extends core_1.Event {
    constructor(store, directory, file) {
        super(store, directory, file, { event: 'messageDeleteBulk' });
    }
    async run(messages) {
        for (const message of messages.values()) {
            if (message.command && message.command.deletable) {
                for (const msg of message.responses) {
                    if (!msg.deleted)
                        await msg.delete();
                }
            }
        }
    }
}
exports.default = default_1;
//# sourceMappingURL=coreMessageDeleteBulk.js.map
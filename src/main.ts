import { delay } from "@devicescript/core"
import { setStatusLight } from "@devicescript/runtime"

setInterval(async () => {
    await setStatusLight(0x100000)
    await delay(1000)
    await setStatusLight(0x000010)
    await delay(1000)
}, 1000)
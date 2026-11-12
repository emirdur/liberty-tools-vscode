// TEMPORARY diagnostics for Linux Gradle debug auto-attach. Do not merge.
import * as fs from "fs";
import * as os from "os";
import * as path from "path";
export const DIAG_FILE = path.join(os.tmpdir(), "liberty-diag.log");
export function diag(msg: string): void {
    try { fs.appendFileSync(DIAG_FILE, `${new Date().toISOString()} ${msg}\n`); } catch { /* ignore */ }
}

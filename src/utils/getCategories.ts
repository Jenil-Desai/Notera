import {BaseDirectory, readDir} from "@tauri-apps/plugin-fs";

export async function getCategories() {
    try {
        const categories = await readDir("Desktop", {baseDir: BaseDirectory.Desktop});
        return categories.map(cat => (cat.isDirectory ? cat.name : null)).filter(cat => cat !== null);
    } catch (e) {
        throw e;
    }
}
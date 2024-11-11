import {BaseDirectory, readDir} from "@tauri-apps/plugin-fs";

export async function getFilesInCategory(categories: string[]): Promise<Record<string, string[]>> {
    const allFiles: Record<string, string[]> = {};

    try {
        for (const cat of categories) {
            const notes = await readDir("Desktop/" + cat, {baseDir: BaseDirectory.Desktop});
            const filteredNotes = notes.map(item => (item.isFile ? item.name : null)).filter(item => item !== null);
            allFiles[cat] = filteredNotes as string[];
        }
        return allFiles;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
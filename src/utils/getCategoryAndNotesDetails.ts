import {BaseDirectory, readDir, stat} from "@tauri-apps/plugin-fs";

export async function getCategoryAndNotesDetails({categoryName}: { categoryName: string }) {
    try {
        const files = await readDir("Desktop/" + categoryName, {baseDir: BaseDirectory.Desktop});

        const contents = [];

        for (const file of files) {
            if (file.isFile) {
                let path = `Desktop/${categoryName}/${file.name}`;
                const fileInfo = await stat(path, {baseDir: BaseDirectory.Desktop});
                contents.push({name: file.name, info: fileInfo});
            }
        }

        return contents;
    } catch (e) {
        console.log(e)
    }
}
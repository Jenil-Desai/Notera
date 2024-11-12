import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select"
import {BaseDirectory, writeTextFile} from "@tauri-apps/plugin-fs"
import {useToast} from "@/hooks/use-toast.ts"
import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {EditorContent, useEditor} from '@tiptap/react'
import {useEffect, useState} from 'react'
import {useLocation} from "wouter"
import StarterKit from "@tiptap/starter-kit"
import Highlight from "@tiptap/extension-highlight"
import Typography from "@tiptap/extension-typography"
import Image from "@tiptap/extension-image"
import TaskList from "@tiptap/extension-task-list"
import TaskItem from "@tiptap/extension-task-item"
import Underline from '@tiptap/extension-underline'
import TextAlign from '@tiptap/extension-text-align'
import Superscript from '@tiptap/extension-superscript'
import Subscript from '@tiptap/extension-subscript'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import Table from '@tiptap/extension-table'
import TableRow from '@tiptap/extension-table-row'
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Dropcursor from '@tiptap/extension-dropcursor'
import Gapcursor from '@tiptap/extension-gapcursor'
import CharacterCount from '@tiptap/extension-character-count'
import Color from '@tiptap/extension-color'
import TextStyle from '@tiptap/extension-text-style'
import FontFamily from '@tiptap/extension-font-family'
import {common, createLowlight} from "lowlight"

import {noteCreationScreenBreadcrums} from "@/screens/NoteCreationScreen/NoteCreationScreenBreadcrums.ts"
import {NewCategoryDialog} from "@/screens/NoteCreationScreen/NewCategoryDialog.tsx"
import {AppBreadcrums} from "@/custom-components/AppBreadcrums/AppBreadcrums.tsx"
import {MenuBar} from "@/screens/NoteCreationScreen/NoteEditorMenuBar.tsx"
import {getCategories} from "@/utils/getCategories.ts"
import {NoteCreationScreenStyle} from "@/screens/NoteCreationScreen/NoteCreationScreenStyle.tsx";

export default function NoteTakingScreen() {
    const [categories, setCategories] = useState<string[]>([])
    const [category, setCategory] = useState('')
    const [title, setTitle] = useState('')
    const [location, setLocation] = useLocation()
    const {toast} = useToast()

    useEffect(() => {
        async function main() {
            const categoriess = await getCategories()
            setCategories(categoriess)
            if (!location) console.log(location)
        }

        main().then()
    }, [])

    const lowlight = createLowlight(common)

    const editor = useEditor({
        extensions: [
            StarterKit,
            Highlight,
            Typography,
            Image,
            TaskList,
            TaskItem.configure({nested: true}),
            Underline,
            TextAlign.configure({types: ['heading', 'paragraph']}),
            Superscript,
            Subscript,
            Link,
            Placeholder.configure({placeholder: 'Write something...'}),
            Table.configure({resizable: true}),
            TableRow,
            TableCell,
            TableHeader,
            CodeBlockLowlight.configure({lowlight}),
            Dropcursor,
            Gapcursor,
            CharacterCount,
            Color,
            TextStyle,
            FontFamily,
        ],
        content: '',
        editorProps: {
            attributes: {
                class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl focus:outline-none',
            },
        },
    })

    async function submit() {
        try {
            if (!editor) {
                return toast({
                    variant: "destructive",
                    title: "Error",
                    description: "Note creation failed. Please try again later. 1",
                })
            }
            const content = editor.getJSON()
            const path = `Desktop/${category}/${title}.txt`
            await writeTextFile(path, JSON.stringify(content), {baseDir: BaseDirectory.Desktop})
            toast({
                variant: "default",
                title: "Success",
                description: "Note created successfully",
            })
            setLocation("/category/" + category)
        } catch (e) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Note creation failed. Please try again later.",
            })
            setLocation("/home")
        }
    }

    return (
        <div className="flex flex-col h-screen w-screen">
            <NoteCreationScreenStyle/>
            <AppBreadcrums items={noteCreationScreenBreadcrums}/>
            <div className="flex-1 p-4">
                <div className="mb-4 flex justify-between items-center space-x-4">
                    <Input
                        type="text"
                        placeholder="Note Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="text-2xl font-bold"
                    />
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Select Category"/>
                        </SelectTrigger>
                        <SelectContent>
                            {categories.map((cat) => (
                                <SelectItem key={cat} value={cat}>
                                    {cat}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <NewCategoryDialog/>
                </div>
                <div className="border rounded-lg shadow-sm">
                    <MenuBar editor={editor}/>
                    <EditorContent editor={editor} className="min-h-[500px] p-4"/>
                </div>
                <div className="mt-4 flex justify-end">
                    <Button onClick={submit}>Save Note</Button>
                </div>
            </div>
        </div>
    )
}
import {Button} from "@/components/ui/button"
import {
    AlignCenter,
    AlignJustify,
    AlignLeft,
    AlignRight,
    Bold,
    CheckSquare,
    Code,
    Heading1,
    Heading2,
    Image as ImageIcon,
    Italic,
    Link,
    List,
    ListOrdered,
    Palette,
    Quote,
    Redo,
    Strikethrough,
    Subscript,
    Superscript,
    Table,
    Type,
    Underline,
    Undo
} from "lucide-react"
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"

export const MenuBar = ({editor}: { editor: any }) => {
    if (!editor) {
        return null
    }

    return (
        <TooltipProvider>
            <div className="flex flex-wrap gap-2 p-2 bg-muted rounded-t-lg">
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleBold().run()}
                            disabled={!editor.can().chain().focus().toggleBold().run()}
                            className={editor.isActive('bold') ? 'bg-secondary' : ''}
                        >
                            <Bold className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Bold</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleItalic().run()}
                            disabled={!editor.can().chain().focus().toggleItalic().run()}
                            className={editor.isActive('italic') ? 'bg-secondary' : ''}
                        >
                            <Italic className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Italic</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleUnderline().run()}
                            disabled={!editor.can().chain().focus().toggleUnderline().run()}
                            className={editor.isActive('underline') ? 'bg-secondary' : ''}
                        >
                            <Underline className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Underline</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleStrike().run()}
                            disabled={!editor.can().chain().focus().toggleStrike().run()}
                            className={editor.isActive('strike') ? 'bg-secondary' : ''}
                        >
                            <Strikethrough className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Strikethrough</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleHeading({level: 1}).run()}
                            className={editor.isActive('heading', {level: 1}) ? 'bg-secondary' : ''}
                        >
                            <Heading1 className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Heading 1</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleHeading({level: 2}).run()}
                            className={editor.isActive('heading', {level: 2}) ? 'bg-secondary' : ''}
                        >
                            <Heading2 className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Heading 2</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleBulletList().run()}
                            className={editor.isActive('bulletList') ? 'bg-secondary' : ''}
                        >
                            <List className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Bullet List</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleOrderedList().run()}
                            className={editor.isActive('orderedList') ? 'bg-secondary' : ''}
                        >
                            <ListOrdered className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Ordered List</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleTaskList().run()}
                            className={editor.isActive('taskList') ? 'bg-secondary' : ''}
                        >
                            <CheckSquare className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Task List</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
                            className={editor.isActive('codeBlock') ? 'bg-secondary' : ''}
                        >
                            <Code className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Code Block</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleBlockquote().run()}
                            className={editor.isActive('blockquote') ? 'bg-secondary' : ''}
                        >
                            <Quote className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Blockquote</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().setTextAlign('left').run()}
                            className={editor.isActive({textAlign: 'left'}) ? 'bg-secondary' : ''}
                        >
                            <AlignLeft className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Align Left</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().setTextAlign('center').run()}
                            className={editor.isActive({textAlign: 'center'}) ? 'bg-secondary' : ''}
                        >
                            <AlignCenter className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Align Center</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().setTextAlign('right').run()}
                            className={editor.isActive({textAlign: 'right'}) ? 'bg-secondary' : ''}
                        >
                            <AlignRight className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Align Right</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().setTextAlign('justify').run()}
                            className={editor.isActive({textAlign: 'justify'}) ? 'bg-secondary' : ''}
                        >
                            <AlignJustify className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Justify</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleSuperscript().run()}
                            className={editor.isActive('superscript') ? 'bg-secondary' : ''}
                        >
                            <Superscript className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Superscript</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().toggleSubscript().run()}
                            className={editor.isActive('subscript') ? 'bg-secondary' : ''}
                        >
                            <Subscript className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Subscript</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                const url = window.prompt('Enter the URL:')
                                if (url) {
                                    editor.chain().focus().setLink({href: url}).run()
                                }
                            }}
                            className={editor.isActive('link') ? 'bg-secondary' : ''}
                        >
                            <Link className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Add Link</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().insertTable({
                                rows: 3,
                                cols: 3,
                                withHeaderRow: true
                            }).run()}
                        >
                            <Table className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Insert Table</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                const color = window.prompt('Enter the color (e.g., #ff0000):')
                                if (color) {
                                    editor.chain().focus().setColor(color).run()
                                }
                            }}
                        >
                            <Palette className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Set Text Color</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                const fontFamily = window.prompt('Enter the font family:')
                                if (fontFamily) {
                                    editor.chain().focus().setFontFamily(fontFamily).run()
                                }
                            }}
                        >
                            <Type className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Set Font Family</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().undo().run()}
                            disabled={!editor.can().chain().focus().undo().run()}
                        >
                            <Undo className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Undo</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => editor.chain().focus().redo().run()}
                            disabled={!editor.can().chain().focus().redo().run()}
                        >
                            <Redo className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Redo</TooltipContent>
                </Tooltip>

                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => {
                                const url = window.prompt('Enter the URL of the image:')
                                if (url) {
                                    editor.chain().focus().setImage({src: url}).run()
                                }
                            }}
                        >
                            <ImageIcon className="h-4 w-4"/>
                        </Button>
                    </TooltipTrigger>
                    <TooltipContent>Insert Image</TooltipContent>
                </Tooltip>
            </div>
        </TooltipProvider>
    )
}
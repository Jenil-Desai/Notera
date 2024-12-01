import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button.tsx";
import {PlusCircle} from "lucide-react";
import {useState} from "react";
import {Label} from "@/components/ui/label.tsx";
import {Input} from "@/components/ui/input.tsx";
import {BaseDirectory, exists, mkdir} from "@tauri-apps/plugin-fs";
import {useToast} from "@/hooks/use-toast.ts";

export const NewCategoryDialog = () => {
    const {toast} = useToast()
    const [isDialogOpen, setIsDialogOpen] = useState(false)
    const [newCategory, setNewCategory] = useState('')

    async function handleAddCategory() {
        const isExists = await exists("Desktop/" + newCategory, {baseDir: BaseDirectory.Desktop})
        if (isExists) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Category already exists",
            })
        } else {
            await mkdir("Desktop/" + newCategory, {baseDir: BaseDirectory.Desktop})
            setIsDialogOpen(false)
            toast({
                variant: "default",
                title: "Success",
                description: "Category created successfully"
            })
        }
    }

    return (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
                <Button variant="outline" size="icon"
                        className={"flex h-9 w-[180px] items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"}>
                    <PlusCircle className="h-4 w-4 opacity-50"/>
                    New Category
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add New Category</DialogTitle>
                    <DialogDescription>
                        Create a new category for your notes.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input
                            id="name"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit" onClick={handleAddCategory}>Add Category</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
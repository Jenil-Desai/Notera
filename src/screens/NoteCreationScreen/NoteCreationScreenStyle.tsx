export function NoteCreationScreenStyle() {
    return (
        <style>{`
                .ProseMirror p.is-editor-empty:first-child::before {
                    color: #718096;
                    content: attr(data-placeholder);
                    float: left;
                    height: 0;
                    pointer-events: none;
                }

                .ProseMirror .selection {
                    background-color: #b4d5ff;
                }

                .ProseMirror table {
                    border-collapse: collapse;
                    margin: 0;
                    overflow: hidden;
                    table-layout: fixed;
                    width: 100%;
                }

                .ProseMirror table td,
                .ProseMirror table th {
                    border: 2px solid #ced4da;
                    box-sizing: border-box;
                    min-width: 1em;
                    padding: 3px 5px;
                    position: relative;
                    vertical-align: top;
                }

                .ProseMirror table th {
                    background-color: #f1f3f5;
                    font-weight: bold;
                    text-align: left;
                }

                .ProseMirror table .selectedCell:after {
                    background: rgba(200, 200, 255, 0.4);
                    content: "";
                    left: 0;
                    right: 0;
                    top: 0;
                    bottom: 0;
                    pointer-events: none;
                    position: absolute;
                    z-index: 2;
                }
            `}</style>
    )

}
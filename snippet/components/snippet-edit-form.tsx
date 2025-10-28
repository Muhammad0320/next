"use client";

import { Editor } from "@monaco-editor/react";
import { Snippet } from "../app/generated/prisma/browser";
import { useState } from "react";

interface SnippetEditFormProps {
  snippet: Snippet;
}



export default function SnippetEditForm({ snippet }: SnippetEditFormProps) {

  const [code, setCode] = useState(snippet.code)

  const handleEditorChange = (value: string = "") => {
    setCode(value)
  }

  return (
    <div>
      <Editor
        height={"40vh"}
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
      <form action="">
        <button type="submit" className="p-2 border rounded">
            Save 
        </button>
      </form>
    </div>
  );
}

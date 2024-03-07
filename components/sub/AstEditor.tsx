import { useState } from "react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-funky.min.css'; 

const CodeEditor = ({code, setCode} : any) => {
      return (
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.webmanifest , 'json')}
          padding={10}
          style={{
            width: "100%",
            height: "100%",
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 15,
            backgroundColor: "#06051f",
            borderRadius: 6,
            color: "#fff",
            overflowY: 'auto'
          }}
        />
    );
};

export default CodeEditor;

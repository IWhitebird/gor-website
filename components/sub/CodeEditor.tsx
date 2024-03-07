import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-funky.css'; 

const CodeEditor = ({code, setCode} : any) => {
      return (
        <Editor
          value={code}
          onValueChange={code => setCode(code)}
          highlight={code => highlight(code, languages.js , 'js')}
          padding={10}
          style={{
            width: "100%",
            height: "100%",
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 18,
            backdropFilter: 'blur(4px)',
            borderRadius: 6,
            color: "#fff",
            overflowY: 'auto'
          }}
        />
    );
};

export default CodeEditor;

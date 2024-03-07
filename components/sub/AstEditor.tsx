import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs';
import 'prismjs/components/prism-json';
import 'prismjs/themes/prism-funky.min.css'; 

const AstEditor = ({code} : any) => {
      return (
        <Editor
          value={code}
          onValueChange={() => {}}
          highlight={code => highlight(code, languages.webmanifest , 'json')}
          padding={10}
          style={{
            width: "100%",
            height: "100%",
            fontFamily: '"Fira code", "Fira Mono", monospace',
            fontSize: 15,
            borderRadius: 6,
            color: "#fff",
            backdropFilter: 'blur(4px)',
            overflowY: 'auto'
          }}
        />
    );
};

export default AstEditor;

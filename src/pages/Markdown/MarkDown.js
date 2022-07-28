import React from 'react';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
    console.log('handleEditorChange', html, text);
}
export default function MarkDown() {
    return (
        <>
            <p>dfdfdfd</p>
            <h1>dfdfdfdfdfdfd</h1>
            <ul>
                <li>bhujhjjhhhjhjhhjh</li>
            </ul>
            <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
        </>

    );
};
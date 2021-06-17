import React from 'react';
import ReactDOM from 'react-dom';
import {diffLines, formatLines} from 'unidiff';
import {parseDiff, Diff, Hunk} from 'react-diff-view';

import 'antd/dist/antd.min.css';
import 'react-diff-view/style/index.css';
// import './styles.css';

const EMPTY_HUNKS = [];

const oldText = '[\n' +
    '    {\n' +
    '        "age": "22",\n' +
    '        "name": "Niroj"\n' +
    '    },\n' +
    '    {\n' +
    '        "age": "20",\n' +
    '        "name": "Dey"\n' +
    '    }\n' +
    ']\n';
const newText = '[\n' +
    '    {\n' +
    '        "age": "22",\n' +
    '        "name": "Niroj"\n' +
    '    },\n' +
    '    {\n' +
    '        "age": "20",\n' +
    '        "name": "Dey1"\n' +
    '    }\n' +
    ']\n';

function App({oldText, newText}) {

    const diffText = formatLines(diffLines(oldText, newText), {context: 3});
    const [diff] = parseDiff(diffText, {nearbySequences: 'zip'});

    return (
        <div>
            <main>
                <Diff viewType="split" diffType='' hunks={diff.hunks || EMPTY_HUNKS}>
                    {hunks =>
                        hunks.map(hunk => (
                            <Hunk key={hunk.content} hunk={hunk} />
                        ))
                    }
                </Diff>
            </main>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App oldText={oldText} newText={newText}/>, rootElement);

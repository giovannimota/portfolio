// External Libraries
import React from 'react'
import Editor from 'react-simple-code-editor'
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'

// Components

// Styles
import { Container } from './styles'

interface Props {
  code: string
}

export const CodeView: React.FC<Props> = ({ code }) => {
  return (
    <Container>
      <Editor
        disabled
        inputMode="text"
        value={code}
        padding={24}
        style={{
          fontSize: 16,
          borderRadius: 16,
          width: 'fit-content',
          backgroundColor: '#1d1d1d',
          fontFamily: '"Fira code", "Fira Mono", monospace'
        }}
        highlight={code => highlight(code, languages.js)}
        onValueChange={console.log}
      />
    </Container>
  )
}

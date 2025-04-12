// components/TextScramble.tsx
import { useEffect, useState } from 'react'
import { Typography } from '../Typography'
import { TypographyVariants } from '../Typography/types'

const chars = '!<>-_\\/[]{}—=+*^?#________'

function randomChar() {
  return chars[Math.floor(Math.random() * chars.length)]
}

interface Props {
  text: string
  speed?: number // ms
  textColor?: string
  textVariant?: TypographyVariants
}

export default function TextScramble({
  text,
  speed = 50,
  textColor,
  textVariant = 'b1'
}: Props) {
  const [output, setOutput] = useState('')
  const [frame, setFrame] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    let complete = false

    const scramble = () => {
      setOutput(prev => {
        let result = ''
        for (let i = 0; i < text.length; i++) {
          if (i < frame) {
            result += text[i]
          } else {
            result += randomChar()
          }
        }
        return result
      })

      if (frame <= text.length) {
        setFrame(prev => prev + 1)
      } else {
        clearInterval(interval)
      }
    }

    interval = setInterval(scramble, speed)

    return () => clearInterval(interval)
  }, [text, speed, frame])

  return (
    <Typography
      color={textColor}
      variant={textVariant}
      // style={{ fontSize: '1.5rem', fontFamily: 'monospace', whiteSpace: 'pre' }}
    >
      {output}
    </Typography>
  )
}

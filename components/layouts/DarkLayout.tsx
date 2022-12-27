import { FC, ReactNode } from 'react'
type Props = {
  children: ReactNode
}
const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: '1rem',
        borderRadius: '5px',
      }}
    >
      <h3>Dark Layout</h3>
      <div>{children}</div>
    </div>
  )
}

export default DarkLayout

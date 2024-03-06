interface DataPortContainerProps {
  children?: React.ReactNode
}

export default function DataPortContainer({ children }: DataPortContainerProps) {
  const containerStyle = { margin: '0' }
  return <div style={containerStyle} className='data-port-container'>{children}</div>
}
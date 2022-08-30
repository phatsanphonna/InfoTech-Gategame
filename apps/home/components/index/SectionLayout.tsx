interface Props {
  bgColor: 'bg-black' | 'bg-white' | string
}

const SectionLayout: React.FC<Props> = ({ bgColor, children }) => {
  return (
    <div className={['min-h-screen', 'w-full', bgColor].join(' ')}>
      <div className="container mx-auto min-h-screen flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  )
}

export default SectionLayout


function Banner({title,body,btnTitle}) {
  return (
    <div className="bg-gray-200 pt-20">
    <div className="text-center max-w-2xl max-md:max-w-md mx-auto py-8 px-2">
      <div>
        <h2 className="text-gray-800 md:text-4xl text-3xl font-extrabold mb-4 md:!leading-[45px]">{title}</h2>
        <p className="text-gray-600 mt-6 text-sm leading-relaxed">
            {body}
        </p>
        <div className="mt-12 flex gap-x-6 gap-y-4 mb-10 justify-center max-sm:flex-col">
          <button type='button'
            className="hover:bg-transparent  border  transition-all text-white font-bold text-sm rounded px-6 py-3">{btnTitle}</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Banner